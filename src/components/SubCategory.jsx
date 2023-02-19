import { allProducts, finalData, productsDropdown } from '../data';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { DataArrayRounded } from '@mui/icons-material';

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
const Title = styled.h3`
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
		box-shadow: inset -10rem 0 0 0 #606060, inset 10rem 0 0 0 #606060;
	}
`;

const SubCategory = () => {
	const { category, subcategory } = useParams();
	const { data } = useContext(ProductContext);

	const subCatProd = data.filter((product) => product.subCategory === subcategory);

	return (
		<Container>
			{subCatProd.map((product) => {
				return (
					<ProductWrapper key={product.id}>
						<Image src={`data:image/jpeg;base64,${product.productImg}`} />
						<Title>{product.productName}</Title>
						<Article>{product.article}</Article>
						<Link to={`/${product.mainCategory}/${product.subCategory}/${product.id}`}>
							<Button>Custom Order</Button>
						</Link>
					</ProductWrapper>
				);
			})}
		</Container>
	);
};

export default SubCategory;
