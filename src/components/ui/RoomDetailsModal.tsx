"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

type RoomImage = { src: string; alt?: string };
type Room = {
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

  // Блокировка скролла + возврат фокуса
  useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current = document.activeElement as HTMLElement;

    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";

    return () => {
      html.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
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
        if (e.target === overlayRef.current) close();
      }}
    >
      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

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
        {/* Заголовок */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 id={titleId} className="text-2xl font-bold text-gray-900">
            {room.title}
          </h2>
          <button
            onClick={close}
            className="p-2 rounded-full hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Закрыть модальное окно"
          >
            <img src="/icons/close.svg" alt="" width={24} height={24} />
          </button>
        </div>

        {/* Контент */}
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Левая колонка - изображения */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Фотографии кабинета</h3>
              <div 
                className="grid grid-cols-2 gap-3"
                role="region"
                aria-label={`Фотографии ${room.title}`}
              >
                {room.images?.map((image, index) => (
                  <div key={image.src + index} className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={image.src}
                      alt={image.alt || `${room.title} — фото ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading={index > 1 ? "lazy" : "eager"}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Правая колонка - характеристики */}
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Основные характеристики</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <img src="/icons/person.svg" alt="" width={20} height={20} className="w-5 h-5" />
                    <span className="text-gray-700">Вместимость: {room.capacity}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <img src="/icons/area.svg" alt="" width={20} height={20} className="w-5 h-5" />
                    <span className="text-gray-700">Площадь: {room.area}</span>
                  </li>
                  {room.hasAirConditioning && (
                    <li className="flex items-center gap-3">
                      <img src="/icons/air-conditioning.svg" alt="" width={20} height={20} className="w-5 h-5" />
                      <span className="text-gray-700">Кондиционер</span>
                    </li>
                  )}
                  {room.hasWifi && (
                    <li className="flex items-center gap-3">
                      <img src="/icons/wifi.svg" alt="" width={20} height={20} className="w-5 h-5" />
                      <span className="text-gray-700">Wi-Fi</span>
                    </li>
                  )}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Описание</h3>
                <p className="text-gray-700 leading-relaxed">{room.description}</p>
              </section>

              {room.groupPricing && (
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Групповые занятия</h3>
                  <p className="text-gray-700">{room.groupPricing}</p>
                </section>
              )}
            </div>
          </div>

          {/* Цена и кнопка */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">{room.priceFrom}</span>
                <span className="text-lg text-gray-600">{room.priceUnit}</span>
              </div>
              <Button variant="primary-yellow" size="44" aria-label="Забронировать кабинет">
                {room.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof window !== "undefined" ? createPortal(dialog, document.body) : null;
}
