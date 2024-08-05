import styled from '@emotion/styled';

interface Description {
	id: number;
	content: string;
}

const description: Description[] = [
	{ id: 1, content: 'Develop software-based products' },
	{ id: 2, content: 'Led by 2 Engineers' },
	{ id: 3, content: 'Aim to create neat and well-organized products' },
];

const IntroduceSection = () => {
	return (
		<Container>
			<Header>
				<Title>1</Title>
				<span>﹡</span>
			</Header>
			<Content>
				<Phrase>
					<h3>O_MH_</h3>
					<span>=</span>
					<p>
						<span>O</span>rganized <span>M</span>et<span>h</span>ods
					</p>
				</Phrase>
				<Description>
					{description.map(({ id, content }) => (
						<li key={id}>
							<span>{id}</span>
							<p>{content}</p>
						</li>
					))}
				</Description>
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
	grid-template-columns: 1fr;
	gap: 32px;
	border: 1px solid var(--black);
	border-bottom: 3px solid var(--black);
	padding: var(--padding-container-desktop) var(--padding-container-mobile);
	background-color: var(--white);

	@media screen and (min-width: 640px) {
		grid-template-columns: 1fr 2fr;
	}
`;

const Phrase = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	gap: 8px;
	font-size: var(--fz-h7);
	font-weight: var(--fw-black);

	h3 {
		font-weight: inherit;
	}

	p {
		color: var(--greyOpacity300);

		span {
			display: inline-block;
			color: var(--grey900);
			text-decoration: none;
		}
	}

	@media screen and (min-width: 640px) {
		flex-direction: column;
	}
`;

const Description = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4px;

	li {
		display: flex;
		/* align-items: center; */
		gap: 8px;

		span {
			display: inline-block;
			width: 24px;
			height: 24px;
			color: var(--black);
			background-color: var(--greyOpacity100);
			border-bottom: 1px solid var(--grey900);
			text-align: center;
		}
	}

	@media screen and (min-width: 640px) {
	}
`;

export default IntroduceSection;
