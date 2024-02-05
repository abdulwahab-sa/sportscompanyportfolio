import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Parallax from './../images/parallax.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
	background-image: url(${Parallax});
	width: 100%;
	height: 450px;
	background-attachment: fixed;
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover;
	color: whitesmoke;
	margin: 2rem auto;
	box-shadow: inset 0 0 0 2000px rgba(47, 79, 79, 0.5);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
`;

const Statement = styled.span``;
const Heading = styled.h1`
	margin: 0.8rem auto;
	text-align: center;
	${mobile({ fontSize: '1.4rem' })};
	&::after {
		content: '';
		display: block;
		background-color: teal;
		width: 150px;
		height: 5px;
		margin: 1rem auto;
	}
`;
const Button = styled.button`
	padding: 16px 14px;
	border-radius: 10px;
	background-color: teal;
	color: #fff;
	cursor: pointer;
	font-weight: 500;
	font-family: 'Montserrat', sans-serif;
	transition: 0.2s all ease-out;
	margin-top: 20px;
	font-size: 16px;
	border: none;
	&:hover {
		background-color: #00aeae;
	}
`;

function CustomOrderButton() {
	return (
		<Container>
			<Statement> Want Customization? </Statement>
			<Heading>HAVE OWN DESIGNS</Heading>
			<Link to={'/Customorder'} style={{ textDecoration: 'none' }}>
				<Button>GET QUOTE</Button>
			</Link>
		</Container>
	);
}

export default CustomOrderButton;
