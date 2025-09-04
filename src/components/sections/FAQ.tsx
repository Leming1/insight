'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Есть ли парковка?',
    answer: 'Рядом со студией есть муниципальная платная парковка.'
  },
  {
    id: '2',
    question: 'Что есть в кабинетах помимо мебели?',
    answer: 'Пледы, подушки, стаканчики, бумажные салфетки, часы, обогреватели, предметы интерьера, планшеты с бумагой, ручки и т.д.'
  },
  {
    id: '3',
    question: 'Входит ли время подготовки и уборки в бронирование?',
    answer: 'Да, пребывание в кабинетах возможно только в пределах забронированного времени. Если вам нужно время на подготовку или уборку, предусмотрена удобная система бронирования с шагом в 30 минут.'
  },
  {
    id: '4',
    question: 'Столы и кушетки уже стоят в кабинетах?',
    answer: 'Мы можем предоставить и занести в любой кабинет столы, кушетки и коврики. Наличие уточняйте у администратора на момент бронирования. Использование бесплатно. Также доступны одноразовые пелёнки на кушетку по 20₽ за штуку.'
  },
  {
    id: '5',
    question: 'Можно ли использовать свечи?',
    answer: 'Нет. Использование свечей, пало санто, электронных сигарет и вейпов запрещено. При срабатывании пожарной сигнализации — штраф 10 000₽.'
  },
  {
    id: '6',
    question: 'Что есть в студии для гостей?',
    answer: 'В холле для вас: кулер с горячей и холодной водой, одноразовые стаканы, чай, кофе, печенье, конфеты.'
  },
  {
    id: '7',
    question: 'Можно ли проводить праздники и дни рождения?',
    answer: 'В общих коридорах студии необходимо сохранять спокойную атмосферу, избегать громких разговоров и шума (в том числе по телефону), чтобы не мешать другим клиентам, проходящим консультации.'
  },
  {
    id: '8',
    question: 'За сколько времени можно отменить бронь без оплаты?',
    answer: 'Отмена менее чем за сутки до забронированного времени подлежит оплате. Также аренда оплачивается в случае неотменённой брони.'
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="heading-1 text-center">
            Вопросы-ответы
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-0">
            {faqData.map((item, index) => (
              <div key={item.id}>
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between text-left h-8 px-0 transition-colors"
                >
                  <h3 
                    className="pr-4"
                    style={{
                      color: 'var(--Black, #222)',
                      fontFamily: 'var(--font-roboto)',
                      fontSize: 'clamp(16px, 3.5vw, 20px)',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: 'clamp(20px, 4vw, 24px)'
                    }}
                  >
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-[15px] h-[10px] transition-transform ${
                        openItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15 10"
                    >
                      <path d="M14 1.46582L7.5 7.96582L1 1.46582" stroke="black" strokeWidth="2"/>
                    </svg>
                  </div>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-0 pb-4 mt-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
                
                {/* Разделительная линия */}
                {index < faqData.length - 1 && (
                  <div className="border-t border-gray-200 my-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
