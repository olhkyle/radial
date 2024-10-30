import styled from '@emotion/styled';

const STUDIO_EMAIL_LINK = 'studiorradial@gmail.com';
const INSTAGRAM_PROFILE_LINK = 'https://www.instagram.com/radial.kr/profilecard/?igsh=NTVnZXdub20wOXFi';

const Footer = () => {
	return (
		<Container>
			<LeftSection>
				<sup>©</sup>
				<Year>{new Date(Date.now()).toLocaleString('ko').split('.')[0]}</Year>
				<span>Radial. </span>
				<span>All Rights Reserved.</span>
			</LeftSection>
			<RightSection>
				<a href={`mailto:${STUDIO_EMAIL_LINK}`} target="_blank" rel="noopener noreferrer">
					<img src="/public/svgs/email.svg" alt="email svg" />
				</a>
				<a href={INSTAGRAM_PROFILE_LINK} target="_blank" rel="noopener noreferrer">
					<img src="/public/svgs/instagram.svg" alt="instagram svg" />
				</a>
			</RightSection>
		</Container>
	);
};

const Container = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 64px auto 0;
	padding: 0 var(--padding-container-mobile);
	max-width: 960px;
	min-height: var(--nav-height);
	width: 100%;
`;

const LeftSection = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	font-weight: var(--fw-medium);
`;

const Year = styled.p`
	font-weight: var(--fw-medium);
`;

const RightSection = styled.div`
	display: flex;
	gap: 8px;

	a {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: calc(var(--padding-container-mobile) / 3);
		background-color: var(--white);
		border-radius: var(--radius-s);
		transition: background 0.15s ease-in-out;
	}

	a:hover {
		background: var(--greyOpacity100);
	}
`;

export default Footer;
