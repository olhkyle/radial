import styled from '@emotion/styled';

const ContactSection = () => {
	return (
		<Container>
			<Header>
				<Title>﹡﹡﹡﹡</Title>
			</Header>
			<Description>
				<h3>Get In Touch With </h3>
				<Phrase>
					<li>
						<span>Email:to</span>
						<a href="mailto:me@radial.kr">me@radial.kr</a>
					</li>
				</Phrase>
			</Description>
		</Container>
	);
};

const Container = styled.section`
	width: 100%;
	border-bottom: 1px solid var(--black);
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

const Phrase = styled.ul`
	position: relative;
	display: flex;
	flex-direction: column;

	li {
		display: flex;
		align-items: center;
		gap: 8px;

		span {
			font-weight: var(--fw-medium);
			color: var(--grey700);
		}

		a {
			font-weight: var(--fw-semibold);
			text-decoration: underline;
			text-underline-offset: 2px;
		}
	}
`;

export default ContactSection;
