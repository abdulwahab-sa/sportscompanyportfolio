import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { allProducts, finalData } from '../data';
import { Link } from 'react-router-dom';
import Customorder from '../pages/Customorder';

const Container = styled.div`
	height: 100%;
	width: 100%;
`;

const Wrapper = styled.div`
	padding: 50px;
	height: 100%;
	display: flex;
`;

const ImgContainer = styled.div`
	flex: 1;
	height: 400px;
	width: 400px;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	color: #303030;

	font-family: 'Montserrat', sans-serif;
	text-align: center;
	height: 100%;
`;

const Title = styled.h1`
	font-weight: 200;
	margin-bottom: 0.8rem;
`;

const Article = styled.span``;

const Desc = styled.p`
	margin: 20px 0px;
`;

const Button = styled.button`
	padding: 10px;
	border: 2px solid teal;
	background-color: teal;
	cursor: pointer;
	font-weight: 600;
	font-family: 'Montserrat', sans-serif;
	transition: 0.2s all ease-out;
	margin: 1.5rem auto;
	&:hover {
		background-color: #f8f4f4;
		color: teal;
	}
`;

const Product = () => {
	const { category, productId } = useParams();
	const productItem = finalData.find((prod) => prod.id === parseInt(productId));
	const { productImg, productName, article } = productItem;

	return (
		<Container>
			<Wrapper>
				<ImgContainer>
					<Image src={productImg} />
				</ImgContainer>
				<InfoContainer>
					<Title>{productName}</Title>
					<Article> {article}</Article>
					<Desc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc,
						at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo,
						consequat id condimentum ac, volutpat ornare.
					</Desc>
					<Link to={'/Customorder'}>
						<Button>SEND INQUIRY</Button>
					</Link>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};

export default Product;
