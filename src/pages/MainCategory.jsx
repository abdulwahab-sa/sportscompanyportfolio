import React from 'react';
import { subCat, allProducts, finalData } from '../data';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
	color: #303030;
	padding: 10px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
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
	min-width: 280px;
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

function getUniqueListBy(arr, key) {
	return [...new Map(arr.map((item) => [item[key], item])).values()];
}

function MainCategory() {
	const location = useLocation();
	const currentCategory = location.pathname.slice(1).toUpperCase();
	const allSubCategories = finalData.filter((el) => el.mainCategory == currentCategory);
	const requiredResult = getUniqueListBy(allSubCategories, 'subCategory');
	const right = currentCategory.substring(currentCategory.length - 4, currentCategory.length);
	const left = currentCategory.substring(0, currentCategory.length - 4);

	return (
		<>
			<Title> {`${left} ${right}`} </Title>
			<Container>
				{requiredResult.map((items) => {
					return (
						<>
							<Link to={`/${currentCategory}/${items.subCategory}`}>
								<Wrapper key={items.id}>
									<Image src={items.subCategoryImg} />
									<Info>
										<Icon>
											<FaSearch />
										</Icon>
									</Info>
									<CatTitle>{items.subCategory}</CatTitle>
								</Wrapper>
							</Link>
						</>
					);
				})}
			</Container>
		</>
	);
}

export default MainCategory;
