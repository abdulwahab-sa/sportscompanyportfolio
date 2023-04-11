import styled from 'styled-components';
import { productsDropdown } from '../data';
import CategoryItem from './CategoryItem';
import { mobile, MediumScreen } from '../responsive';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 20px;
	color: #303030;
`;
const Title = styled.h2`
	color: #303030;
	font-family: 'Montserrat', sans-serif;
	text-align: center;
	margin: 2rem 0;
	font-size: 2.2rem;
	font-weight: 600;
	${mobile({ fontSize: '1.6rem' })};
	&::after {
		content: '';
		display: block;
		background-color: teal;
		width: 150px;
		height: 3px;
		margin: 1rem auto;
	}
`;

function Categories() {
	return (
		<>
			<Title> Our Product Range </Title>
			<Container>
				{productsDropdown.map((item) => (
					<CategoryItem item={item} />
				))}
			</Container>
		</>
	);
}

export default Categories;
