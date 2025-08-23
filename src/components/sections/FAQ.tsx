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
    question: 'Как забронировать кабинет?',
    answer: 'Забронировать кабинет можно через наш сайт, выбрав удобное время и дату. Также можно связаться с нами по телефону или через форму обратной связи.'
  },
  {
    id: '2',
    question: 'Какие документы нужны для аренды?',
    answer: 'Для аренды кабинета достаточно паспорта и предоплаты. Дополнительные документы не требуются.'
  },
  {
    id: '3',
    question: 'Можно ли отменить бронь?',
    answer: 'Да, бронь можно отменить не позднее чем за 24 часа до начала аренды. При более поздней отмене возврат средств не производится.'
  },
  {
    id: '4',
    question: 'Есть ли парковка?',
    answer: 'Да, у нас есть бесплатная парковка для клиентов. Парковочные места расположены рядом со зданием.'
  },
  {
    id: '5',
    question: 'Какое оборудование включено в аренду?',
    answer: 'В аренду включены столы, стулья, проектор, флипчарт, Wi-Fi и кондиционер. Дополнительное оборудование можно заказать заранее.'
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
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {faqData.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between text-left h-8 px-0 transition-colors"
                >
                  <h3 
                    className="pr-4"
                    style={{
                      color: 'var(--Black, #222)',
                      fontFamily: '"TT Norms Std Trl Cnd"',
                      fontSize: 'clamp(21px, 5vw, 28px)',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'clamp(24px, 5.7vw, 32px)'
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
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
