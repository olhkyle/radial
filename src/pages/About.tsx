import styled from '@emotion/styled';
import { IntroduceSection } from '../components';

const About = () => {
	return (
		<Container>
			<IntroduceSection />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 64px;
`;

export default About;
