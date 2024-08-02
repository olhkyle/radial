import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

interface LayoutProps {
	children: ReactNode;
}

const Layout = () => {
	return (
		<>
			<Nav />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
};

export default Layout;
