import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface MainProps {
	children: ReactNode;
}

const Main = ({ children }: MainProps) => {
	return <Container>{children}</Container>;
};

const Container = styled.main`
	margin: 0 auto;
	padding: var(--padding-container-mobile);
	max-width: 960px;
	width: 100%;
`;

export default Main;
