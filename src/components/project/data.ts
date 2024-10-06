import { externalLink } from '../../constants/externalLink';

interface DevProject {
	title: string;
	src: string;
	href: `https://${string}`;
	completed: boolean;
}

const devProjects: DevProject[] = [
	{ title: 'tekt.log', src: '/project/craft.png', href: 'https://log.lazykyle.me', completed: false },
	{ title: 'basecamplive', src: '/project/isometric.webp', href: 'https://bclive.co.kr', completed: true },
	{ title: 'dta', src: '/project/dta.png', href: 'https://construction-ttax-d7e7d.web.app/', completed: true },
	{
		title: 'cbc',
		src: '/project/cbti.webp',
		href: 'https://www.figma.com/design/sWpaLRFWbu8Agu3tMiH1J1/CBC?node-id=0-1&t=JixNoz2lSWLlRBu3-1',
		completed: true,
	},
	{ title: 'designthou', src: '/project/designthou.png', href: 'https://designthou.com/', completed: true },
	{ title: 'fineapple', src: '/project/fineapple.png', href: 'https://fineapple-ea261.web.app/', completed: true },

	{ title: 'vanilla-trello', src: '/project/vanilla-trello.png', href: 'https://vanilla-trello-lime.vercel.app/', completed: true },
	{ title: 'esc', src: '/project/esc.jpeg', href: 'https://youtu.be/ndIasEiODu4', completed: true },
	{ title: 'lcc', src: '/project/lcc.png', href: 'https://first-responsive-web-three.vercel.app/', completed: true },
];

interface SpaceWork {
	title: string;
	href?: `https://${string}`;
	imgSrc?: string | string[];
	usage: string;
	role: string;
	field: 'Architecture' | 'Interior' | 'Furniture';
	location: string;
	year: number;
}

const spaceWork: SpaceWork[] = [
	{
		title: 'Pureda(on going)',
		href: externalLink.pureda,
		usage: 'Fashion Store',
		role: 'Design / PM / CM',
		field: 'Interior',
		location: 'Seoul',
		year: 2024,
	},
	{
		title: 'Farben',
		href: externalLink.farben,
		imgSrc: '/project/design/2024/farben-plan.png',
		usage: 'Cafe',
		role: 'Design(SD,DD)',
		field: 'Interior',
		location: 'Seoul',
		year: 2024,
	},
	{
		title: 'Obscura Paju Shinsegae Outlet',
		href: externalLink.obscura_paju,
		imgSrc: [
			'/project/design/2024/paju-plan.png',
			'/project/design/2024/paju-furnitures.png',
			'/project/design/2024/paju-elev1.jpg',
			'/project/design/2024/paju-elev2.png',
			'/project/design/2024/paju-elev3.png',
			'/project/design/2024/paju-iso.png',
		],
		usage: 'Fashion Store',
		role: 'Design / PM / CM',
		field: 'Interior',
		location: 'Paju',
		year: 2024,
	},
	{
		title: 'Obscura Suwon Starfield',
		href: externalLink.obscura_suwon,
		imgSrc: ['/project/design/2024/suwon-plan.png', '/project/design/2024/suwon-elev.jpg'],
		usage: 'Fashion Store',
		role: 'Design(SD / DD / C.DOC) / PM / CM',
		field: 'Interior',
		location: 'Suwon',
		year: 2024,
	},
	{
		title: 'Sinsa-dong 550-18 House Renovation',
		imgSrc: '/project/design/2022/2022-1.png',
		usage: 'Housing',
		role: 'Design',
		field: 'Interior',
		location: 'Seoul',
		year: 2022,
	},
	{
		title: 'Bed Side Table, Stool for Personal',
		imgSrc: [
			'/project/design/2020/stool with bedside table.jpg',
			'/project/design/2020/bedside table-1.JPG',
			'/project/design/2020/bedside table-2.jpg',
			'/project/design/2020/stool-4.jpg',
			'/project/design/2020/stool-6.jpg',
			'/project/design/2020/stool-7.jpg',
		],
		usage: 'Furniture',
		role: 'Design / HandCraft',
		field: 'Furniture',
		location: 'Seoul',
		year: 2020,
	},
	{
		title: 'Sinsa-dong Seoul Real Estate Office',
		imgSrc: '/project/design/2020/2020-2.png',
		usage: 'Office',
		role: 'Design',
		field: 'Interior',
		location: 'Seoul',
		year: 2020,
	},
	{
		title: 'Gangnam Metal Workshop',
		imgSrc: '/project/design/2020/2020-1.png',
		usage: 'Office/Workshop',
		role: 'Design',
		field: 'Interior',
		location: 'Seoul',
		year: 2020,
	},
	{
		title: 'Banpo Yangseo Village Renovation',
		imgSrc: '/project/design/2019/2019-3.png',
		usage: 'Housing',
		role: 'Design',
		field: 'Interior',
		location: 'Seoul',
		year: 2019,
	},
	{
		title: 'Yeonhui-dong House Renovation',
		imgSrc: '/project/design/2019/2019-2.png',
		usage: 'Housing',
		role: 'Design',
		field: 'Interior',
		location: 'Seoul',
		year: 2019,
	},
	{
		title: 'Sinsa-dong Myeong-jeong Building Renovation',
		imgSrc: '/project/design/2019/2019-1.png',
		usage: 'Housing',
		role: 'Design',
		field: 'Interior',
		location: 'Seoul',
		year: 2019,
	},
];

export type { DevProject, SpaceWork };
export { devProjects, spaceWork };
