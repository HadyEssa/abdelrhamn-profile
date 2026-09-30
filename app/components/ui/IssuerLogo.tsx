"use client";

import React from "react";
import type { IssuerMeta } from "../../lib/certifications";

interface IssuerLogoProps {
  issuer: IssuerMeta;
  /** Rendered logo height in px (width scales by asset aspect ratio). */
  height?: number;
}

const TILE_SIZE = 26;

/**
 * Subtle official issuer mark.
 * Official issuer-hosted artwork rendered at small size inside a uniform tile.
 * Dark artwork (GSDC, Alison) uses a light tile; light artwork uses a dark
 * tile — identical in dark/light mode, RTL-safe, never dominates the title.
 * Fortinet ships black-only artwork rendered monochrome-white via CSS filter
 * (geometry untouched).
 */
export const IssuerLogo: React.FC<IssuerLogoProps> = ({
  issuer,
  height = 15,
}) => {
  const width = Math.round(height * issuer.logoAspect);
  const isLightTile = issuer.tile === "light";

  return (
    <span
      className="inline-flex items-center justify-center shrink-0 rounded-[6px] border border-[var(--border-subtle)]"
      style={{
        height: TILE_SIZE,
        minWidth: TILE_SIZE,
        paddingInline: 5,
        backgroundColor: isLightTile ? "#f3f0e8" : "#0c100e",
      }}
      title={issuer.name}
      aria-label={issuer.name}
      role="img"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- local SVG asset with explicit dimensions; next/image adds no value for vector */}
      <img
        src={issuer.logo}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{
          height,
          width,
          maxWidth: 64,
          objectFit: "contain",
          display: "block",
          filter: issuer.logoFilter,
        }}
      />
    </span>
  );
};
