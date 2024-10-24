import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { MdGridView } from 'react-icons/md';
import { CiBoxList } from 'react-icons/ci';
import { LazyImage } from '../components';
import { devProjects, spaceWork } from '../components/project/data';

const placeholderImageUrl: string = '/project/placeholder.webp';

const Project = () => {
	const [tab, setTab] = useState<'space' | 'dev'>('dev');
	const [displayMethod, setDisplayMethod] = useState<'grid' | 'list'>('grid');

	return (
		<Container>
			<Notice>﹡ We are going to share more projects soon!</Notice>
			<Tabs>
				<Tab type="button" id="dev" current={tab === 'dev'} onClick={() => setTab('dev')}>
					Dev
				</Tab>
				<Tab type="button" id="space" current={tab === 'space'} onClick={() => setTab('space')}>
					Space
				</Tab>
			</Tabs>

			{tab === 'space' && (
				<GridOrList>
					<Target type="button" id="grid" current={displayMethod === 'grid'} onClick={() => setDisplayMethod('grid')}>
						<MdGridView size="24" color={displayMethod === 'grid' ? 'var(--white)' : 'var(--black)'} />
					</Target>
					<Target type="button" id="list" current={displayMethod === 'list'} onClick={() => setDisplayMethod('list')}>
						<CiBoxList size="24" color={displayMethod === 'list' ? 'var(--white)' : 'var(--black)'} />
					</Target>
				</GridOrList>
			)}

			{tab === 'dev' && (
				<DevProjectGrid>
					{devProjects.map(({ title, src, href, completed }, idx) => (
						<motion.div
							key={href}
							initial={{ y: 30, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.2 * idx, ease: 'easeInOut' }}
							viewport={{ once: true }}>
							<ImageLink to={href} target="_blank" rel="noopener noreferrer">
								<LazyImage src={src} alt={title} width={300} height={200} />
								<p>{title}</p>
								{!completed && <ComingSoon>Coming Soon</ComingSoon>}
							</ImageLink>
						</motion.div>
					))}
				</DevProjectGrid>
			)}

			{tab === 'space' &&
				(displayMethod === 'grid' ? (
					<SpaceWorkGrid>
						{spaceWork.map(({ title, year, imgSrc }, idx) => (
							<motion.div
								key={title}
								initial={{ y: 50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.1 * idx, ease: 'easeInOut' }}
								viewport={{ once: true }}>
								<ImageLink to={`/project/${title}`} key={title}>
									<LazyImage
										src={Array.isArray(imgSrc) ? imgSrc[0] : imgSrc ? imgSrc : placeholderImageUrl}
										alt={`${year}-${title}`}
										width={'100%'}
										height={'auto'}
									/>
									<p>{title}</p>
									{title.includes('on going') && <ComingSoon>Coming Soon</ComingSoon>}
								</ImageLink>
							</motion.div>
						))}
					</SpaceWorkGrid>
				) : (
					<SpaceWorkList>
						{spaceWork.map(({ title, year }) => (
							<div key={title}>
								<span>{year}</span>
								<Link to={`/project/${title}`}>{title}</Link>
							</div>
						))}
					</SpaceWorkList>
				))}
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
`;

const Tab = styled.button<{ current: boolean }>`
	padding: calc(var(--padding-container-mobile) / 2) var(--padding-container-mobile);
	font-size: var(--fz-h7);
	font-weight: var(--fw-bold);
	color: ${({ current }) => (current ? 'var(--white)' : 'var(--black)')};
	background-color: ${({ current }) => current && 'var(--black)'};
`;

const GridOrList = styled.div`
	display: flex;
	gap: 8px;
	justify-content: flex-end;
`;

const Target = styled.button<{ current: boolean }>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: calc(var(--padding-container-mobile) / 2) calc(var(--padding-container-mobile) / 2);
	color: ${({ current }) => (current ? 'var(--white)' : 'var(--black)')};
	background-color: ${({ current }) => current && 'var(--black)'};
	border: 1px solid var(--grey200);
`;

const DevProjectGrid = styled.div`
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
		width: 100%;
		color: var(--white);
		background-color: var(--greyOpacity50);
		-webkit-text-stroke: 1px var(--black);
		border: none;
		font-size: var(--fz-h4);
		font-weight: var(--fw-black);
		text-align: center;
		transform: translate3d(-50%, -50%, 0);
		z-index: var(--nav-index);
	}

	&:hover {
		img {
			filter: none;
		}

		border: 1px solid var(--grey900);
		transition: border 0.15s ease-in;
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

const SpaceWorkGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 16px;
	margin-top: 32px;

	a {
		position: relative;
	}

	@media screen and (min-width: 640px) {
		grid-template-columns: 1fr 1fr;
	}
`;

const SpaceWorkList = styled.div`
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
		transition: color 0.15s ease-in-out;
	}

	a:hover {
		color: var(--grey500);
	}
`;

export default Project;
