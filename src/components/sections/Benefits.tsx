'use client';

import React from 'react';

interface BenefitItem {
  icon: string;
  title: string | string[];
  description: string;
}

const benefits: BenefitItem[] = [
  {
    icon: '/assets/heart.svg',
    title: ['Индивидуальный подход', 'к каждому клиенту'],
    description: 'Мы ценим уникальность каждого специалиста и предлагаем гибкие условия аренды.'
  },
  {
    icon: '/assets/flower.svg',
    title: ['Современные', 'и комфортные помещения'],
    description: 'Наши комнаты оборудованы всем необходимым для работы.'
  },
  {
    icon: '/assets/star.svg',
    title: ['Бесплатный инвентарь', 'под разные нужды'],
    description: 'В нашем инвентаре можно взять массажные кушетки, столы, стулья и многое другое.'
  }
];

export default function Benefits() {
  return (
    <section className="py-10 md:py-20 bg-[#F5FAFF]">
      <div className="container">
        {/* Section Header */}
        <div className="mb-8 md:mb-16">
          <h2 className="heading-1 text-left md:text-center">
            Почему выбирают нас
          </h2>
        </div>

        {/* Benefits Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-left">
              {/* Icon */}
              <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] mb-4 md:mb-6 flex items-center justify-center">
                <img
                  src={benefit.icon}
                  alt=""
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="mb-3 md:mb-4 text-left" style={{
                color: 'var(--Black, #222)',
                fontFamily: 'Erewhon',
                fontSize: '27px',
                fontStyle: 'italic',
                fontWeight: 700,
                lineHeight: '27px',
                letterSpacing: '-0.5px'
              }}>
                {Array.isArray(benefit.title) ? (
                  benefit.title.map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < benefit.title.length - 1 && <br />}
                    </React.Fragment>
                  ))
                ) : (
                  benefit.title
                )}
              </h3>
              <p className="body-1 leading-relaxed text-left">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
