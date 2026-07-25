/* ============================================
   Abundant Life Centre Mareeba — ResponsiveImage
   Wrapper around next/image with sensible defaults
   ============================================ */

import Image from "next/image";

export interface ResponsiveImageProps {
  /** Image path (e.g., "/abundant-life-website/images/about/church.webp") */
  src: string;
  /** Descriptive alt text (required — no default) */
  alt: string;
  /** Additional CSS classes */
  className?: string;
  /** Fixed width (omit when using fill) */
  width?: number;
  /** Fixed height (omit when using fill) */
  height?: number;
  /** Use fill mode (default for full-width hero/banner images) */
  fill?: boolean;
  /** Priority loading — sets priority + disables lazy loading */
  priority?: boolean;
  /** Responsive sizes attribute (defaults to "100vw" when fill is true) */
  sizes?: string;
  /** Object-position for focal point control (e.g., "center 40%") */
  objectPosition?: string;
}

export default function ResponsiveImage({
  src,
  alt,
  className = "",
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  objectPosition,
}: ResponsiveImageProps) {
  const resolvedSizes = sizes ?? (fill ? "100vw" : undefined);

  const style = objectPosition
    ? { objectPosition }
    : undefined;

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={resolvedSizes}
      className={className}
      style={style}
    />
  );
}
