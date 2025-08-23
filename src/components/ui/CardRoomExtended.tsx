import React from 'react';
import Button from './Button';
import HoverSegmentCarousel from './HoverSegmentCarousel';

interface CardRoomExtendedProps {
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
}

export default function CardRoomExtended({
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
  reverse = false
}: CardRoomExtendedProps) {
  return (
    <div
      className={`bg-white overflow-hidden flex flex-col w-full ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
      style={{
        borderRadius: '16px',
        boxShadow:
          '0 1px 2px 0 rgba(17, 70, 87, 0.04), 0 2px 9px 0 rgba(17, 70, 87, 0.08)'
      }}
    >
      {/* Левая часть - карусель изображений */}
      <div className="lg:w-1/2">
        <HoverSegmentCarousel
          images={images}
          aspectRatio="16 / 10"
          crossfadeMs={120}
          ariaLabel={`Фотогалерея — ${title}`}
          className="w-full h-full"
        />
      </div>

      {/* Правая часть - информация */}
              <div className="lg:w-1/2 p-4 md:p-6 flex flex-col justify-between">
        {/* Заголовок и иконки */}
        <div className="mb-6">
          <h2 className="card-title mb-4">
            {title}
          </h2>
          
          {/* Иконки характеристик */}
          <div className="flex space-x-4 mb-6">
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

        {/* Описание */}
        <div className="mb-6">
          <p className="card-text mb-4">
            {description}
          </p>
          <p className="card-text">
            {groupPricing}
          </p>
        </div>

        {/* Ссылка "Подробнее о кабинете" */}
        <div className="mb-8">
          <a 
            href={detailsLink}
            className="text-[#18547f] text-base font-semibold underline hover:text-[#1d6599] transition-colors"
          >
            Подробнее о кабинете
          </a>
        </div>

        {/* Цена и кнопка */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="price-main">{priceFrom}</span>
            <span className="price-unit">{priceUnit}</span>
          </div>
          
          <Button variant="primary-yellow" size="44">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
