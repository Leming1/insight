'use client';

import React, { useState } from 'react';
import CardRoom from '@ui/CardRoom';
import RoomDetailsModal from '@ui/RoomDetailsModal';
import { roomsData, type Room } from '../../data/rooms';

const rooms: Room[] = roomsData;

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
		priceDetails: room.priceDetails,
		additionalInfo: room.additionalInfo,
		// Новые поля для залов
		basicPackage: room.basicPackage,
		fullPackage: room.fullPackage,
		basicPricing: room.basicPricing,
		fullPricing: room.fullPricing,
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
