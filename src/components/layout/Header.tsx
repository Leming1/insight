'use client';

import Link from 'next/link';
import React from 'react';

/**
 * Header with breakpoint logic:
 * - < 1024px: burger
 * - ≥ 1024px: nav + CTA placeholder
 * Heights: 80 (mobile), 120 (desktop).
 */

export default function Header() {
  return (
    <header className="w-full relative bg-transparent">
      <div className="container-1280 px-gutter flex items-center justify-between" style={{ height: 'var(--header-height, 80px)' }}>
        {/* Left: Logo + Nav (desktop) */}
        <div className="flex items-center shrink-0">
          {/* Logo image will be provided in /public/logo.svg */}
          <Link
            href="/"
            aria-label="Insight — Home"
            className="flex items-center hover:opacity-90 transition shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Insight" className="h-[42px] w-auto block shrink-0" draggable="false" />
          </Link>

          {/* Desktop nav only */}
          <nav aria-label="Main" className="hidden lg:block lg:ml-[75px]">
            <ul className="flex items-center gap-[40px]" />
          </nav>
        </div>

        {/* Right: Phone number (desktop) */}
        <div className="flex items-center">
          {/* Desktop phone number */}
          <a
            href="tel:+79172701000"
            className="hidden lg:block hover:opacity-80 whitespace-nowrap mr-8"
            style={{
              color: 'var(--Black, #222)',
              fontFamily: 'erewhon',
              fontSize: '24px',
              fontStyle: 'italic',
              fontWeight: 700,
              lineHeight: '32px',
              letterSpacing: '-1.2px',
            }}
          >
            +7 (917) 270-10-00
          </a>
        </div>
      </div>
    </header>
  );
}
