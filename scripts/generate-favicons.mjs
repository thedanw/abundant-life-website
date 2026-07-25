/**
 * generate-favicons.mjs
 * 
 * Batch 8 — Favicon & OG Image Generation
 * 
 * Reads the SVG emblem and generates:
 * - favicon.ico (48×48 PNG, renamed)
 * - favicon-16x16.png
 * - favicon-32x32.png
 * - apple-touch-icon.png (180×180)
 * - og-image.png (1200×630)
 * 
 * Usage: node scripts/generate-favicons.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const EMBLEM_SVG = path.join(PUBLIC, "images", "brand", "AbundantLife-Emblem.svg");
const LOGO_SVG = path.join(PUBLIC, "images", "brand", "AbundantLife-Logo_landscape.svg");

async function generate() {
  // Check source files exist
  if (!fs.existsSync(EMBLEM_SVG)) {
    console.error(`❌ Emblem SVG not found: ${EMBLEM_SVG}`);
    process.exit(1);
  }

  const svgBuffer = fs.readFileSync(EMBLEM_SVG);

  // 1. favicon-16x16.png
  console.log("📦 Generating favicon-16x16.png...");
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(PUBLIC, "favicon-16x16.png"));
  console.log("   ✅ favicon-16x16.png");

  // 2. favicon-32x32.png
  console.log("📦 Generating favicon-32x32.png...");
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(PUBLIC, "favicon-32x32.png"));
  console.log("   ✅ favicon-32x32.png");

  // 3. favicon.ico (use 48×48 PNG as favicon)
  console.log("📦 Generating favicon.ico...");
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(path.join(PUBLIC, "favicon.ico"));
  console.log("   ✅ favicon.ico (48×48 PNG)");

  // 4. apple-touch-icon.png (180×180)
  console.log("📦 Generating apple-touch-icon.png...");
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(PUBLIC, "apple-touch-icon.png"));
  console.log("   ✅ apple-touch-icon.png");

  // 5. og-image.png (1200×630)
  console.log("📦 Generating og-image.png...");
  // Create a branded OG image with green background + logo
  const ogWidth = 1200;
  const ogHeight = 630;

  // Create a green background
  const bgSvg = Buffer.from(`
    <svg width="${ogWidth}" height="${ogHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${ogWidth}" height="${ogHeight}" fill="#006747"/>
      <text x="600" y="280" text-anchor="middle" font-family="DM Sans, Arial, sans-serif" font-size="48" font-weight="700" fill="white">Abundant Life Centre</text>
      <text x="600" y="340" text-anchor="middle" font-family="DM Sans, Arial, sans-serif" font-size="28" font-weight="400" fill="#fed26f">Mareeba, QLD</text>
      <text x="600" y="400" text-anchor="middle" font-family="DM Sans, Arial, sans-serif" font-size="20" font-weight="400" fill="rgba(255,255,255,0.7)">Sunday 9:30am · 133 Walsh Street</text>
    </svg>
  `);

  await sharp(bgSvg)
    .resize(ogWidth, ogHeight)
    .png()
    .toFile(path.join(PUBLIC, "og-image.png"));
  console.log("   ✅ og-image.png");

  // Verify files
  const files = [
    "favicon-16x16.png",
    "favicon-32x32.png",
    "favicon.ico",
    "apple-touch-icon.png",
    "og-image.png",
  ];

  console.log("\n📊 Results:");
  for (const file of files) {
    const filePath = path.join(PUBLIC, file);
    if (fs.existsSync(filePath)) {
      const sizeKB = (fs.statSync(filePath).size / 1024).toFixed(1);
      console.log(`   ✅ ${file} (${sizeKB} KB)`);
    } else {
      console.log(`   ❌ ${file} — MISSING`);
    }
  }
}

generate().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
