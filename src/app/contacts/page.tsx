import React from 'react';
import Footer from '../../components/sections/Footer';
import Button from '../../components/ui/Button';
import Questions from '../../components/sections/Questions';

export default function ContactsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="pt-32 lg:pt-10">
        <div className="container">
          <h1 className="heading-1">
            Контакты
          </h1>
        </div>
      </section>

      {/* Основной контент */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Левая часть - контактная информация */}
            <div>
              {/* Контакты */}
              <div>
                <div className="space-y-3">
                  <a 
                    href="https://maps.google.com/?q=Казань, ул. Фатыха Карима, 20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg text-[#18547f] hover:text-[#1d6599] transition-colors underline"
                  >
                    Казань, ул. Фатыха Карима, 20
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
      {/* Footer */}
      <Footer />
    </div>
  );
}
