import React from 'react';
import CardRoomExtended from '../../components/ui/CardRoomExtended';
import Footer from '../../components/sections/Footer';

const roomsData = [
  {
    id: '1',
    title: 'Кабинет 1',
    capacity: 'До 10 человек',
    area: '16м²',
    description: 'В кабинете имеется: журнальный столик, 2 комфортабельных кресла, светильник, стеллаж с канцелярией, предметы интерьера: цветы, вазы, свечки, салфетки, часы и кондиционер.',
    groupPricing: 'При групповых занятиях от 5 человек стоимость — 650 ₽/час',
    priceFrom: 'от 500 ₽',
    priceUnit: '/ в час',
    buttonText: 'ЗАБРОНИРОВАТЬ',
    images: [
      { src: '/assets/photo/008.jpg', alt: 'Кабинет 1 - фото 1' },
      { src: '/assets/photo/009.jpg', alt: 'Кабинет 1 - фото 2' },
      { src: '/assets/photo/010.jpg', alt: 'Кабинет 1 - фото 3' }
    ],
    href: '#booking-1',
    detailsLink: '#details-1',
    hasAirConditioning: true,
    hasWifi: true
  },
  {
    id: '2',
    title: 'Кабинет 2',
    capacity: 'До 10 человек',
    area: '16м²',
    description: 'В кабинете имеется: журнальный столик, 2 комфортабельных кресла, диван, светильник, стеллаж с канцелярией, предметы интерьера: цветы, вазы, свечки, салфетки, часы и кондиционер.',
    groupPricing: 'При групповых занятиях от 5 человек стоимость — 650 ₽/час',
    priceFrom: 'от 500 ₽',
    priceUnit: '/ в час',
    buttonText: 'ЗАБРОНИРОВАТЬ',
    images: [
      { src: '/assets/photo/048.jpg', alt: 'Кабинет 2 - фото 1' },
      { src: '/assets/photo/047.jpg', alt: 'Кабинет 2 - фото 2' },
      { src: '/assets/photo/046.jpg', alt: 'Кабинет 2 - фото 3' },
      { src: '/assets/photo/049.jpg', alt: 'Кабинет 2 - фото 4' }
    ],
    href: '#booking-2',
    detailsLink: '#details-2',
    hasAirConditioning: true,
    hasWifi: true
  },
  {
    id: '3',
    title: 'Кабинет 3',
    capacity: 'До 5 человек',
    area: '10м²',
    description: 'Компактный уютный кабинет для индивидуальных консультаций. В кабинете имеется: журнальный столик, 2 комфортабельных кресла, светильник, предметы интерьера и кондиционер.',
    groupPricing: 'При групповых занятиях от 3 человек стоимость — 450 ₽/час',
    priceFrom: 'от 400 ₽',
    priceUnit: '/ в час',
    buttonText: 'ЗАБРОНИРОВАТЬ',
    images: [
      { src: '/assets/photo/030.jpg', alt: 'Кабинет 3 - фото 1' },
      { src: '/assets/photo/031.jpg', alt: 'Кабинет 3 - фото 2' },
      { src: '/assets/photo/032.jpg', alt: 'Кабинет 3 - фото 3' }
    ],
    href: '#booking-3',
    detailsLink: '#details-3',
    hasAirConditioning: true,
    hasWifi: true
  },
  {
    id: '4',
    title: 'Кабинет 4',
    capacity: 'До 5 человек',
    area: '10м²',
    description: 'Светлый кабинет с современным дизайном. В кабинете имеется: журнальный столик, 2 комфортабельных кресла, светильник, предметы интерьера и кондиционер.',
    groupPricing: 'При групповых занятиях от 3 человек стоимость — 450 ₽/час',
    priceFrom: 'от 400 ₽',
    priceUnit: '/ в час',
    buttonText: 'ЗАБРОНИРОВАТЬ',
    images: [
      { src: '/assets/photo/026.jpg', alt: 'Кабинет 4 - фото 1' },
      { src: '/assets/photo/027.jpg', alt: 'Кабинет 4 - фото 2' },
      { src: '/assets/photo/029.jpg', alt: 'Кабинет 4 - фото 3' }
    ],
    href: '#booking-4',
    detailsLink: '#details-4',
    hasAirConditioning: true,
    hasWifi: true
  },
  {
    id: '5',
    title: 'Кабинет 5',
    capacity: 'До 5 человек',
    area: '13м²',
    description: 'Просторный кабинет с естественным освещением. В кабинете имеется: журнальный столик, 2 комфортабельных кресла, светильник, предметы интерьера и кондиционер.',
    groupPricing: 'При групповых занятиях от 3 человек стоимость — 500 ₽/час',
    priceFrom: 'от 450 ₽',
    priceUnit: '/ в час',
    buttonText: 'ЗАБРОНИРОВАТЬ',
    images: [
      { src: '/assets/photo/037.jpg', alt: 'Кабинет 5 - фото 1' },
      { src: '/assets/photo/038.jpg', alt: 'Кабинет 5 - фото 2' },
      { src: '/assets/photo/039.jpg', alt: 'Кабинет 5 - фото 3' },
      { src: '/assets/photo/040.jpg', alt: 'Кабинет 5 - фото 4' },
      { src: '/assets/photo/042.jpg', alt: 'Кабинет 5 - фото 5' }
    ],
    href: '#booking-5',
    detailsLink: '#details-5',
    hasAirConditioning: true,
    hasWifi: true
  },
  {
    id: '6',
    title: 'Кабинет 6',
    capacity: 'До 5 человек',
    area: '10м²',
    description: 'Уютный кабинет для индивидуальных занятий. В кабинете имеется: журнальный столик, 2 комфортабельных кресла, светильник, предметы интерьера и кондиционер.',
    groupPricing: 'При групповых занятиях от 3 человек стоимость — 450 ₽/час',
    priceFrom: 'от 400 ₽',
    priceUnit: '/ в час',
    buttonText: 'ЗАБРОНИРОВАТЬ',
    images: [
      { src: '/assets/photo/041.jpg', alt: 'Кабинет 6 - фото 1' }
    ],
    href: '#booking-6',
    detailsLink: '#details-6',
    hasAirConditioning: true,
    hasWifi: true
  },
  {
    id: '7',
    title: 'Кабинет 7',
    capacity: 'До 10 человек',
    area: '17м²',
    description: 'Просторный кабинет для групповых занятий. В кабинете имеется: журнальный столик, 2 комфортабельных кресла, диван, светильник, предметы интерьера и кондиционер.',
    groupPricing: 'При групповых занятиях от 5 человек стоимость — 650 ₽/час',
    priceFrom: 'от 500 ₽',
    priceUnit: '/ в час',
    buttonText: 'ЗАБРОНИРОВАТЬ',
    images: [
      { src: '/assets/photo/024.jpg', alt: 'Кабинет 7 - фото 1' },
      { src: '/assets/photo/021.jpg', alt: 'Кабинет 7 - фото 2' },
      { src: '/assets/photo/025.jpg', alt: 'Кабинет 7 - фото 3' },
      { src: '/assets/photo/019.jpg', alt: 'Кабинет 7 - фото 4' },
      { src: '/assets/photo/020.jpg', alt: 'Кабинет 7 - фото 5' }
    ],
    href: '#booking-7',
    detailsLink: '#details-7',
    hasAirConditioning: true,
    hasWifi: true
  },
  {
    id: '8',
    title: 'Зал 1',
    capacity: 'До 50 человек',
    area: '65м²',
    description: 'Большой зал для групповых мероприятий, семинаров и лекций. В зале имеется: проектор, экран, флипчарт, стулья, столы, звуковое оборудование и кондиционер.',
    groupPricing: 'При мероприятиях от 20 человек стоимость — 1200 ₽/час',
    priceFrom: 'от 1 500 ₽',
    priceUnit: '/ в час',
    buttonText: 'ЗАБРОНИРОВАТЬ',
    images: [
      { src: '/assets/photo/013.jpg', alt: 'Зал 1 - фото 1' },
      { src: '/assets/photo/014.jpg', alt: 'Зал 1 - фото 2' },
      { src: '/assets/photo/015.jpg', alt: 'Зал 1 - фото 3' },
      { src: '/assets/photo/017.jpg', alt: 'Зал 1 - фото 4' },
      { src: '/assets/photo/018.jpg', alt: 'Зал 1 - фото 5' },
      { src: '/assets/photo/012.jpg', alt: 'Зал 1 - фото 6' }
    ],
    href: '#booking-8',
    detailsLink: '#details-8',
    hasAirConditioning: true,
    hasWifi: true
  },
  {
    id: '9',
    title: 'Зал 2',
    capacity: 'До 35 человек',
    area: '40м²',
    description: 'Средний зал для групповых занятий и тренингов. В зале имеется: проектор, экран, флипчарт, стулья, столы, звуковое оборудование и кондиционер.',
    groupPricing: 'При мероприятиях от 15 человек стоимость — 1000 ₽/час',
    priceFrom: 'от 1 200 ₽',
    priceUnit: '/ в час',
    buttonText: 'ЗАБРОНИРОВАТЬ',
    images: [
      { src: '/assets/photo/043.jpg', alt: 'Зал 2 - фото 1' },
      { src: '/assets/photo/045.jpg', alt: 'Зал 2 - фото 2' },
      { src: '/assets/photo/053.jpg', alt: 'Зал 2 - фото 3' },
      { src: '/assets/photo/034.jpg', alt: 'Зал 2 - фото 4' },
      { src: '/assets/photo/033.jpg', alt: 'Зал 2 - фото 5' }
    ],
    href: '#booking-9',
    detailsLink: '#details-9',
    hasAirConditioning: true,
    hasWifi: true
  }
];

export default function RoomsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="pt-32 lg:pt-48 bg-gradient-to-b from-[#c5f1ff] to-[#f5faff]">
        <div className="container">
          <h1 className="heading-1 text-center">
            Кабинеты и залы
          </h1>
        </div>
      </section>

      {/* Список кабинетов */}
      <section className="pt-16 pb-20">
        <div className="container">
          <div className="space-y-4 md:space-y-6 lg:space-y-10">
                        {roomsData.map((room) => (
              <CardRoomExtended
                key={room.id}
                title={room.title}
                capacity={room.capacity}
                area={room.area}
                description={room.description}
                groupPricing={room.groupPricing}
                priceFrom={room.priceFrom}
                priceUnit={room.priceUnit}
                buttonText={room.buttonText}
                images={room.images}
                href={room.href}
                detailsLink={room.detailsLink}
                hasAirConditioning={room.hasAirConditioning}
                hasWifi={room.hasWifi}
                reverse={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Не нашли подходящий вариант?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы поможем подобрать идеальное помещение для ваших потребностей
          </p>
          <a
            href="#contact"
            className="bg-[#1d6599] hover:bg-[#18547f] text-white font-bold px-8 py-4 rounded-full text-lg uppercase transition-colors"
          >
            Связаться с нами
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
