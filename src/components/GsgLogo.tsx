'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ASPECT_RATIO = 944 / 304;

interface GsgLogoProps {
  className?: string;
  /** Use the white-text variant suited for dark backgrounds. */
  light?: boolean;
  /** Rendered height in pixels. Width scales from the source aspect ratio. */
  height?: number;
  /** Render without the entrance animation (useful inside already-animated regions). */
  animate?: boolean;
  priority?: boolean;
}

export default function GsgLogo({
  className = '',
  light = false,
  height = 44,
  animate = true,
  priority = false,
}: GsgLogoProps) {
  const width = Math.round(height * ASPECT_RATIO);
  const src = light
    ? '/brand/gsg-brands-logo-light.webp'
    : '/brand/gsg-brands-logo.webp';

  const inner = (
    <Image
      src={src}
      alt="GSG Brands Ghana"
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className="h-auto w-auto"
      style={{ height, width: 'auto' }}
    />
  );

  if (!animate) {
    return <div className={`inline-flex items-center ${className}`}>{inner}</div>;
  }

  return (
    <motion.div
      className={`inline-flex items-center ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {inner}
    </motion.div>
  );
}
