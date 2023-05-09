import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MediumScreen } from '../responsive';
import { useAPI } from '../context/ProductContext';
import { Buffer } from 'buffer';

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
	padding: 20px 50px;
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

const ProductDetail = () => {
	const { productId } = useParams();
	const { products } = useAPI();
	console.log(products);
	const productItem = products.find((prod) => prod.product_id === parseInt(productId));

	return (
		<Container>
			{
				<Wrapper>
					<ImgContainer>
						<Image src={`data:image/png;base64,${Buffer.from(productItem.product_img.data).toString('base64')}`} />
					</ImgContainer>
					<InfoContainer>
						<Title>{productItem.product_title}</Title>
						<Article> {productItem.product_article}</Article>
						<Desc>{productItem.product_description}</Desc>
						<Link to={'/Customorder'} style={{ textDecoration: 'none', border: 'none' }}>
							<Button>SEND INQUIRY</Button>
						</Link>
					</InfoContainer>
				</Wrapper>
			}
		</Container>
	);
};

export default ProductDetail;
