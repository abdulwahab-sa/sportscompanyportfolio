import './PopularProduct.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';
import { useAPI } from '../context/ProductContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
	width: 100%;
	height: 100%;
	font-family: 'Montserrat', sans-serif;
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
	margin: 12px auto;
	color: #303030;
	border-radius: 5px;
`;

const Image = styled.img`
	height: 75%;
	width: 100%;
	object-fit: contain;
`;

const Article = styled.span`
	font-weight: 500;
	font-size: 14px;
`;
const ProductTitle = styled.h3`
	margin-top: 0.3rem;
	font-size: 1rem;
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

const PopularProducts = () => {
	const { products } = useAPI();

	const settings = {
		infinite: true,
		speed: 2000,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		dots: true,
		centrePadding: 0,
		fade: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<Title> Popular Products </Title>
			<Container>
				<Slider {...settings}>
					{products.map((product) => {
						return (
							<div>
								<ProductWrapper>
									<Image src={`data:image/jpeg;base64,${product.productImg}`} />
									<ProductTitle>{product.productName}</ProductTitle>
									<Article>{product.article}</Article>
									<Link to={`/${product.mainCategory}/${product.subCategory}/${product.id}`}>
										<Button>Custom Order</Button>
									</Link>
								</ProductWrapper>
							</div>
						);
					})}
				</Slider>
			</Container>
		</>
	);
};

export default PopularProducts;
