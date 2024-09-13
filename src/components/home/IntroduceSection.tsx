import styled from '@emotion/styled';

const IntroduceSection = () => {
	return (
		<Container>
			<Phrase>
				<p>
					<span>Radial Studio</span> aims to create modern and sustainable space and products.
				</p>
			</Phrase>
		</Container>
	);
};

const Container = styled.section`
	margin: 64px 0;
	width: 100%;
`;

const Phrase = styled.div`
	display: flex;
	width: 100%;
	font-size: var(--fz-h7);
	font-weight: var(--fw-black);

	p {
		font-size: var(--fz-h3);
		font-weight: inherit;
		color: var(--white);
		-webkit-text-stroke: 1px var(--black);
		span {
			color: var(--black);
		}
	}
`;

export default IntroduceSection;
