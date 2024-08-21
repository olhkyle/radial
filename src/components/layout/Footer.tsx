import styled from '@emotion/styled';

const Footer = () => {
	return (
		<Container>
			<Year>
				{new Date(Date.now()).toLocaleString('ko').split('.')[0]}
				<sup>®</sup>
			</Year>
			<p>All Rights Reserved.</p>
		</Container>
	);
};

const Container = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	padding: 0 var(--padding-container-mobile);
	max-width: 960px;
	min-height: var(--nav-height);
	width: 100%;
`;

const Year = styled.p`
	position: relative;
	width: 50px;
	font-weight: var(--fw-medium);

	sup {
		position: absolute;
		top: 2px;
		right: 2px;
	}
`;

export default Footer;
