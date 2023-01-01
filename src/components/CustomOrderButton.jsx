import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Parallax from './../images/parallax.jpg';

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
	padding: 10px;
	border: 2px solid teal;
	background-color: teal;
	cursor: pointer;
	font-weight: 600;
	font-family: 'Montserrat', sans-serif;
	transition: 0.2s all ease-out;
	margin: 1rem auto;
	&:hover {
		background-color: rgba(47, 79, 79, 0.5);
		color: teal;
	}
`;

function CustomOrderButton() {
	return (
		<Container>
			<Statement> Want Customization? </Statement>
			<Heading>HAVE OWN DESIGNS</Heading>
			<Button>GET QUOTE</Button>
		</Container>
	);
}

export default CustomOrderButton;
