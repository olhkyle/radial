import styled from '@emotion/styled';
import { ContactSection, FeatureSection, IntroduceSection, SkillSection } from '../components';

const Home = () => {
	return (
		<Container>
			<IntroduceSection />
			<FeatureSection />
			{/* <SkillSection /> */}
			<ContactSection />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
`;

export default Home;
