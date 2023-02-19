import { allProducts, finalData, popularProducts, productsDropdown } from '../data';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { MediumScreen } from '../responsive';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	color: #303030;
	font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h2`
	color: #303030;
	font-family: 'Montserrat', sans-serif;
	text-align: center;
	margin: 2rem auto;
	font-size: 2.5rem;
	${MediumScreen({ fontSize: '1.8rem' })};
	&::after {
		content: '';
		display: block;
		background-color: teal;
		width: 150px;
		height: 5px;
		margin: 1rem auto;
	}
`;

const ProductWrapper = styled.div`
	width: 260px;
	height: 350px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 2rem;
	cursor: pointer;
	border: 0.5px solid grey;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	padding: 5px 0;
`;

const Image = styled.img`
	height: 75%;
	width: 100%;
	object-fit: contain;
`;

const Article = styled.span``;
const ProductTitle = styled.h3`
	margin-top: 0.3rem;
`;

const Button = styled.button`
	background-color: #303030;
	color: whitesmoke;
	padding: 10px;
	border-radius: 5%;
	font-family: 'Montserrat', sans-serif;
	border: none;
	font-weight: 600;
	cursor: pointer;
	transition: 0.3s all ease-out;
	&:hover {
		background-color: whitesmoke;
		color: #303030;
		border: 1px solid #303030;
	}
`;

function getUniqueListBy(arr, key) {
	return [...new Map(arr.map((item) => [item[key], item])).values()];
}

const PopularProducts = () => {
	const { data } = useContext(ProductContext);
	const uniqueData = getUniqueListBy(data, 'subCategory');

	return (
		<>
			<Title> POPULAR PRODUCTS </Title>
			<Container>
				{uniqueData.splice(0, 7).map((product) => {
					return (
						<ProductWrapper key={product.id}>
							<Image src={`data:image/jpeg;base64,${product.productImg}`} />
							<ProductTitle>{product.productName}</ProductTitle>
							<Article>{product.article}</Article>
							<Link to={`/${product.mainCategory}/${product.subCategory}/${product.id}`}>
								<Button>Custom Order</Button>
							</Link>
						</ProductWrapper>
					);
				})}
			</Container>
		</>
	);
};

export default PopularProducts;
