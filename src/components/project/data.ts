import { externalLink } from '../../constants/externalLink';

const devProjects: { title: string; src: string; href: `https://${string}`; completed: boolean }[] = [
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

const spaceWork: { title: string; href?: `https://${string}`; field: 'Architecture' | 'Interior' | 'Furniture'; year: number }[] = [
	{ title: 'Pureda(on going)', href: externalLink.pureda, field: 'Interior', year: 2024 },
	{ title: 'Cafe Far *', href: externalLink.farben, field: 'Interior', year: 2024 },
	{ title: 'Obscura Paju Shinsegae Outlet', href: externalLink.obscura_paju, field: 'Interior', year: 2024 },
	{ title: 'Obscura Suwon Starfield', href: externalLink.obscura_suwon, field: 'Interior', year: 2024 },
	{ title: 'Sinsa-dong 550-18 House Renovation', field: 'Interior', year: 2022 },
	{ title: 'Bed Side Table, Stool for Personal', field: 'Furniture', year: 2020 },
	{ title: 'Sinsa-dong Seoul Real Estate', field: 'Interior', year: 2020 },
	{ title: 'Gangnam Metal Workshop', field: 'Interior', year: 2020 },
	{ title: 'Banpo Yangseo Village Renovation', field: 'Interior', year: 2019 },
	{ title: 'Yeonhui-dong House Renovation', field: 'Interior', year: 2019 },
	{ title: 'Sinsa-dong Myeong-jeong Building Renovation', field: 'Interior', year: 2019 },
];

export { devProjects, spaceWork };
