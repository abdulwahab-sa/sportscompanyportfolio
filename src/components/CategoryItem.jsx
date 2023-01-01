import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MediumScreen, mobile } from '../responsive';
import { useInView } from 'react-intersection-observer';

const Wrapper = styled.div`
	margin: 3px;
	height: 400px;
	width: 30%;
	position: relative;
	font-family: 'Montserrat', sans-serif;
	opacity: ${(props) => (props.inView ? 1 : 0)};
	transition: 0.6s all ease-out;
	${MediumScreen({ width: '90%' })}
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const Title = styled.h1`
	color: white;
	margin-bottom: 20px;
	text-align: center;
	line-height: 2rem;
`;
const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
		background-color: transparent;
		color: teal;
	}
`;

function CategoryItem({ item }) {
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: 'true',
	});
	return (
		<Wrapper ref={ref} inView={inView}>
			<Image src={item.img} />
			<Info>
				<Title>{item.name}</Title>
				<Link to={`${item.path}`}>
					<Button>Explore</Button>
				</Link>
			</Info>
		</Wrapper>
	);
}

export default CategoryItem;
