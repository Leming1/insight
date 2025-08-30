"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import HoverSegmentCarousel from "./HoverSegmentCarousel";

type RoomImage = { src: string; alt?: string };
type Room = {
  id: string;
  title: string;
  capacity: string;
  area: string;
  description: string;
  groupPricing?: string;
  priceFrom: string;
  priceUnit: string;
  buttonText: string;
  images: RoomImage[];
  hasAirConditioning?: boolean;
  hasWifi?: boolean;
  additionalInfo?: string;
  bookingUrl?: string;
};

interface RoomDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: Room;
}

export default function RoomDetailsModal({ isOpen, onClose, room }: RoomDetailsModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const titleId = useMemo(() => "room-modal-title-" + Math.random().toString(36).slice(2), []);

  const close = useCallback(() => onClose(), [onClose]);

  // Простая блокировка скролла без фиксации body/top — без "подскоков"
  useEffect(() => {
    if (!isOpen) return;
    
    previouslyFocused.current = document.activeElement as HTMLElement;
    
    const body = document.body;
    const html = document.documentElement;
    // Получаем ширину scrollbar для компенсации (если браузер показывает его)
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Сохраняем оригинальные стили
    const originalStyles = {
      bodyOverflow: body.style.overflow,
      bodyPaddingRight: body.style.paddingRight,
      htmlOverflow: html.style.overflow,
    };
    
    // Минимальный и практичный подход: просто скрываем скролл и компенсируем ширину
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    
    // Добавляем класс для дополнительной стилизации
    document.body.classList.add('modal-open');

    return () => {
      // Восстанавливаем оригинальные стили
      body.style.overflow = originalStyles.bodyOverflow;
      body.style.paddingRight = originalStyles.bodyPaddingRight;
      html.style.overflow = originalStyles.htmlOverflow;
      
      // Убираем класс
      document.body.classList.remove('modal-open');
      
      // Возвращаем фокус
      if (previouslyFocused.current) {
        // предотвращаем автоскролл страницы к элементу
        try {
          (previouslyFocused.current as any).focus({ preventScroll: true });
        } catch {
          previouslyFocused.current.focus();
        }
      }
    };
  }, [isOpen]);

  // Фокус-трап + ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

              if (e.shiftKey && document.activeElement === first && last) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last && first) {
        e.preventDefault();
        first.focus();
      }
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);

    setTimeout(() => {
      const el =
        dialogRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) || dialogRef.current;
      el?.focus?.();
    }, 0);

    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, [isOpen, close]);

  if (!isOpen) return null;

  const dialog = (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
      onMouseDown={(e) => {
        // Закрываем при клике по фону (вне диалога)
        if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
          close();
        }
      }}
    >
      {/* Затемнение фона */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        aria-hidden="true" 
      />

      {/* Модальное окно */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] shadow-lg outline-none focus:outline-none overflow-hidden"
        tabIndex={-1}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={close}
          className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 z-10"
          aria-label="Закрыть модальное окно"
        >
          <img src="/icons/close.svg" alt="" width={24} height={24} />
        </button>

        {/* Контент */}
        <div className="p-6 overflow-y-auto">
          {/* Заголовок */}
          <h2 id={titleId} className="text-2xl font-bold text-[var(--black)] mb-4">
            {room.title}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* Левая колонка - характеристики */}
            <div className="lg:col-span-7 space-y-6">
                            {/* Иконки характеристик */}
              <div className="flex space-x-4 text-gray-600 text-sm mb-4">
                <span className="inline-flex items-center gap-1 icon-text">
                  <img src="/icons/person.svg" alt="" width={20} height={20} className="w-5 h-5" />
                  {room.capacity}
                </span>
                <span className="inline-flex items-center gap-1 icon-text">
                  <img src="/icons/area.svg" alt="" width={20} height={20} className="w-5 h-5" />
                  {room.area}
                </span>
                <span className="inline-flex items-center gap-1 icon-text">
                  <img src="/icons/air-conditioning.svg" alt="" width={20} height={20} className="w-5 h-5" />
                </span>
                {room.hasWifi && (
                  <span className="inline-flex items-center gap-1 icon-text">
                    <img src="/icons/wifi.svg" alt="" width={20} height={20} className="w-5 h-5" />
                  </span>
                )}
              </div>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Оборудование кабинета</h3>
                <ul className="text-gray-700 leading-relaxed" style={{ gap: '4px' }}>
                  {room.description
                    .split('\n')
                    .map((s) => s.trim())
                    .filter(Boolean)
                    .map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-[var(--gray-1)] text-sm">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Инвентарь</h3>
                <p className="text-gray-700 leading-relaxed">
                  {room.groupPricing ? room.groupPricing : 'Информация о групповых занятиях не указана'}
                </p>
              </section>
            </div>

            {/* Правая колонка - изображения */}
            <div className="lg:col-span-5 space-y-4">
              <div 
                role="region"
                aria-label={`Фотографии ${room.title}`}
              >
                <HoverSegmentCarousel
                  images={room.images}
                  aspectRatio="16 / 10"
                  crossfadeMs={120}
                  ariaLabel={`Фотогалерея — ${room.title}`}
                  className="w-full h-full rounded-lg"
                />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Стоимость</h3>
              <div className="text-gray-700 mb-4">
                <p className="text-gray-700 leading-relaxed">
                  {room.priceFrom} <span className="price-unit">{room.priceUnit}</span>
                </p>
              </div>
              
              <Button 
                as="a"
                href={room.bookingUrl}
                target="_blank"
                variant="primary-yellow" 
                size="44" 
                aria-label="Забронировать кабинет"
                className="w-full"
                disabled={!room.bookingUrl}
              >
                Забронировать
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof window !== "undefined" ? createPortal(dialog, document.body) : null;
}
