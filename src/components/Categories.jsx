import styled from 'styled-components';
import { productsDropdown } from '../data';
import CategoryItem from './CategoryItem';
import { MediumScreen } from '../responsive';

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
	margin: 2rem auto;
	font-size: 2.5rem;
	&::after {
		content: '';
		display: block;
		background-color: teal;
		width: 150px;
		height: 5px;
		margin: 1rem auto;
	}
	${MediumScreen({ fontSize: '1.8rem' })};
`;

function Categories() {
	return (
		<>
			<Title> OUR CATEGORIES </Title>
			<Container>
				{productsDropdown.map((item) => (
					<CategoryItem item={item} />
				))}
			</Container>
		</>
	);
}

export default Categories;
