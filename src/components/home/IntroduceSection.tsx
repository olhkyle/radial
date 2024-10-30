import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { PiArrowRightBold } from 'react-icons/pi';
import route from '../../constants/route';

const IntroduceSection = () => {
	return (
		<Container>
			<Phrase>
				<p>
					<span>Radial Studio</span> aims to create modern and sustainable <span>product</span> and <span>space</span>
				</p>
			</Phrase>
			<Description>
				We provide engineering and schematic design service for clients who need Web Application or Interior Design.
			</Description>

			<Description>
				<h4>What We Can Provide</h4>
				<p>- Build Web Application (Company's Homepage / Admin Service, B2C Web App Service)</p>
				<p>- Design Space and Manage Construction </p>
			</Description>

			<Description>
				<h4>Clients: </h4>
				<p>Pureda, BaseCampLive(BCL), Private Personal Clients</p>
			</Description>

			<ProjectLink to={route.HOME}>
				<span>Check our Projects </span>
				<PiArrowRightBold size="16" color="var(--white)" />
			</ProjectLink>
		</Container>
	);
};

const Container = styled.section`
	margin: 32px auto 16px;
	width: 100%;

	@media screen and (min-width: 640px) {
		width: 80%;
	}
`;

const Phrase = styled.div`
	display: flex;
	width: 100%;
	font-size: var(--fz-h7);
	font-weight: var(--fw-black);

	p {
		font-size: var(--fz-h4);
		font-weight: inherit;
		color: var(--white);
		-webkit-text-stroke: 1px var(--black);

		span {
			color: var(--black);
		}

		@media screen and (min-width: 640px) {
			font-size: var(--fz-h2);
		}
	}
`;

const Description = styled.div`
	margin: 24px 0;
	font-size: var(--fz-p);

	h4 {
		font-weight: var(--fw-semibold);
	}

	@media screen and (min-width: 640px) {
		margin: 32px 0;
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
		width: auto;
		font-size: var(--fz-p);
	}
`;

export default IntroduceSection;
