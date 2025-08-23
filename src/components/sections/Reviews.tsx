import React from 'react';
import Image from 'next/image';

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: '1',
    author: 'Аня',
    date: '27 февраля 2025',
    rating: 5,
    text: 'Самая стильная и уютная студия для аренды кабинетов для психологов. Персонал всегда вежливый и помогающий. Чисто всегда и с заботой относятся к клиентам. Кофе, чай, печенье, материалы для сессий есть.'
  },
  {
    id: '2',
    author: 'Арина Д.',
    date: '8 июля 2024',
    rating: 5,
    text: 'Светлое, лаконичное пространство с кабинетами под индивидуальные сессии и двумя залами для лекций. Есть проектор, есть флипчарт, есть стулья, коврики, чай и кофе для всех. Цена аренды адекватные. Приветливый персонал. Проводили здесь свое мероприятие, остались довольны.'
  },
  {
    id: '3',
    author: 'Инкогнито 3662',
    date: '2 июня 2025',
    rating: 5,
    text: 'Для меня лучше место🍀 для консультаций, проведение терапии. Пространство уютное, чистое. Администратор Аида, всегда подскажет и поможет. Рекомендую🍀🍀🍀'
  }
];

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Reviews() {
  return (
    <section className="py-10 md:py-20 bg-[#F5FAFF]">
      <div className="container">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="heading-1 text-center">
            Отзывы
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-lg p-4 md:p-6 flex flex-col gap-4" style={{
              borderRadius: '16px',
              background: '#FFF',
              boxShadow: '0 1px 2px 0 rgba(17, 70, 87, 0.04), 0 2px 9px 0 rgba(17, 70, 87, 0.08)'
            }}>
              {/* Заголовок отзыва */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {review.author}
                  </h3>
                  <p className="text-sm text-gray-500 opacity-60">
                    {review.date}
                  </p>
                </div>
                
                {/* Звездный рейтинг */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
              </div>
              
              {/* Текст отзыва */}
              <div className="text-base text-gray-600 leading-relaxed">
                {review.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
