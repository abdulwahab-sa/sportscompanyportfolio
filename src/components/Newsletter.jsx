import { BiSend } from 'react-icons/bi';
import styled from 'styled-components';
import { MediumScreen } from '../responsive';

const Container = styled.div`
	height: 100%;
	padding: 4rem 3rem;
	background-color: #fcf5f5;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #303030;
	width: 100%;
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
const Desc = styled.div`
	font-size: 24px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 300;
	margin-bottom: 20px;
`;

const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgray;
`;

const Input = styled.input`
	border: none;
	flex: 8;
	padding-left: 20px;
	background-color: white;
	font-family: 'Montserrat', sans-serif;
	color: #303030;
`;

const Button = styled.button`
	flex: 1;
	border: none;
	background-color: teal;
	color: white;
`;

const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Desc>Get timely updates from your favorite products.</Desc>
			<InputContainer>
				<Input placeholder="Your email" />
				<Button>
					<BiSend />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
