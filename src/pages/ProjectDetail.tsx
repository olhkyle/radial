import styled from '@emotion/styled';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import { spaceWork } from '../components/project/data';
import { LazyImage } from '../components';

const ProjectDetail = () => {
	const { title } = useParams();

	const detailData = spaceWork.find(work => work.title === title);

	return (
		<div>
			<GoBackLink to="/project">
				<RiArrowLeftSLine size="21" color="black" />
				Work List
			</GoBackLink>
			<Header>
				<Flex>
					<dt>Title</dt>
					<dd>{title}</dd>
				</Flex>

				<Flex>
					<dt>Usage</dt>
					<dd>{detailData?.usage}</dd>
				</Flex>
				<Flex>
					<dt>Location</dt>
					<dd>{detailData?.location}</dd>
				</Flex>
				<Flex>
					<dt>Role</dt>
					<dd>{detailData?.role}</dd>
				</Flex>
				<Flex>
					<dt>Year</dt>
					<dd>{detailData?.year}</dd>
				</Flex>
			</Header>
			<Body>
				{Array.isArray(detailData?.imgSrc) ? (
					detailData?.imgSrc.map(image => <LazyImage key={image} src={image} alt={image} width={'100%'} height={'100%'} />)
				) : detailData?.imgSrc ? (
					<LazyImage src={detailData?.imgSrc!} alt={detailData?.imgSrc!} width={'100%'} height={'100%'} />
				) : (
					<EmptyImageMessage>﹡ Plan and Images will be shared soon, after Construction Completion !</EmptyImageMessage>
				)}
			</Body>
		</div>
	);
};

const GoBackLink = styled(Link)`
	display: inline-flex;
	gap: 4px;
	padding: calc(var(--padding-container-mobile) * 0.5);
	color: var(--black);
	background-color: var(--grey50);
	border: 1px solid var(--grey200);

	&:hover {
		background-color: var(--grey100);
	}
`;

const Header = styled.dl`
	display: flex;
	flex-direction: column;
	margin-top: 32px;

	dt {
		min-width: 100px;

		font-size: var(--fz-p);
		font-weight: var(--fw-bold);

		@media screen and (min-width: 640px) {
			min-width: 250px;
			font-size: var(--fz-h7);
		}
	}

	dd {
		font-size: var(--fz-p);

		@media screen and (min-width: 640px) {
			font-size: var(--fz-h7);
		}
	}
`;

const Flex = styled.div`
	display: flex;
	gap: 64px;
`;

const EmptyImageMessage = styled.p`
	margin-top: 64px;
	padding: calc(var(--padding-container-mobile) * 0.5);
	background-color: var(--grey100);
	border: 1px solid var(--grey200);
	border-radius: var(--radius-s);
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin: 32px 0 64px;
`;

export default ProjectDetail;
