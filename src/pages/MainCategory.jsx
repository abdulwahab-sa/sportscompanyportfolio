import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { useAPI } from '../context/ProductContext';
import { Buffer } from 'buffer';

const Container = styled.div`
	color: #303030;
	padding: 40px 10px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
`;

const Title = styled.h2`
	width: 100%;
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
	letter-spacing: 10px;
`;

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Wrapper = styled.div`
	flex: 1;
	margin: 5px;
	width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 50%;
	z-index: 2;
	object-fit: cover;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
	color: #303030;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const CatTitle = styled.h2`
	color: whitesmoke;
	background-color: teal;
	opacity: 0.7;
	height: 2.8rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 4;
	position: absolute;
	bottom: 30%;
	letter-spacing: 1px;
	font-family: 'Montserrat', sans-serif;
	cursor: pointer;
`;

function MainCategory() {
	const { categories, subcategories } = useAPI();
	const { category } = useParams();

	// find the id of the main category based on its name
	const mainCategoryId = categories?.find((c) => c.category_title.toLowerCase() === category.toLowerCase())?.category_id;

	// filter the subcategories to get only the ones belonging to the main category
	const reqsubcategories = subcategories.filter((s) => s.category_category_id === mainCategoryId);

	return (
		<>
			<Title> {category.toUpperCase()} </Title>
			<Container>
				{reqsubcategories.map((items) => {
					return (
						<Link to={`/${category}/${items.subcategory_title}`}>
							<Wrapper key={items.subcategory_id}>
								<Image src={`data:image/png;base64,${Buffer.from(items.subcategory_img.data).toString('base64')}`} />
								<Info>
									<Icon>
										<FaSearch />
									</Icon>
								</Info>
								<CatTitle>{items.subcategory_title}</CatTitle>
							</Wrapper>
						</Link>
					);
				})}
			</Container>
		</>
	);
}

export default MainCategory;
