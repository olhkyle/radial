import styled from '@emotion/styled';

const Project = () => {
	return (
		<Container>
			<p>We Are Going to Share Soon!</p>
			<Grid>
				<div></div>
				<div></div>
				<div></div>
			</Grid>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100dvh;

	p {
		padding: var(--padding-container-mobile);
		background-color: var(--greyOpacity50);
		border: 1px solid var(--grey200);
	}
`;

const Grid = styled.div`
	display: none;
	grid-template-columns: repeat(3, 1fr);
	gap: 8px;
	margin-top: 16px;

	div {
		width: 300px;
		height: 300px;
		background-color: var(--greyOpacity50);
	}

	@media screen and (min-width: 640px) {
		display: grid;
	}
`;

export default Project;
