import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MediumScreen, BigScreen } from '../responsive';
import cover from './../images/active-cover.jpg';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
	color: #303030;
	${MediumScreen({ flexDirection: 'column' })}
	${BigScreen({ padding: '0 20px' })}
`;

const InfoWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	text-align: left;
	padding: 8px 12px;
	${BigScreen({ width: '50%', margin: '0' })}
`;

const Small = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;
	${BigScreen({ fontSize: '1.4rem' })}
`;
const Medium = styled.h2`
	font-size: 1rem;
	font-weight: 500;
	margin-top: 10px;
	${BigScreen({ fontSize: '1.1rem', fontWeight: '500' })}
`;
const Large = styled.h1`
	font-size: 1.4rem;
	margin: 18px 0;
	font-weight: 600;
	position: relative;
	color: teal;
	${BigScreen({ fontSize: '1.9rem', lineHeight: '34px' })}
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

const CoverImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	${BigScreen({ width: '400px' })}
`;

const Background = styled.div`
	position: absolute;
	height: 240px;
	width: 240px;
	top: 0;
	left: 0;
	background-color: #00aeae;
	border-radius: 50%;
	mix-blend-mode: multiply;
	filter: blur(5px);
	opacity: 0.1;
`;

const BackgroundTwo = styled.div`
	position: absolute;
	height: 240px;
	width: 240px;
	bottom: 0;
	right: 0;
	background-color: teal;
	border-radius: 50%;
	mix-blend-mode: multiply;
	filter: blur(5px);
	opacity: 0.1;
`;

function MobileHomeComp() {
	return (
		<Container>
			<InfoWrapper>
				<Background></Background>
				<Small> Welcome!</Small>
				<Large>
					Trade City is Pakistan's <br /> leading Clothing Supplier
				</Large>
				<Medium>
					We take pride in producing Premium Quality Products. We excel at producing custom clothing at low MOQ and deliver premium services
					to brands all over the globe. Whether you're a sports club, streetwear brand, or fitness apparel brand, we are here to help you
					take your business to the next level. Order custom styles today!
				</Medium>
				<Link to={'/Customorder'} style={{ textDecoration: 'none' }}>
					<Button>Order Samples</Button>
				</Link>
			</InfoWrapper>

			<CoverImg src={cover} />
		</Container>
	);
}

export default MobileHomeComp;
