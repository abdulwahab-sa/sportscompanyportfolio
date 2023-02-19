import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { MediumScreen } from '../responsive';

const Container = styled.div`
	height: 100%;
	width: 100%;
`;

const Wrapper = styled.div`
	padding: 50px;
	height: 100%;
	display: flex;
	${MediumScreen({ flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
	flex: 1;
	height: 400px;
	max-width: 500px;
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

const Product = () => {
	const { data } = useContext(ProductContext);
	const { productId } = useParams();
	const productItem = data.find((prod) => prod.id === parseInt(productId));
	const { productImg, productName, article, productDescription } = productItem;

	return (
		<Container>
			<Wrapper>
				<ImgContainer>
					<Image src={`data:image/jpeg;base64,${productImg}`} />
				</ImgContainer>
				<InfoContainer>
					<Title>{productName}</Title>
					<Article> {article}</Article>
					<Desc>{productDescription}</Desc>
					<Link to={'/Customorder'} style={{ textDecoration: 'none', border: 'none' }}>
						<Button>SEND INQUIRY</Button>
					</Link>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};

export default Product;
