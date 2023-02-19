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
	text-align: left;
	line-height: 2rem;
	font-size: 20px;
`;
const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 25px;
`;
const Button = styled.button`
	padding: 10px;
	margin-bottom: 50px;
	width: 100%;
	text-decoration: none;
	border: none;
	background-color: #fff;
	cursor: pointer;
	font-weight: 600;
	font-family: 'Montserrat', sans-serif;
	transition: 0.2s all ease-out;
	color: #303030;
	&:hover {
		//box-shadow: inset -10rem 0 0 0 #00413f, inset 10rem 0 0 0 #00413f;
		background-color: teal;
		color: #fff;
	}
`;

function CategoryItem({ item }) {
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: 'true',
	});
	return (
		<Wrapper ref={ref} inView={inView}>
			<div
				style={{
					position: 'absolute',
					boxShadow: 'inset 0 0 0 2000px rgba(105, 105, 105, 0.5)',
					height: '100%',
					width: '100%',
				}}
			></div>
			<Image src={item.img} />
			<Info>
				<Title>{item.name}</Title>
				<Link to={`${item.path}`}>
					<Button>Explore Now</Button>
				</Link>
			</Info>
		</Wrapper>
	);
}

export default CategoryItem;
