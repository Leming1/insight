'use client';

import Button from '@ui/Button';
import AnimatedText from '../../components/ui/AnimatedText';

export default function Hero() {
  // Отладочная информация
  const words = ['психологов', 'коучей', 'массажистов', 'консультантов', 'мастер-классов'];
  console.log('Hero render, words:', words);

  return (
    <section 
      aria-label="Hero" 
      className="relative isolate w-full h-[400px] md:h-[660px] bg-red"
    >
      {/* Hero content */}
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full">
          {/* Content - left-aligned on mobile/tablet, left-aligned on desktop */}
          <div className="w-full lg:w-[60%] flex items-center justify-center pt-12 pb-12 lg:pt-0 lg:pb-0">
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
                <Button as="link" href="/#spaces" variant="primary-teal" size="48" className="w-full lg:w-auto">
                  Забронировать
                </Button>
                <Button as="link" href="/#spaces" variant="secondary" size="48" className="hidden lg:inline-flex w-full lg:w-auto">
                  Наши пространства
                </Button>
              </div>
            </div>
          </div>

          {/* Chair - hidden on mobile/tablet, visible on desktop */}
          <div className="hidden lg:block w-[40%] h-full overflow-hidden">
            <img
              src="/assets/armchair-2.png"
              alt="Кресло для психологического кабинета"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
