import styled from 'styled-components';
import { MdCheckCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Container = styled.div`
	height: 70vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: #303030;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Icon = styled.span`
	color: green;
	font-size: 4rem;
`;

const Title = styled.h2`
	font-size: 2.2rem;
	margin: 1rem auto;
`;

const Statement = styled.span`
	font-size: 1.2rem;
`;

const Button = styled.button`
	border: none;
	background-color: teal;
	color: #fff;
	padding: 10px 15px;
	margin: 1.4rem auto;
	font-weight: 500;
	font-size: 1rem;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	cursor: pointer;
`;

export const Thankyou = () => {
	return (
		<Container>
			<Wrapper>
				<Icon>
					{' '}
					<MdCheckCircle />{' '}
				</Icon>
				<Title>THANK YOU! </Title>
				<Statement>You have successfully submitted your inquiry.</Statement>
				<Statement> Our team will be in touch with you within 24 hours!</Statement>
				<Link to={'/casualwear'}>
					<Button> Click here to browse more Products </Button>
				</Link>
			</Wrapper>
		</Container>
	);
};
