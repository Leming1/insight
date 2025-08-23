import CardRoom from '@ui/CardRoom';

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
	},
];

export default function Spaces() {
	return (
		<section className="w-full bg-[#F5FAFF] pt-8 pb-12 md:py-16">
			<div className="container">
				<h2 className="heading-1 text-center mb-8 md:mb-12">Кабинеты и залы</h2>
				
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{rooms.map((room) => (
						<CardRoom
							key={room.id}
							title={room.title}
							images={room.images}
							capacity={room.capacity}
							area={room.area}
							hasProjector={room.hasProjector}
							hasWifi={room.hasWifi}
							price={room.price}
							href={room.href}
							isBlocked={room.isBlocked}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
