import './styles/font.css';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Project } from './pages';
import { Layout } from './components';
import route from './constants/route';

const router = createBrowserRouter([
	{
		path: route.HOME,
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: route.PROJECT,
				element: <Project />,
			},
		],
	},
]);

const App = () => {
	return (
		<>
			<Global styles={GlobalStyle} />
			<RouterProvider router={router} />
		</>
	);
};

export default App;
