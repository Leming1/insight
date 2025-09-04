export type Room = {
	id: string;
	title: string;
	images: { src: string; alt?: string }[];
	capacity: number;
	area: number;
	hasProjector: boolean;
	hasWifi: boolean;
	price: number;
	href: string;
	isBlocked?: boolean;
	bookingUrl?: string;
	description?: string;
	groupPricing?: string;
	priceDescription?: string;
	priceDetails?: string;
	additionalInfo?: string;
	// Для залов - отдельные поля
	basicPackage?: string[];
	fullPackage?: string[];
	basicPricing?: string;
	fullPricing?: string;
};

export const roomsData: Room[] = [
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
		description: 'Журнальный столик\nКомфортабельные 2 кресла\nСветильник\nСтеллаж с канцелярией\nПредметы интерьера: цветы, вазы, свечки, салфетки, часы\nКондиционер',
		groupPricing: 'При необходимости можно установить: столы до 3 шт, стулья, кушетки 2 шт.',
		priceDetails: 'до 4 человек — 500 ₽/час\nот 5 человек — 650 ₽/час',
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
		description: 'Журнальный столик\nКомфортабельные 2 кресла и диван\nСветильник\nПредметы интерьера: цветы, вазы, свечки, салфетки, часы\nКондиционер',
		groupPricing: 'При необходимости можно установить: столы до 3шт, стулья, кушетки 2 шт.',
		priceDetails: 'до 4 человек — 500 ₽/час\nот 5 человек — 650 ₽/час',
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
		price: 400,
		href: '/rooms/cabinet-3',
		bookingUrl: 'https://n1622709.yclients.com',
		description: 'Журнальный столик\nКомфортабельные 2 кресла\nСтеллаж с канцелярией\nПредметы интерьера: цветы, вазы, свечки, салфетки, часы\nКондиционер\nРаковина с доступом к горячей и холодной воде',
		groupPricing: 'При необходимости можно установить: стол, стулья 3 шт, кушетку.',
		additionalInfo: 'Примечание: кабинет без окна.',
		priceDetails: 'до 4 человек — 500 ₽/час\nот 5 человек — 650 ₽/час',
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
		price: 400,
		href: '/rooms/cabinet-4',
		bookingUrl: 'https://n1622715.yclients.com',
		description: 'Журнальный столик\nКомфортабельные 2 кресла\nСветильник\nПредметы интерьера: цветы, салфетки, часы\nКондиционер\n2 больших окна',
		groupPricing: 'При необходимости можно установить: столы до 1 шт, стулья до 4 шт, кушетка 1шт.',
		priceDetails: 'до 4 человек — 500 ₽/час\nот 5 человек — 650 ₽/час',
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
		description: 'Журнальные 2 столика\nКомфортабельные 2 кресла\nСветильник\nПредметы интерьера: цветы, свечки, салфетки, часы\nКондиционер\nШкаф с канцелярией',
		groupPricing: 'При необходимости можно установить: кушетку 1 шт.',
		priceDetails: 'до 4 человек — 500 ₽/час\nот 5 человек — 650 ₽/час',
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
		description: 'Журналтный столик\nКомформабельные 2 кресла\nСтеллаж с канцелярией\nПредметы интерьера: цветы, свечки, салфетки, часы\nКондиционер',
		groupPricing: 'При необходимости можно установить: стол, стулья 3 шт, кушетку.',
		priceDetails: 'до 4 человек — 500 ₽/час\nот 5 человек — 650 ₽/час',
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
		description: 'Журнальный столик\nКомфортабельные 2 кресла\nПредметы интерьера: цветы, свечки, салфетки, часы\nКондиционер\n2 больших окна',
		groupPricing: 'При необходимости можно установить: столы до 3 шт, стулья до 13 шт, кушеток до 3 шт.',
		priceDetails: 'до 4 человек — 500 ₽/час\nот 5 человек — 650 ₽/час',
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
		bookingUrl: 'https://wa.me/79172701000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%97%D0%B0%D0%BB%201',
		description: 'Уютный зал для мероприятий',
		groupPricing: '',
		additionalInfo: 'При аренде от 3х полных дней скидка 10%.',
		priceDetails: 'Базовый: от 1200 ₽/час\nПолный: от 1500 ₽/час',
		basicPackage: [
			'Просторный зал до 50 человек',
			'Зона для кофе-брейка',
			'Флипчарт',
			'Кондиционер',
			'Коврики, подушки, пледы*',
			'Кушетки, столы*'
		],
		fullPackage: [
			'Включает всё из базового',
			'Проектор высокого разрешения',
			'Профессиональная аудиосистема',
			'Головные микрофоны с гарнитурой',
			'Кликер для презентаций',
			'Apple TV'
		],
		basicPricing: 'До 10 человек — 8000 ₽/день или 1200 ₽/час\nДо 20 человек — 9000 ₽/день или 1500 ₽/час\nОт 21 человека — 10000 ₽/день или 2000 ₽/час',
		fullPricing: 'До 10 человек — 9000 ₽/день или 1500 ₽/час\nДо 20 человек — 10000 ₽/день или 2000 ₽/час\nОт 21 человека — 12000 ₽/день или 2500 ₽/час',
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
		bookingUrl: 'https://wa.me/79172701000?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%97%D0%B0%D0%BB%202',
		description: 'Уютный зал для мероприятий',
		groupPricing: '',
		additionalInfo: 'При аренде от 3х полных дней скидка 10%.',
		priceDetails: 'Базовый: от 1000 ₽/час\nПолный: от 1200 ₽/час',
		basicPackage: [
			'Зал до 35 человек',
			'Зона для кофе-брейка',
			'Флипчарт',
			'Кондиционер',
			'Коврики, подушки, пледы*',
			'Столы и кушетки*'
		],
		fullPackage: [
			'Включает всё из базового',
			'Проектор высокого разрешения',
			'Качественная аудиосистема'
		],
		basicPricing: 'До 10 человек — 7000 ₽/день или 1000 ₽/час\nДо 20 человек — 8000 ₽/день или 1300 ₽/час\nОт 21 человека — 9000 ₽/день или 1700 ₽/час',
		fullPricing: 'До 10 человек — 8000 ₽/день или 1200 ₽/час\nДо 20 человек — 9000 ₽/день или 1700 ₽/час\nОт 21 человека — 11000 ₽/день или 2100 ₽/час',
	},
];
