import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { PiArrowRightBold } from 'react-icons/pi';

const IntroduceSection = () => {
	return (
		<Container>
			<Phrase>
				<p>
					<span>Radial Studio</span> aims to create modern and sustainable space and products.
				</p>
			</Phrase>
			<ProjectLink to="/project">
				<span>Check our Projects </span>
				<PiArrowRightBold size="16" color="var(--white)" />
			</ProjectLink>
		</Container>
	);
};

const Container = styled.section`
	margin: 64px 0 16px;
	width: 100%;
`;

const Phrase = styled.div`
	display: flex;
	width: 100%;
	font-size: var(--fz-h7);
	font-weight: var(--fw-black);

	p {
		font-size: var(--fz-h3);
		font-weight: inherit;
		color: var(--white);
		-webkit-text-stroke: 1px var(--black);

		span {
			color: var(--black);
		}
	}
`;

const ProjectLink = styled(Link)`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	margin: 32px auto;
	padding: var(--padding-container-mobile);
	width: 100%;
	background-color: var(--black);
	color: var(--white);
	font-size: var(--fz-sm);
	font-weight: var(--fw-semibold);

	&:hover {
		background-color: var(--grey800);
	}

	@media screen and (min-width: 640px) {
		display: none;
		font-size: var(--fz-p);
	}
`;

export default IntroduceSection;
