import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useAPI } from '../context/ProductContext';
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
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 6px;
	padding: 5px 0;
	margin: 12px;
	color: #303030;
	border-radius: 5px;
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
	padding: 10px 60px;
	border-radius: 14px;
	font-family: 'Montserrat', sans-serif;
	border: none;
	font-weight: 500;
	cursor: pointer;
	transition: 0.3s all ease-out;
	&:hover {
		background-color: #505050;
	}
`;

const SubCategory = () => {
	const { category, subcategory } = useParams();
	const { subcategories, products } = useAPI();

	// find the id of the  subcategory based on its name
	const subCategoryId = subcategories.find((s) => s.subcategory_title.toLowerCase() === subcategory.toLowerCase())?.subcategory_id;

	// filter the subcategories to get only the ones belonging to the main category
	const reqProducts = products.filter((s) => s.subcategory_subcategory_id === subCategoryId);

	return (
		<Container>
			{reqProducts.map((product) => {
				return (
					<ProductWrapper key={product.product_id}>
						<Image src={`data:image/jpeg;base64,${product.product_img}`} />
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
