import { ReactNode } from 'react';

interface MainProps {
	children: ReactNode;
}

const Main = ({ children }: MainProps) => {
	return <>main{children}</>;
};

export default Main;
