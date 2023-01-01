import React from 'react';
import { subCat } from '../data';
import styled from 'styled-components';
import Product from '../components/Product';

const Container = styled.div`
	color: #303030;
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	min-width: 30vw;
`;

const Title = styled.h2`
	width: 100vw;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: teal;
	color: whitesmoke;
	text-align: center;
	letter-spacing: 4px;
	margin: 2rem auto;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
`;

function Activewear() {
	return (
		<>
			<Title> ACTIVE WEARS</Title>
			<Container>
				{subCat.map((items) => {
					return <Product item={items} />;
				})}
			</Container>
		</>
	);
}

export default Activewear;
