'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

type ImageItem = { src: string; alt?: string };

export type HoverSegmentCarouselProps = {
  images: ImageItem[];
  aspectRatio?: string;   // CSS aspect-ratio, например '4 / 3' или '16 / 9'
  startIndex?: number;
  crossfadeMs?: number;
  className?: string;
  ariaLabel?: string;
};

export default function HoverSegmentCarousel({
  images,
  aspectRatio = '16 / 9',
  startIndex = 0,
  crossfadeMs = 120,
  className,
  ariaLabel = 'Галерея изображений (наведение для переключения)',
}: HoverSegmentCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [index, setIndex] = useState(() =>
    Math.min(Math.max(startIndex, 0), Math.max(images.length - 1, 0))
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  // Предзагрузка соседей
  useEffect(() => {
    const add = (i: number) => {
      if (i < 0 || i >= images.length) return;
      const image = images[i];
      if (!image) return;
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = image.src;
      document.head.appendChild(link);
      return () => document.head.removeChild(link);
    };
    const cleanups: Array<(() => void) | void> = [add(index - 1), add(index + 1)];
    return () => cleanups.forEach((c) => c && c());
  }, [index, images]);

  const calcIndexFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el || images.length === 0) return index;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const n = images.length;
    const i = Math.floor((x / Math.max(rect.width, 1)) * n);
    return Math.min(Math.max(i, 0), n - 1);
  };

  // Обработка свайпов для мобильных/планшетов
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    setIsDragging(true);
    setStartX(touch.clientX);
    setCurrentX(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    if (!touch) return;
    setCurrentX(touch.clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 50; // минимальное расстояние для свайпа
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // свайп влево - следующее фото
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else {
        // свайп вправо - предыдущее фото
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    }
    
    setIsDragging(false);
  };

  // Обработка движения мыши только для десктопа (lg+)
  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    // Отключаем на мобильных и планшетах
    if (window.innerWidth < 1024) return;
    
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const clientX = e.clientX;
    rafRef.current = requestAnimationFrame(() => {
      const next = calcIndexFromClientX(clientX);
      if (next !== index) setIndex(next);
    });
  };

  const onPointerEnter: React.PointerEventHandler<HTMLDivElement> = (e) => {
    // Отключаем на мобильных и планшетах
    if (window.innerWidth < 1024) return;
    
    // При наведении сразу вычисляем индекс по позиции мыши
    const clientX = e.clientX;
    const next = calcIndexFromClientX(clientX);
    if (next !== index) setIndex(next);
  };

  // Возврат к первой фотографии при уходе курсора
  const onPointerLeave: React.PointerEventHandler<HTMLDivElement> = () => {
    if (window.innerWidth < 1024) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setIndex(0);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      role="region"
      tabIndex={0}
      aria-label={ariaLabel}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
              className={clsx(
          'relative w-full overflow-hidden select-none bg-[color:var(--gray-4)]',
          className
        )}
      style={{ aspectRatio }}
    >
      {images.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src + i}
          src={img.src}
          alt={img.alt ?? ''}
          draggable={false}
          className={clsx(
            'absolute inset-0 h-full w-full object-cover object-bottom transition-opacity',
            i === index ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDuration: `${crossfadeMs}ms` }}
        />
      ))}

      {/* Индикаторы карусели */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={clsx(
                'transition-all duration-200',
                i === index ? 'bg-[#FFF]' : 'bg-[#FFF]/25'
              )}
              style={{
                width: '16px',
                height: '4px',
                borderRadius: '24px'
              }}
            />
          ))}
        </div>
      )}

      {/* прогресс-полоска снизу */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-black/10">
          <div
            className="h-full bg-black/40"
            style={{ width: `${((index + 1) / images.length) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
