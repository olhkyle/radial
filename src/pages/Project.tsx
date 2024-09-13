import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { LazyImage } from '../components';
import { devProjects, spaceWork } from '../components/project/data';
import { useState } from 'react';

const Project = () => {
	const [tab, setTab] = useState<'space' | 'dev'>('space');

	return (
		<Container>
			<Notice>﹡ We Are Going to Share More Projects Soon!</Notice>

			<Tabs>
				<Tab type="button" id="space" current={tab === 'space'} onClick={() => setTab('space')}>
					Space
				</Tab>
				<Tab type="button" id="dev" current={tab === 'dev'} onClick={() => setTab('dev')}>
					Dev
				</Tab>
			</Tabs>
			{tab === 'dev' && (
				<Grid>
					{devProjects.map(({ title, src, href, completed }) => (
						<ImageLink to={href} key={href} target="_blank" rel="noopener noreferrer">
							<LazyImage src={src} alt={title} width={300} height={200} />
							<p>{title}</p>
							{!completed && <ComingSoon>Coming Soon</ComingSoon>}
						</ImageLink>
					))}
				</Grid>
			)}
			{tab === 'space' && (
				<SpaceWork>
					{spaceWork.map(({ title, href, year }) => (
						<div>
							<span>{year}</span>
							<Link to={href ?? '#'} target="_blank">
								{title}
							</Link>
						</div>
					))}
				</SpaceWork>
			)}
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	min-height: 80dvh;
`;

const Notice = styled.p`
	padding: var(--padding-container-mobile);
	border: 1px solid var(--greyOpacity200);
	background-color: var(--greyOpacity50);
`;

const Tabs = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 32px;
	width: 150px;
	background-color: var(--greyOpacity50);
	border: 1px solid var(--grey200);
	border-radius: var(--radius-xs);
`;

const Tab = styled.button<{ current: boolean }>`
	padding: calc(var(--padding-container-mobile) / 2) var(--padding-container-mobile);
	font-size: var(--fz-h7);
	font-weight: var(--fw-bold);
	color: ${({ current }) => (current ? 'var(--white)' : 'var(--black)')};
	background-color: ${({ current }) => current && 'var(--black)'};
	border-radius: var(--radius-s);
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 16px;
	margin-top: 64px;

	@media screen and (min-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 960px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const ImageLink = styled(Link)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	/* min-height: 200px; */
	border: 1px solid var(--greyOpacity300);
	object-fit: cover;

	img {
		display: block;
		width: 100%;
		height: 100%;
		filter: blur(2px);
		transition: filter 0.15s ease-in-out;
	}

	p {
		position: absolute;
		top: 50%;
		left: 50%;
		padding: var(--padding-container-mobile);
		color: var(--white);
		background-color: var(--greyOpacity50);
		-webkit-text-stroke: 1px var(--black);
		border: none;
		font-size: var(--fz-h4);
		font-weight: var(--fw-black);
		transform: translate3d(-50%, -50%, 0);
		z-index: var(--nav-index);
	}

	&:hover {
		img {
			filter: none;
		}
	}

	@media screen and (min-width: 960px) {
		width: 100%;
	}
`;

const ComingSoon = styled.span`
	position: absolute;
	top: 8px;
	right: 8px;
	display: inline-block;
	padding: calc(var(--padding-container-mobile) / 4);
	min-height: 24px;
	font-size: var(--fz-sm);
	font-weight: var(--fw-semibold);
	color: var(--white);
	background: linear-gradient(to right, var(--blue200), var(--blue100));
	border-radius: var(--radius-s);
`;

const SpaceWork = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin: 32px 0;

	div {
		display: flex;
		gap: 16px;
		font-size: var(--fz-h6);
		font-weight: var(--fw-medium);
	}

	a {
		font-weight: var(--fw-bold);
	}
`;

export default Project;
