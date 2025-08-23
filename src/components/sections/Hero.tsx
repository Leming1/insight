'use client';

import Image from 'next/image';
import Button from '@ui/Button';
import AnimatedText from '../../components/ui/AnimatedText';

export default function Hero() {
  // Отладочная информация
  const words = ['психологов', 'коучей', 'массажистов'];
  console.log('Hero render, words:', words);

  return (
    <section 
      aria-label="Hero" 
      className="relative isolate w-full h-[70%] bg-red"
    >
      {/* Hero content */}
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Content - left-aligned on mobile/tablet, left-aligned on desktop */}
          <div className="w-full lg:w-[65%] flex items-center justify-start pt-12 pb-12 lg:pt-0 lg:pb-0">
            <div className="w-full">
              <h1 className="hero-heading text-left">
              Аренда кабинетов<br />
              <span className="whitespace-nowrap">для <AnimatedText 
                  words={words}
                  interval={3000}
                  style={{ color: 'var(--teal-1)' }}
                /></span>
              </h1>

              <p className="hero-subtitle mt-5 text-left">Почасовая аренда кабинетов в центре Казани</p>

              <div className="mt-[72px] lg:mt-9 flex flex-col lg:flex-row items-start justify-start gap-3 w-full lg:w-auto">
                <Button variant="primary-teal" size="48" className="w-full lg:w-auto">
                  Забронировать
                </Button>
                <Button variant="secondary" size="48" className="hidden lg:block w-full lg:w-auto">
                  Наши пространства
                </Button>
              </div>
            </div>
          </div>

          {/* Chair - hidden on mobile/tablet, visible on desktop */}
          <div className="hidden lg:block w-[35%] flex items-center justify-end">
            <div className="w-full flex items-center justify-end">
              <Image
                src="/assets/armchair.png"
                alt="Кресло для психологического кабинета"
                width={560}
                height={640}
                className="w-auto h-auto max-w-full max-h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
