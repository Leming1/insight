import React from 'react';
import Button from './Button';

interface RoomDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: {
    title: string;
    capacity: string;
    area: string;
    description: string;
    groupPricing: string;
    priceFrom: string;
    priceUnit: string;
    buttonText: string;
    images: { src: string; alt?: string }[];
    hasAirConditioning?: boolean;
    hasWifi?: boolean;
  };
}

export default function RoomDetailsModal({ isOpen, onClose, room }: RoomDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Затемнение фона */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Модальное окно */}
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Заголовок с кнопкой закрытия */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{room.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Закрыть"
          >
            <img src="/icons/close.svg" alt="" width={24} height={24} />
          </button>
        </div>

        {/* Содержимое модального окна */}
        <div className="p-6">
          {/* Основная информация */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Левая колонка - изображения */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Фотографии кабинета</h3>
              <div className="grid grid-cols-2 gap-3">
                {room.images.map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt || `${room.title} - фото ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Правая колонка - характеристики */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Основные характеристики</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img src="/icons/person.svg" alt="" width={20} height={20} className="w-5 h-5" />
                    <span className="text-gray-700">Вместимость: {room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/icons/area.svg" alt="" width={20} height={20} className="w-5 h-5" />
                    <span className="text-gray-700">Площадь: {room.area}</span>
                  </div>
                  {room.hasAirConditioning && (
                    <div className="flex items-center gap-3">
                      <img src="/icons/air-conditioning.svg" alt="" width={20} height={20} className="w-5 h-5" />
                      <span className="text-gray-700">Кондиционер</span>
                    </div>
                  )}
                  {room.hasWifi && (
                    <div className="flex items-center gap-3">
                      <img src="/icons/wifi.svg" alt="" width={20} height={20} className="w-5 h-5" />
                      <span className="text-gray-700">Wi-Fi</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Описание</h3>
                <p className="text-gray-700 leading-relaxed">{room.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Групповые занятия</h3>
                <p className="text-gray-700">{room.groupPricing}</p>
              </div>
            </div>
          </div>

          {/* Цена и кнопка бронирования */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">{room.priceFrom}</span>
                <span className="text-lg text-gray-600">{room.priceUnit}</span>
              </div>
              <Button variant="primary-yellow" size="44">
                {room.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
