import styled from '@emotion/styled';

const skills: string[] = [
	'TypeScript',
	'',
	'JavaScript',
	'Next.js',
	'React',
	'React-Query',
	'Zustand',
	'',
	'Recoil',
	'Redux-Toolkit',
	'Emotion',
	'TailwindCSS',
	'SCSS',
	'',
	'Node.js',
	'Firebase',
	'Supabase',
	'Git',
	'Figma',
	'',
];

const SkillSection = () => {
	return (
		<Container>
			<Header>
				<Title>3</Title>
				<span>﹡</span>
			</Header>
			<Content>
				{skills.map((skill, idx) => (
					<Item key={`${skill}_${idx}`} filled={skill.length === 0}>
						{skill}
					</Item>
				))}
			</Content>
		</Container>
	);
};

const Container = styled.section`
	width: 100%;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		display: inline-block;
		width: 18px;
		height: 18px;
		color: var(--white);
		background-color: var(--black);
		text-align: center;
	}
`;

const Title = styled.h2`
	padding-left: 4px;
	font-size: var(--fz-h7);
	font-weight: var(--fw-bold);
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	border-top: 1px solid var(--black);
	border-left: 1px solid var(--black);
	border-bottom: 3px solid var(--black);
	background-color: var(--white);

	@media screen and (min-width: 640px) {
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(4, 1fr);
	}
`;

const Item = styled.div<{ filled: boolean }>`
	padding: var(--padding-container-mobile);
	border-bottom: 1px solid var(--black);
	border-right: 1px solid var(--black);
	background-color: ${({ filled }) => (filled ? 'var(--greyOpacity100)' : 'var(--white)')};
`;

export default SkillSection;
