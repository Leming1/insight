"use client";

import React, { useState } from 'react';
import Button from './Button';
import HoverSegmentCarousel from './HoverSegmentCarousel';
import RoomDetailsModal from './RoomDetailsModal';

interface CardRoomExtendedProps {
  id: string;
  title: string;
  capacity: string;
  area: string;
  description: string;
  groupPricing: string;
  priceFrom: string;
  priceUnit: string;
  buttonText: string;
  images: { src: string; alt?: string }[];
  href?: string;
  hasAirConditioning?: boolean;
  hasWifi?: boolean;
  detailsLink?: string;
  reverse?: boolean;
  bookingUrl?: string;
  isBlocked?: boolean;
  // Новые поля для залов
  additionalInfo?: string;
  priceDetails?: string;
  basicPackage?: string[];
  fullPackage?: string[];
  basicPricing?: string;
  fullPricing?: string;
}

export default function CardRoomExtended({
  id,
  title,
  capacity,
  area,
  description,
  groupPricing,
  priceFrom,
  priceUnit,
  buttonText,
  images,
  href = '#',
  hasAirConditioning = true,
  hasWifi = true,
  detailsLink = '#',
  reverse = false,
  bookingUrl,
  isBlocked,
  additionalInfo,
  priceDetails,
  basicPackage,
  fullPackage,
  basicPricing,
  fullPricing
}: CardRoomExtendedProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roomData = {
    id,
    title,
    capacity,
    area,
    description,
    groupPricing,
    priceFrom,
    priceUnit,
    buttonText,
    images,
    hasAirConditioning,
    hasWifi,
    bookingUrl,
    isBlocked,
    additionalInfo,
    priceDetails,
    basicPackage,
    fullPackage,
    basicPricing,
    fullPricing
  };

  return (
    <div
      className={`bg-white overflow-hidden flex flex-col w-full ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } ${isBlocked ? 'opacity-75' : ''}`}
      style={{
        borderRadius: '16px',
        boxShadow:
          '0 1px 2px 0 rgba(17, 70, 87, 0.04), 0 2px 9px 0 rgba(17, 70, 87, 0.08)'
      }}
    >
      {/* Левая часть - карусель изображений */}
      <div className="lg:w-1/2 relative">
        <HoverSegmentCarousel
          images={images}
          aspectRatio="16 / 10"
          crossfadeMs={120}
          ariaLabel={`Фотогалерея — ${title}`}
          className={`w-full h-full ${isBlocked ? 'opacity-20' : ''}`}
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

      {/* Правая часть - информация */}
              <div className="lg:w-1/2 p-4 md:p-6 flex flex-col justify-between">
        {/* Заголовок и иконки */}
        <div className={`mb-4 ${isBlocked ? 'opacity-50' : ''}`}>
          <h2 className="card-title mb-4">
            {title}
          </h2>
          
          {/* Иконки характеристик */}
          <div className="flex space-x-4">
            <span className="inline-flex items-center gap-1 icon-text">
              <img src="/icons/person.svg" alt="" width={20} height={20} className="w-5 h-5" />
              {capacity}
            </span>
            <span className="inline-flex items-center gap-1 icon-text">
              <img src="/icons/area.svg" alt="" width={20} height={20} className="w-5 h-5" />
              {area}
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
        </div>



        {/* Ссылка "Подробнее о кабинете" */}
        <div className={`mb-4 ${isBlocked ? 'opacity-50' : ''}`}>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-[#18547f] text-base font-semibold underline hover:text-[#1d6599] transition-colors cursor-pointer"
          >
            Подробнее о кабинете
          </button>
        </div>

        {/* Цена и кнопка */}
        <div className={`flex items-center justify-between ${isBlocked ? 'opacity-50' : ''}`}>
          <div className="flex items-baseline gap-1">
            <span className="price-main">{priceFrom}</span>
            <span className="price-unit">{priceUnit}</span>
          </div>
          
          <Button
            as="a"
            href={bookingUrl}
            target="_blank"
            variant="primary-yellow"
            size="44"
            disabled={!bookingUrl || isBlocked}
          >
            {isBlocked ? 'Забронировано' : buttonText}
          </Button>
        </div>
      </div>

      {/* Модальное окно с подробной информацией */}
      <RoomDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        room={roomData}
      />
    </div>
  );
}
