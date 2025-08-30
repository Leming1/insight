'use client';

import React, { useState } from 'react';
import CardRoom from '@ui/CardRoom';
import RoomDetailsModal from '@ui/RoomDetailsModal';

type Room = {
	id: string;
	title: string;
	images: { src: string; alt?: string }[]; // массив изображений для карусели
	capacity: number;
	area: number;
	hasProjector: boolean;
	hasWifi: boolean;
	price: number;
	href: string;
	isBlocked?: boolean;
	bookingUrl?: string; // ссылка для бронирования
	description?: string; // описание для модального окна
	groupPricing?: string; // информация о групповом ценообразовании
};

const rooms: Room[] = [
	{
		id: 'r1',
		title: 'Кабинет 1',
		images: [
			{ src: '/assets/photo/008.jpg', alt: 'Кабинет 1 - фото 1' },
			{ src: '/assets/photo/009.jpg', alt: 'Кабинет 1 - фото 2' },
			{ src: '/assets/photo/010.jpg', alt: 'Кабинет 1 - фото 3' }
		],
		capacity: 10,
		area: 16,
		hasProjector: true,
		hasWifi: true,
		price: 500,
		href: '/rooms/cabinet-1',
		bookingUrl: 'https://n1617633.yclients.com',
		description: 'Кондиционер\n2 комфортабельных кресла\nЖурнальный столик\nСветильник\nСтеллаж с канцелярией\nЦветы, вазы, свечки\nНастольные часы\nWi-Fi',
		groupPricing: 'При необходимости можно установить:\nстолы до 3 шт,\nстулья,\nковрики для йоги,\nподушки,\nсидушки,\nкушетки до 2 шт\n\nИспользование инвентаря входит в стоимость аренды кабинета, и доступно по предварительной брони - пожалуйста укажите это при записи. Также из кабинета можно вынести всю мебель.\n\nдо 4 человек — 500 ₽/час\nот 5 человек — 650 ₽/час',
	},
	{
		id: 'r2',
		title: 'Кабинет 2',
		images: [
			{ src: '/assets/photo/048.jpg', alt: 'Кабинет 2 - фото 1' },
			{ src: '/assets/photo/047.jpg', alt: 'Кабинет 2 - фото 2' },
			{ src: '/assets/photo/046.jpg', alt: 'Кабинет 2 - фото 3' },
			{ src: '/assets/photo/049.jpg', alt: 'Кабинет 2 - фото 4' }
		],
		capacity: 10,
		area: 16,
		hasProjector: true,
		hasWifi: true,
		price: 500,
		href: '/rooms/cabinet-2',
		bookingUrl: 'https://n1622709.yclients.com',
		description: 'В кабинете имеется: журнальный столик, 2 комфортабельных кресла, диван, светильник, стеллаж с канцелярией, предметы интерьера: цветы, вазы, свечки, салфетки, часы и кондиционер.',
		groupPricing: 'При групповых занятиях от 5 человек стоимость — 650 ₽/час',
	},
	{
		id: 'r3',
		title: 'Кабинет 3',
		images: [
			{ src: '/assets/photo/030.jpg', alt: 'Кабинет 3 - фото 1' },
			{ src: '/assets/photo/031.jpg', alt: 'Кабинет 3 - фото 2' },
			{ src: '/assets/photo/032.jpg', alt: 'Кабинет 3 - фото 3' }
		],
		capacity: 5,
		area: 10,
		hasProjector: true,
		hasWifi: true,
		price: 500,
		href: '/rooms/cabinet-3',
		bookingUrl: 'https://n1622712.yclients.com',
		description: 'Уютный кабинет с комфортной мебелью, кондиционером и всем необходимым для индивидуальных консультаций.',
		groupPricing: 'Оптимально для индивидуальных занятий до 5 человек',
	},
	{
		id: 'r4',
		title: 'Кабинет 4',
		images: [
			{ src: '/assets/photo/026.jpg', alt: 'Кабинет 4 - фото 1' },
			{ src: '/assets/photo/027.jpg', alt: 'Кабинет 4 - фото 2' },
			{ src: '/assets/photo/029.jpg', alt: 'Кабинет 4 - фото 3' }
		],
		capacity: 5,
		area: 10,
		hasProjector: true,
		hasWifi: true,
		price: 500,
		href: '/rooms/cabinet-4',
		bookingUrl: 'https://n1622715.yclients.com',
		description: 'Компактный кабинет с современным дизайном, оборудованный всем необходимым для профессиональной работы.',
		groupPricing: 'Идеально подходит для маленьких групп до 5 человек',
	},
	{
		id: 'r5',
		title: 'Кабинет 5',
		images: [
			{ src: '/assets/photo/037.jpg', alt: 'Кабинет 5 - фото 1' },
			{ src: '/assets/photo/038.jpg', alt: 'Кабинет 5 - фото 2' },
			{ src: '/assets/photo/039.jpg', alt: 'Кабинет 5 - фото 3' },
			{ src: '/assets/photo/040.jpg', alt: 'Кабинет 5 - фото 4' },
			{ src: '/assets/photo/042.jpg', alt: 'Кабинет 5 - фото 5' }
		],
		capacity: 5,
		area: 13,
		hasProjector: true,
		hasWifi: true,
		price: 500,
		href: '/rooms/cabinet-5',
		bookingUrl: 'https://n1622718.yclients.com',
		description: 'Просторный кабинет с комфортной обстановкой, кондиционером и надёжным Wi-Fi.',
		groupPricing: 'Оптимальная площадь 13м² для малых групп',
	},
	{
		id: 'r6',
		title: 'Кабинет 6',
		images: [
			{ src: '/assets/photo/041.jpg', alt: 'Кабинет 6 - фото 1' }
		],
		capacity: 5,
		area: 10,
		hasProjector: true,
		hasWifi: true,
		price: 500,
		href: '/rooms/cabinet-6',
		isBlocked: true,
		description: 'Компактный кабинет с необходимым оборудованием для профессиональной работы.',
		groupPricing: 'Кабинет временно недоступен',
	},
	{
		id: 'r7',
		title: 'Кабинет 7',
		images: [
			{ src: '/assets/photo/024.jpg', alt: 'Кабинет 7 - фото 1' },
			{ src: '/assets/photo/021.jpg', alt: 'Кабинет 7 - фото 2' },
			{ src: '/assets/photo/025.jpg', alt: 'Кабинет 7 - фото 3' },
			{ src: '/assets/photo/019.jpg', alt: 'Кабинет 7 - фото 4' },
			{ src: '/assets/photo/020.jpg', alt: 'Кабинет 7 - фото 5' }
		],
		capacity: 10,
		area: 17,
		hasProjector: true,
		hasWifi: true,
		price: 500,
		href: '/rooms/cabinet-7',
		bookingUrl: 'https://n1622721.yclients.com',
		description: 'Просторный кабинет с увеличенной площадью, подходящий для работы с большими группами.',
		groupPricing: 'Оптимально для групп до 10 человек, площадь 17м²',
	},
	{
		id: 'r8',
		title: 'Зал 1',
		images: [
			{ src: '/assets/photo/013.jpg', alt: 'Зал 1 - фото 1' },
			{ src: '/assets/photo/014.jpg', alt: 'Зал 1 - фото 2' },
			{ src: '/assets/photo/015.jpg', alt: 'Зал 1 - фото 3' },
			{ src: '/assets/photo/017.jpg', alt: 'Зал 1 - фото 4' },
			{ src: '/assets/photo/018.jpg', alt: 'Зал 1 - фото 5' },
			{ src: '/assets/photo/012.jpg', alt: 'Зал 1 - фото 6' }
		],
		capacity: 50,
		area: 65,
		hasProjector: true,
		hasWifi: true,
		price: 1500,
		href: '/rooms/hall-1',
		bookingUrl: 'https://wa.me/79172701000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%97%D0%B0%D0%BB%201.%20%D0%9F%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%20%D0%BF%D0%BE%20%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B8%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%D0%BC%2C%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0.',
		description: 'Большой конференц-зал для крупных мероприятий, тренингов и семинаров. Оснащён проектором, экраном, звуковым оборудованием.',
		groupPricing: 'Максимальная вместимость 50 человек, площадь 65м²',
	},
	{
		id: 'r9',
		title: 'Зал 2',
		images: [
			{ src: '/assets/photo/043.jpg', alt: 'Зал 2 - фото 1' },
			{ src: '/assets/photo/045.jpg', alt: 'Зал 2 - фото 2' },
			{ src: '/assets/photo/053.jpg', alt: 'Зал 2 - фото 3' },
			{ src: '/assets/photo/034.jpg', alt: 'Зал 2 - фото 4' },
			{ src: '/assets/photo/033.jpg', alt: 'Зал 2 - фото 5' }
		],
		capacity: 35,
		area: 40,
		hasProjector: true,
		hasWifi: true,
		price: 1200,
		href: '/rooms/hall-2',
		bookingUrl: 'https://wa.me/79172701000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%97%D0%B0%D0%BB%202.%20%D0%9F%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%20%D0%BF%D0%BE%20%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B8%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%D0%BC%2C%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0.',
		description: 'Средний зал для групповых занятий и тренингов. В зале имеется: проектор, экран, флипчарт, стулья, столы, звуковое оборудование и кондиционер.',
		groupPricing: 'Оптимально для групп до 35 человек, площадь 40м²',
	},
];

