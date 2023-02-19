import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Fadingimages from './Fadingimages';
import { MediumScreen } from '../responsive';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
	color: #303030;
	padding: 10px;
	margin: 0.8rem auto 3.2rem;
	${MediumScreen({ flexDirection: 'column' })}
`;

const InfoWrapper = styled.div`
	margin: 1rem auto;
	padding-top: 24px;
	height: 500px;
	display: flex;
	flex-direction: column;
	text-align: left;
	${MediumScreen({ width: '80%' })}
`;

const Small = styled.h3`
	font-size: 1.8rem;
	font-weight: 500;
	font-style: italic;
	margin-bottom: 1.8rem;
`;
const Medium = styled.h2`
	margin-top: 1.8rem;
	font-size: 1.2rem;
`;
const Large = styled.h1`
	font-size: 2rem;
	line-height: 2.5rem;
	margin-bottom: 0.8rem;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		display: block;
		background-color: teal;
		width: 150px;
		height: 4px;
		bottom: -10px;
		margin: 0 auto;
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
	margin: 2.8rem auto 0;
	&:hover {
		background-color: whitesmoke;
		color: teal;
	}
`;
function MobileHomeComp() {
	return (
		<Container>
			<Fadingimages />
			<InfoWrapper>
				<Small> WELCOME!</Small>
				<Large>
					TRADE CITY CORP IS
					<br />
					PAKISTAN'S LEADING <br />
					CLOTHING MANUFACTURER
				</Large>
				<Medium>
					We take pride in producing Premium Quality Products!
					<br />
					Order custom styles today!
				</Medium>

				<Link to={'/Customorder'}>
					<Button>ORDER SAMPLES</Button>
				</Link>
			</InfoWrapper>
		</Container>
	);
}

export default MobileHomeComp;
