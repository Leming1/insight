import React from 'react';
import CardRoomExtended from '../ui/CardRoomExtended';

export default function RoomDetail() {
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <CardRoomExtended
          title="Кабинет 1"
          capacity="До 10 человек"
          area="16м²"
          description="В кабинете имеется: журнальный столик, 2 комфортабельных кресла, светильник, стеллаж с канцелярией, предметы интерьера: цветы, вазы, свечки, салфетки, часы и кондиционер."
          groupPricing="При групповых занятиях от 5 человек стоимость — 650 ₽/час"
          priceFrom="от 500 ₽"
          priceUnit="/ в час"
          buttonText="ЗАБРОНИРОВАТЬ"
          images={[{ src: "/assets/photo/001.jpg", alt: "Фото кабинета" }]}
          href="#booking"
          detailsLink="#details"
          hasAirConditioning={true}
          hasWifi={true}
        />
      </div>
    </section>
  );
}
