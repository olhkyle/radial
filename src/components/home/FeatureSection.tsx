import styled from '@emotion/styled';
import { externalLink } from '../../constants/externalLink';

interface Description {
	date: string;
	title: string;
	content: string;
	link?: string;
}

const description: Description[] = [
	{ date: '2024.09', title: 'Pureda(on going)', content: 'Interior Design', link: externalLink.pureda },
	{ date: '2024.04', title: 'Cafe Farben', content: 'Interior Design', link: externalLink.farben },
	{ date: '2024.02', title: 'Obscura Paju Shinsegae Outlet', content: 'Interior Design', link: externalLink.obscura_paju },
	{ date: '2024.01', title: 'Obscura Suwon Starfield', content: 'Interior Design', link: externalLink.obscura_suwon },
	{ date: '2024.07', title: 'BaseCampLive', content: 'Web Platform & Admin Service Development', link: externalLink.basecamplive },
	{ date: '2024.06', title: 'Radial', content: 'Established', link: '/' },
	{ date: '2023.07', title: 'CBTI', content: 'Web Application UI/UX Design', link: externalLink.cbti },
	{ date: '2022.02', title: 'DESIGNTHOU', content: 'Architecture Content Platform', link: externalLink.designthou },
	{ date: '2019.11', title: '🏢', content: 'Architectural / Interior Design' },
];

const FeatureSection = () => {
	return (
		<Container>
			<Header>
				<Title>﹡</Title>
			</Header>
			<Content>
				<Phrase>
					<h3>FEATURED</h3>
				</Phrase>
				<Description>
					{description.map(({ date, title, content, link }, idx) => (
						<li key={`${content}_${idx}`}>
							<div>
								<span>{date}</span>
								{link ? (
									<a href={link} target="_blank" rel="noopener noreferrer ">
										{title}
									</a>
								) : (
									<span>{title}</span>
								)}
							</div>
							<p>{content}</p>
						</li>
					))}
				</Description>
			</Content>
		</Container>
	);
};

const Container = styled.section`
	width: 100%;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		display: inline-block;
		width: 18px;
		height: 18px;
		color: var(--white);
		background-color: var(--black);
		text-align: center;
	}
`;

const Title = styled.h2`
	padding-left: 4px;
	font-size: var(--fz-h7);
	font-weight: var(--fw-bold);
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 32px;
	padding: var(--padding-container-desktop) var(--padding-container-mobile);
	border: 1px solid var(--black);
	border-bottom: 3px solid var(--black);
	background-color: var(--white);

	@media screen and (min-width: 640px) {
		grid-template-columns: 1fr 2.5fr;
	}
`;

const Phrase = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	font-size: var(--fz-h7);
	font-weight: var(--fw-black);

	h3 {
		font-size: var(--fz-h7);
		font-weight: inherit;
		color: var(--greyOpacity400);
	}
`;

const Description = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 12px;

	li {
		display: flex;
		flex-direction: column;
		gap: 4px;

		div {
			display: flex;
			gap: 16px;
			min-width: 320px;
		}

		span:first-of-type {
			display: inline-block;
			min-width: 60px;
			color: var(--black);
		}

		span:nth-of-type(2) {
			font-weight: var(--fw-semibold);
		}

		a {
			font-weight: var(--fw-semibold);
			text-decoration: underline;
		}

		p > a:hover {
			color: var(--grey800);
		}

		@media screen and (min-width: 640px) {
			flex-direction: row;
			gap: 12px;
		}
	}
`;

export default FeatureSection;
