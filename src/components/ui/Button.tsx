'use client';

import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary-teal' | 'primary-black' | 'primary-white' | 'primary-yellow' | 'secondary';
  size: '44' | '48' | '50';
  typo?: '14-150';
  as?: 'button' | 'a' | 'link';
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Button component with custom utility classes
 * Base class: "btn"
 * Sizes: btn-44, btn-48, btn-50
 * Variants: btn-primary-teal, btn-primary-black, btn-primary-white, btn-primary-yellow, btn-secondary
 * Typography: btn-typo-14-150 (optional)
 */
export default function Button({
  children,
  variant,
  size,
  typo,
  as = 'button',
  href,
  target,
  rel,
  className = '',
  disabled = false,
  onClick,
}: ButtonProps) {
  // Базовые классы
  const baseClasses = 'btn';

  // Размеры через утилиты
  const sizeClass = `btn-${size}`;

  // Цветовые варианты через утилиты
  const variantClass = `btn-${variant}`;

  // Типографика (опционально)
  const typoClass = typo ? `btn-typo-${typo}` : '';

  // Собираем все классы
  const buttonClasses = [baseClasses, sizeClass, variantClass, typoClass, className]
    .filter(Boolean)
    .join(' ');

  // Общие props для всех вариантов
  const commonButtonProps = {
    className: buttonClasses,
    onClick,
    disabled,
  } as const;

  // Рендерим в зависимости от as prop
  if (as === 'link' && href) {
    if (disabled) {
      return (
        <span
          role="link"
          aria-disabled="true"
          tabIndex={-1}
          className={buttonClasses}
        >
          {children}
        </span>
      );
    }
    const safeRel = target === '_blank' ? (rel ? rel : 'noopener noreferrer') : rel;
    return (
      <Link href={href} className={buttonClasses} target={target} rel={safeRel}>
        {children}
      </Link>
    );
  }

  if (as === 'a' && href) {
    const safeRel = target === '_blank' ? (rel ? rel : 'noopener noreferrer') : rel;
    return (
      <a
        href={href}
        className={buttonClasses}
        target={target}
        rel={safeRel}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          onClick?.();
        }}
      >
        {children}
      </a>
    );
  }

  // По умолчанию button
  return (
    <button type="button" {...commonButtonProps}>
      {children}
    </button>
  );
}