export default function Spaces() {
	const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Функция для преобразования данных комнаты в формат модального окна
	const transformRoomForModal = (room: Room) => ({
		id: room.id,
		title: room.title,
		capacity: `До ${room.capacity} человек`,
		area: `${room.area}м²`,
		description: room.description || 'Уютный кабинет с современным оборудованием',
		groupPricing: room.groupPricing || '',
		priceFrom: `от ${room.price} ₽`,
		priceUnit: '/ в час',
		buttonText: 'ЗАБРОНИРОВАТЬ',
		images: room.images,
		hasAirConditioning: true,
		hasWifi: room.hasWifi,
		bookingUrl: room.bookingUrl,
	});

	const handleRoomClick = (room: Room) => {
		setSelectedRoom(room);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedRoom(null);
	};

	return (
		<section id="spaces" className="w-full bg-[#F5FAFF] pt-8 pb-12 md:py-16">
			<div className="container">
				<h2 className="heading-1 text-center mb-8 md:mb-12">Кабинеты и залы</h2>
				
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{rooms.map((room) => (
						<CardRoom
							key={room.id}
							id={room.id}
							title={room.title}
							images={room.images}
							capacity={room.capacity}
							area={room.area}
							hasProjector={room.hasProjector}
							hasWifi={room.hasWifi}
							price={room.price}
							href={room.href}
							isBlocked={room.isBlocked}
							bookingUrl={room.bookingUrl}
							onDetailsClick={() => handleRoomClick(room)}
						/>
					))}
				</div>
			</div>

			{/* Модальное окно */}
			{selectedRoom && (
				<RoomDetailsModal
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					room={transformRoomForModal(selectedRoom)}
				/>
			)}
		</section>
	);
}
