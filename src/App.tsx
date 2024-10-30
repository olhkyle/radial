import './styles/font.css';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Project, ProjectDetail } from './pages';
import { Layout } from './components';
import route from './constants/route';
import ProjectLayout from './components/project/ProjectLayout';

const router = createBrowserRouter([
	{
		path: route.HOME,
		element: <Layout />,
		children: [
			{
				element: <ProjectLayout />,
				children: [
					{ index: true, element: <Project /> },
					{
						path: `/project/:title`,
						element: <ProjectDetail />,
					},
				],
			},
			{
				path: route.ABOUT,
				element: <About />,
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
