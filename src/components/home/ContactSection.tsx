import styled from '@emotion/styled';

const ContactSection = () => {
	return (
		<Container>
			<Header>
				<Title>﹡﹡</Title>
			</Header>
			<Description>
				<Phrase>
					<a href="mailto:studiorradial@gmail.com" className="clip-path-button" target="_blank" rel="noopener noreferrer">
						EMAIL
					</a>
					<a
						href="https://www.instagram.com/radial.kr/profilecard/?igsh=NTVnZXdub20wOXFi"
						className="clip-path-button"
						target="_blank"
						rel="noopener noreferrer">
						INSTAGRAM
					</a>
				</Phrase>
			</Description>
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

const Description = styled.div`
	padding: var(--padding-container-mobile);
	background-color: var(--white);

	h3 {
		margin-bottom: 16px;
		font-size: var(--fz-h7);
		font-weight: var(--fw-black);
		color: var(--greyOpacity400);
	}
`;

const Phrase = styled.div`
	display: flex;
	gap: 16px;

	a {
		padding: calc(var(--padding-container-mobile) / 2) var(--padding-container-mobile);
		width: 120px;
		font-weight: var(--fw-semibold);
		background-color: var(--black);
		color: var(--white);
		text-align: center;
	}

	a:hover {
		background-color: var(--grey800);
		transition: background 0.15s ease-in-out;
	}
`;

export default ContactSection;
