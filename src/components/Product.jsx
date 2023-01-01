import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const Info = styled.div`
	//opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	//background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info} {
		//opacity: 1;
	}
`;

const Circle = styled.div`
	width: 300px;
	height: 300px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 50%;
	z-index: 2;
	object-fit: cover;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
	color: #303030;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const Title = styled.h2`
	background-color: teal;
	opacity: 0.7;
	height: 2.8rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 4;
	position: absolute;
	bottom: 30%;
	letter-spacing: 1px;
	font-family: 'Montserrat', sans-serif;
	cursor: pointer;
`;

const Product = ({ item, onClick }) => {
	return (
		<Container onClick={onClick}>
			<Image src={item.img} />

			<Info>
				<Icon>
					<FaSearch />
				</Icon>
			</Info>
			<Title>{item.name}</Title>
		</Container>
	);
};

export default Product;
