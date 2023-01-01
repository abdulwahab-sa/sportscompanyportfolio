import { React, useState } from 'react';
import styled from 'styled-components';
import { MdPerson } from 'react-icons/md';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { ReviewData } from '../data';
import { MediumScreen } from '../responsive';

const Container = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	overflow: hidden;
	height: 100%;
	margin: 0.8rem auto;
`;

const Heading = styled.h1`
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

const Arrow = styled.div`
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
	flex-direction: column;
	align-items: center;
	width: 100vw;
	height: 100%;
	background-color: #${(props) => props.bg};
`;

const InfoContainer = styled.div`
	flex: 1;
	color: #303030;
	font-family: 'Montserrat', sans-serif;
	width: 100vw;
	height: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0.5rem auto;
`;

const Title = styled.h4`
	color: #303030;
`;
const Description = styled.p`
	max-width: 60%;
`;

const Image = styled.img`
	height: 180px;
	width: 180px;
	border-radius: 50%;
	object-fit: cover;
`;

function Reviews() {
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
			<Heading> TESTIMONIALS </Heading>
			<Container>
				<Arrow direction={'left'} onClick={() => handleClick('left')}>
					<FaArrowLeft />
				</Arrow>
				<Wrapper slideIndex={slideIndex}>
					{ReviewData.map((item) => {
						return (
							<Slide>
								<Image src={item.img} />
								<InfoContainer>
									<Description>{item.review}</Description>
									<Title> {item.client}</Title>
								</InfoContainer>
							</Slide>
						);
					})}
				</Wrapper>
				<Arrow direction={'right'} onClick={() => handleClick('right')}>
					<FaArrowRight />
				</Arrow>
			</Container>
		</>
	);
}

export default Reviews;
