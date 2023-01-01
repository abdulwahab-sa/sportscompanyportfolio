import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import * as Icons from 'react-icons/fa';
import sliderItems from '../data';
import { MediumScreen } from '../responsive';
import MobileHomeComp from './MobileHomeComp';

const Container = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	position: relative;
	overflow: hidden;
	border: 1px solid red;
	${MediumScreen({ display: 'none' })};
`;
const Arrow = styled.div`
	border-radius: 50%;
	background-color: #fff7f7;
	height: 50px;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #303030;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	cursor: pointer;
	opacity: 0.5;
	z-index: 222222;
`;
const Wrapper = styled.div`
	width: 100vw;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	transition: 0.2s all ease-in-out;
`;

const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100%;
	background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	object-fit: contain;
	height: 80vh;
	width: 50vw;
`;
const Image = styled.img`
	height: 100%;
`;

const InfoContainer = styled.div`
	flex: 1;
	color: #303030;
	font-family: 'Montserrat', sans-serif;
	width: 50vw;
`;

const Title = styled.h1`
	font-size: 2.8rem;
`;
const Description = styled.p`
	margin: 50px 0px;
	font-size: 1.2rem;
	font-weight: 500;
	letter-spacing: 2.5px;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 1rem;
	background-color: transparent;
	cursor: pointer;
	color: #303030;
`;

function Slider() {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<>
			<Container>
				<Arrow direction={'left'} onClick={() => handleClick('left')}>
					<Icons.FaArrowLeft />
				</Arrow>
				<Wrapper slideIndex={slideIndex}>
					{sliderItems.map((item) => {
						return (
							<Slide bg={item.bg}>
								<ImgContainer>
									<Image src={item.img} />
								</ImgContainer>
								<InfoContainer>
									<MobileHomeComp />
								</InfoContainer>
								{/*<InfoContainer>
									<Title> {item.title}</Title>
									<Description>{item.desc}</Description>
									<Button>EXPLORE</Button>
								</InfoContainer>*/}
							</Slide>
						);
					})}
				</Wrapper>
				<Arrow direction={'right'} onClick={() => handleClick('right')}>
					<Icons.FaArrowRight />
				</Arrow>
			</Container>
		</>
	);
}

export default Slider;
