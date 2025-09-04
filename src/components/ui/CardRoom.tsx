'use client';

import React from 'react';
import Button from '@ui/Button';
import HoverSegmentCarousel from './HoverSegmentCarousel';

interface CardRoomProps {
  id: string;
  title: string;
  price: number;
  images: { src: string; alt?: string }[];
  capacity?: number;
  area?: number;
  hasProjector?: boolean;
  hasWifi?: boolean;
  href?: string;
  isBlocked?: boolean;
  bookingUrl?: string;
  onDetailsClick?: () => void;
}

export default function CardRoom({
  id,
  title,
  price,
  images,
  capacity = 4,
  area = 18,
  hasProjector = true,
  hasWifi = true,
  href = '#',
  isBlocked = false,
  bookingUrl,
  onDetailsClick
}: CardRoomProps) {
  return (
    <div 
      className={`w-full overflow-hidden flex flex-col bg-white relative ${
        isBlocked ? 'opacity-75' : ''
      }`}
      style={{
        borderRadius: '16px',
        boxShadow: '0 1px 2px 0 rgba(17, 70, 87, 0.04), 0 2px 9px 0 rgba(17, 70, 87, 0.08)'
      }}
      suppressHydrationWarning
    >
      {/* Карусель изображений */}
      <div className="relative">
        <HoverSegmentCarousel
          images={images}
          aspectRatio="41 / 28"
          crossfadeMs={120}
          ariaLabel={`Фотогалерея — ${title}`}
          className={`w-full self-stretch ${isBlocked ? 'opacity-20' : ''}`}
        />
        
        {/* Индикатор занятости для заблокированной карточки */}
        {isBlocked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              style={{
                color: 'var(--gray-2, #888)',
                fontFamily: 'var(--font-roboto)',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '150%',
                textTransform: 'uppercase'
              }}
            >
              ЗАБРОНИРОВАНО
            </div>
          </div>
        )}
      </div>
      
      {/* Контентная часть снизу */}
      <div className="flex-1 p-4 md:p-6">
        {/* Заголовок */}
        <h3 className={`card-title mb-4 ${isBlocked ? 'opacity-50' : ''}`}>
          {title}
        </h3>
        
        {/* Иконки характеристик */}
        <div className={`flex space-x-4 text-gray-600 text-sm mb-4 ${isBlocked ? 'opacity-50' : ''}`}>
          <span className="inline-flex items-center gap-1 icon-text">
            <img src="/icons/person.svg" alt="" width={20} height={20} className="w-5 h-5" />
            До {capacity} чел.
          </span>
          <span className="inline-flex items-center gap-1 icon-text">
            <img src="/icons/area.svg" alt="" width={20} height={20} className="w-5 h-5" />
            {area}м²
          </span>
          <span className="inline-flex items-center gap-1 icon-text">
            <img src="/icons/air-conditioning.svg" alt="" width={20} height={20} className="w-5 h-5" />
          </span>
          {hasWifi && (
            <span className="inline-flex items-center gap-1 icon-text">
              <img src="/icons/wifi.svg" alt="" width={20} height={20} className="w-5 h-5" />
            </span>
          )}
        </div>
        
        {/* Ссылка подробнее */}
        <button
          type="button"
          className={`card-link block mb-6 transition-colors text-left ${
            isBlocked 
              ? 'cursor-not-allowed opacity-50' 
              : 'hover:text-[var(--teal-2)] cursor-pointer'
          }`}
          onClick={isBlocked ? undefined : onDetailsClick}
          disabled={isBlocked}
        >
          Подробнее о кабинете
        </button>
        
        {/* Нижняя часть с ценой и кнопкой */}
        <div className="flex items-center justify-between mt-2">
          {/* Цена */}
          <div className={`flex items-baseline gap-1 ${isBlocked ? 'opacity-50' : ''}`}>
            <span className="price-main">
              от {price.toLocaleString('ru-RU')} ₽
            </span>
            <span className="price-unit">/ ч</span>
          </div>
          
          {/* Кнопка бронирования */}
          <Button 
            as="a"
            href={bookingUrl}
            target="_blank"
            variant="primary-yellow" 
            size="44"
            disabled={isBlocked || !bookingUrl}
          >
            ЗАБРОНИРОВАТЬ
          </Button>
        </div>
      </div>
    </div>
  );
}
