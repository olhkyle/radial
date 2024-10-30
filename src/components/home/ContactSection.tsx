import styled from '@emotion/styled';

const ContactSection = () => {
	return (
		<Container>
			<Header>
				<Title>﹡﹡</Title>
			</Header>
			<Description></Description>
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

export default ContactSection;
