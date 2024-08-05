import { Outlet } from 'react-router-dom';
import { Nav, Main, Footer } from '.';

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
