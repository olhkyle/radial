import { externalLink } from './externalLink';

interface Description {
	date: string;
	title: string;
	content: string;
	link?: string;
}

export const description: Description[] = [
	{ date: '2024.09', title: 'Pureda', content: 'Interior Design', link: externalLink.pureda },
	{ date: '2024.07', title: 'BaseCampLive', content: 'Web Platform & Admin Service Development', link: externalLink.basecamplive },
	{ date: '2024.04', title: 'Farben', content: 'Interior Design', link: externalLink.farben },
	{ date: '2024.02', title: 'Obscura Paju Shinsegae Outlet', content: 'Interior Design', link: externalLink.obscura_paju },
	{ date: '2024.01', title: 'Obscura Suwon Starfield', content: 'Interior Design', link: externalLink.obscura_suwon },
	{ date: '2023.07', title: 'CBTI', content: 'Web Application UI/UX Design', link: externalLink.cbti },
	{ date: '2022.02', title: 'DESIGNTHOU', content: 'Architecture Content Platform', link: externalLink.designthou },
	{ date: '2019.11 ~ 2021.12', title: '7 🏢  projects ', content: 'Architectural / Interior Design' },
];
