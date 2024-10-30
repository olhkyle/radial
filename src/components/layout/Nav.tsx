import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import route from '../../constants/route';

const Nav = () => {
	return (
		<Container>
			<Logo>
				<a href="/">
					<img src="/radial.svg" alt="Logo" />
				</a>
			</Logo>
			<Links>
				<Link to={`${route.HOME}`}>Project</Link>
				<Link to={`${route.ABOUT}`}>About</Link>
			</Links>
		</Container>
	);
};

const Container = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	padding: 0 var(--padding-container-mobile);
	max-width: 960px;
	height: 60px;

	a.active {
		color: var(--white);
		background-color: var(--black);
	}
`;

const Logo = styled.h1`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 50px;

	a {
		display: inline-flex;
		align-items: center;
		width: 100%;
		height: 100%;
	}
`;

const Links = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
`;

const Link = styled(NavLink)`
	padding: calc(var(--padding-container-mobile) / 2.5) calc(var(--padding-container-mobile) / 2);
	font-weight: var(--fw-medium);
	transition: all 0.15s ease-in-out;

	&:hover {
		background-color: var(--greyOpacity100);
	}
`;

export default Nav;
