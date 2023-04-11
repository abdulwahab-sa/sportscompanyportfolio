import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { productsDropdown } from '../data';

const SubmenuWrapper = styled.div`
	font-size: 0.8rem;
	background-color: white;
	align-items: center;
	text-align: center;
	width: 10rem;
	position: absolute;
	top: 5.4rem;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	z-index: 999999999;
`;

const SubmenuItem = styled.a`
	color: black;
	text-decoration: none;
	width: 10rem;
	display: ${(props) => props.display};
	padding: 4px 6px;
	font-size: 0.8rem;
	font-weight: 600;
	color: #303030;
	font-family: 'Montserrat', sans-serif;
	cursor: pointer;
	transition: 0.1s ease-in;

	&:hover {
		background-color: teal;
		color: #fff;
	}
`;

function Submenu() {
	const [dropDown, setdropDown] = useState(false);

	return (
		<SubmenuWrapper onClick={() => setdropDown(!dropDown)}>
			{productsDropdown.map((item) => (
				<Link to={item.path} style={{ textDecoration: 'none' }}>
					<SubmenuItem key={item.id} display={dropDown ? 'none' : 'flex'} onClick={() => setdropDown(!dropDown)}>
						{item.name}
					</SubmenuItem>
				</Link>
			))}
		</SubmenuWrapper>
	);
}

export default Submenu;
