'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '@ui/Button';

/**
 * Header with breakpoint logic:
 * - < 1024px: burger
 * - ≥ 1024px: nav + CTA placeholder
 * Heights: 80 (mobile), 120 (desktop).
 */

export default function Header() {
  // бургер только по брейкпоинту (<1024 = burger)
  const [menuOpen, setMenuOpen] = useState(false);

  // lock scroll & close on Esc
  useEffect(() => {
    const root = document.documentElement;
    if (menuOpen) root.classList.add('overflow-hidden');
    else root.classList.remove('overflow-hidden');
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      root.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

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
            <img src="/logo.svg" alt="Insight" className="h-[42px] w-auto block shrink-0" />
          </Link>

          {/* Desktop nav only */}
          <nav aria-label="Main" className="hidden lg:block lg:ml-[75px]">
            <ul className="flex items-center gap-[40px]">
              <li>
                <Link
                  href="/rooms"
                  className="hover:opacity-80 whitespace-nowrap"
                  style={{
                    color: 'var(--black)',
                    fontFamily: '"TT Norms Std Trl Cnd"',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    textTransform: 'uppercase',
                  }}
                >
                  КАБИНЕТЫ И ЗАЛЫ
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="hover:opacity-80 whitespace-nowrap"
                  style={{
                    color: 'var(--black)',
                    fontFamily: '"TT Norms Std Trl Cnd"',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    textTransform: 'uppercase',
                  }}
                >
                  КОНТАКТЫ
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right: CTA placeholder (desktop) + Menu button (mobile) */}
        <div className="flex items-center">
          {/* Desktop CTA placeholder */}
          <div className="hidden lg:inline-flex">
            <HeaderCtaPlaceholder />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="inline-flex lg:hidden items-center justify-center p-4 -mr-4" /* 16px padding - 16px right margin */
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/menu.svg" alt="" width={32} height={32} />
          </button>
        </div>
      </div>

      {/* Slide-over menu (mobile) */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

/** CTA button using Button component */
export function HeaderCtaPlaceholder() {
  return (
    <Button variant="primary-teal" size="44">
      Забронировать
    </Button>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-[60] transition-[visibility] ${open ? 'visible' : 'invisible'}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      {/* Overlay (click to close) */}
      <div
        className={`absolute inset-0 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'rgba(0, 0, 0, 0.24)' }}
        onClick={onClose}
      />

      {/* Panel: width = 100% - 32px (left overlay gap) */}
      <div
        className={`absolute right-0 top-0 h-full w-[calc(100%-32px)]
        bg-gradient-to-b from-[color:var(--sky)] to-white border-l border-[color:var(--gray-3)]
        px-6 pt-20 transition-transform duration-300 will-change-transform
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close button (36x36) with 16px inset */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex items-center justify-center"
          style={{ width: 36, height: 36 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/close.svg" alt="" width={36} height={36} />
        </button>

        {/* Nav: top spacing 80px already via pt-20; gap 24px */}
        <nav aria-label="Mobile menu" className="text-[color:var(--black)]">
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="/rooms"
                className="block"
                onClick={onClose}
                style={{
                  color: 'var(--black)',
                  fontFamily: '"TT Norms Std Trl Cnd"',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  textTransform: 'uppercase',
                }}
              >
                КАБИНЕТЫ И ЗАЛЫ
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="block"
                onClick={onClose}
                style={{
                  color: 'var(--black)',
                  fontFamily: '"TT Norms Std Trl Cnd"',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  textTransform: 'uppercase',
                }}
              >
                КОНТАКТЫ
              </Link>
            </li>
          </ul>

          {/* Spacing between nav and button: 64px */}
          <div className="mt-16">
            <Link href="/booking" onClick={onClose} className="block w-full">
              <Button variant="primary-yellow" size="50" className="w-full">
                Забронировать
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
