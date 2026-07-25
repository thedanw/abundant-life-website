/**
 * download-images.mjs
 * 
 * Batch 8 — Image Download & Optimization Script
 * 
 * Reads image-manifest.json, transforms =s### → =s0 for full resolution,
 * downloads each image, converts to WebP, and saves to public/images/<category>/
 * 
 * Usage: node scripts/download-images.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MANIFEST_PATH = path.join(__dirname, "image-manifest.json");

// Ensure output directories exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Transform a Google CDN image URL to full resolution.
 * Pattern: https://lh3.googleusercontent.com/<id>=s###  →  =s0
 * If no =s### suffix, leave unchanged.
 */
function toFullResUrl(url) {
  return url.replace(/=s\d+$/, "=s0");
}

/**
 * Download an image from a URL and return the buffer.
 */
async function downloadImage(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${url}`);
  }
  const contentType = response.headers.get("content-type") || "image/jpeg";
  const buffer = Buffer.from(await response.arrayBuffer());
  return { buffer, contentType };
}

/**
 * Convert a buffer to WebP using sharp, resizing to maxWidth if specified.
 */
async function toWebP(buffer, maxWidth) {
  const pipeline = sharp(buffer).webp({ quality: 80, effort: 6 });
  if (maxWidth) {
    pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }
  return pipeline.toBuffer();
}

async function main() {
  // Read manifest
  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error(`❌ Manifest not found: ${MANIFEST_PATH}`);
    console.error("   Create scripts/image-manifest.json first.");
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
  console.log(`📋 Loaded manifest with ${manifest.length} images\n`);

  let success = 0;
  let failed = 0;

  for (const [index, entry] of manifest.entries()) {
    const num = index + 1;
    const { originalUrl, localPath, alt, maxWidth } = entry;
    const fullResUrl = toFullResUrl(originalUrl);
    const absolutePath = path.join(ROOT, localPath);

    console.log(`[${num}/${manifest.length}] ${path.basename(localPath)}`);

    try {
      // Ensure directory exists
      ensureDir(path.dirname(absolutePath));

      // Download at full resolution
      console.log(`   ⬇️  Downloading: ${fullResUrl}`);
      const { buffer } = await downloadImage(fullResUrl);

      // Convert to WebP and resize
      console.log(`   🎨 Converting to WebP${maxWidth ? ` (max ${maxWidth}px)` : ""}`);
      const webpBuffer = await toWebP(buffer, maxWidth);

      // Write file
      fs.writeFileSync(absolutePath, webpBuffer);
      const sizeKB = (webpBuffer.length / 1024).toFixed(1);
      console.log(`   ✅ Saved: ${localPath} (${sizeKB} KB)`);

      success++;
    } catch (err) {
      console.error(`   ❌ Failed: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n📊 Results: ${success} succeeded, ${failed} failed`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
