import styled from '@emotion/styled';
import { ContactSection, FeatureSection, IntroduceSection } from '../components';

const Home = () => {
	return (
		<Container>
			<IntroduceSection />
			<FeatureSection />
			<ContactSection />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 64px;
`;

export default Home;
