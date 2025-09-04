'use client';

import React from 'react';

export default function Contacts() {
  const handleOpenAddress = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const address = 'Казань, ул. Фатыха Карима, 20';
    const coordinates = '55.778067,49.113933';

    const openWithFallback = (appUrl: string, webUrl: string) => {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = appUrl;
      document.body.appendChild(iframe);
      setTimeout(() => {
        try { document.body.removeChild(iframe); } catch {}
        window.location.href = webUrl;
      }, 900);
    };

    // Предпочтительно пытаемся открыть Яндекс.Карты
    openWithFallback(
      `yandexmaps://maps.yandex.com/?pt=${coordinates}&z=18&l=map`,
      `https://yandex.ru/maps/?text=${encodeURIComponent(address)}&z=18`
    );
  };

  return (
    <section id="contacts" className="py-16 md:py-20">
      <div className="container px-4">
        <h2 className="heading-1 mb-8 md:mb-12 text-center">Контакты</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Левая часть - контактная информация */}
          <div>
            {/* Контакты */}
            <div>
              <div className="space-y-3">
                <a
                  href="#open-map"
                  onClick={handleOpenAddress}
                  rel="noopener noreferrer"
                  className="block text-lg text-[#18547f] hover:text-[#1d6599] transition-colors underline"
                >
                  Казань, ул. Фатыха Карима, 20
                </a>
                <a
                  href="https://wa.me/79172701000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg text-[#18547f] hover:text-[#1d6599] transition-colors underline"
                >
                  Whatsapp
                </a>
                <a
                  href="https://www.instagram.com/st.insight?igsh=czhmNGg3MGk1MzA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg text-[#18547f] hover:text-[#1d6599] transition-colors underline"
                >
                  Instagram*
                </a>
              </div>
            </div>
          </div>

          {/* Правая часть - карта */}
          <div className="relative">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <a
                  href="https://yandex.ru/maps/org/insight/154219726698/?utm_medium=mapframe&utm_source=maps"
                  style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                >
                  Insight
                </a>
                <a
                  href="https://yandex.ru/maps/43/kazan/category/coworking/60934766081/?utm_medium=mapframe&utm_source=maps"
                  style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                >
                  Коворкинг в Казани
                </a>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=49.113933%2C55.778067&z=18&pt=49.113933%2C55.778067%2Cpm2rdm1%2CInsight"
                  width="100%"
                  height="250"
                  className="md:h-[500px]"
                  frameBorder="0"
                  allowFullScreen={true}
                  style={{ position: 'relative' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


