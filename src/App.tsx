import './styles/font.css';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Project, ProjectDetail } from './pages';
import { Layout } from './components';
import route from './constants/route';
import ProjectLayout from './components/project/ProjectLayout';

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
				element: <ProjectLayout />,
				children: [
					{ index: true, element: <Project /> },
					{
						path: `:title`,
						element: <ProjectDetail />,
					},
				],
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
