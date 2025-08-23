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
  const commonProps = {
    className: buttonClasses,
    onClick,
    disabled,
  };

  // Рендерим в зависимости от as prop
  if (as === 'link' && href) {
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    );
  }

  if (as === 'a' && href) {
    return (
      <a href={href} {...commonProps}>
        {children}
      </a>
    );
  }

  // По умолчанию button
  return (
    <button type="button" {...commonProps}>
      {children}
    </button>
  );
}
