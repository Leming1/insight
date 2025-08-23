import React from 'react';
import Footer from '../../components/sections/Footer';
import Button from '../../components/ui/Button';
import Questions from '../../components/sections/Questions';

export default function ContactsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="pt-32 lg:pt-48">
        <div className="container">
          <h1 className="heading-1 text-center">
            Контакты
          </h1>
        </div>
      </section>

      {/* Основной контент */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Левая часть - контактная информация */}
            <div className="space-y-8">
              {/* Связь с нами */}
              <div>
                <h2 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: '"TT Norms Std Trl Cnd"' }}
                >
                  Связь с нами:
                </h2>
                <div className="space-y-3">
                  <a 
                    href="https://maps.google.com/?q=ул. Фатыха Карима, 20, Казань"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg text-[#18547f] hover:text-[#1d6599] transition-colors underline"
                  >
                    ул. Фатыха Карима, 20
                  </a>
                  <a 
                    href="https://wa.me/79000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg text-[#18547f] hover:text-[#1d6599] transition-colors underline"
                  >
                    Whatsapp
                  </a>
                  <a 
                    href="mailto:example@email.com"
                    className="block text-lg text-[#18547f] hover:text-[#1d6599] transition-colors underline"
                  >
                    example@email.com
                  </a>
                </div>
              </div>

              {/* Социальные сети */}
              <div>
                <h2 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: '"TT Norms Std Trl Cnd"' }}
                >
                  Соц. сети:
                </h2>
                <div className="space-y-3">
                  <a 
                    href="https://instagram.com/insight_kazan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg text-[#18547f] hover:text-[#1d6599] transition-colors underline"
                  >
                    Instagram*
                  </a>
                </div>
              </div>

              {/* Дополнительная информация */}
              <div className="pt-8">
                <h2 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: '"TT Norms Std Trl Cnd"' }}
                >
                  Режим работы:
                </h2>
                <p className="text-lg text-gray-700">
                  Пн-Пт: 9:00 - 22:00<br />
                  Сб-Вс: 10:00 - 20:00
                </p>
              </div>
            </div>

            {/* Правая часть - карта */}
            <div className="relative">
              <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                <div style={{position:'relative',overflow:'hidden'}}>
                  <a href="https://yandex.ru/maps/org/insight/154219726698/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0px'}}>Insight</a>
                  <a href="https://yandex.ru/maps/43/kazan/category/coworking/60934766081/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'14px'}}>Коворкинг в Казани</a>
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=49.113933%2C55.778067&z=18&pt=49.113933%2C55.778067%2Cpm2rdm1%2CInsight" 
                    width="100%" 
                    height="500" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    style={{position:'relative'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions секция */}
      <Questions />

      {/* Footer */}
      <Footer />
    </div>
  );
}
