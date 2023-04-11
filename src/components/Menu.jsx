import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navigation, productsDropdown } from '../data';
import Submenu from './Submenu';
import * as Icons from 'react-icons/fa';
import Logosrc from './../images/logo.png';

const MenuWrapper = styled.div`
	width: 100%;
	height: 6rem;
	margin: 1.5rem auto;
	display: flex;
	font-size: 0.8rem;
	font-weight: 600;
	color: #303030;
	font-family: 'Montserrat', sans-serif;
	justify-content: space-between;
`;

const Left = styled.div`
	display: flex;
	width: 35%;
	justify-content: space-evenly;
	align-content: center;
	align-items: center;
`;
const Centre = styled.div`
	width: 30%;
	text-align: center;
`;

const Right = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 35%;
	align-items: center;
`;
const Logo = styled.img`
	height: 90px;
	width: 100px;
`;
const MenuItems = styled.a`
	text-decoration: none;
	color: #303030;
	list-style: none;
	display: flex;
	align-items: center;
	height: 2rem;
	&:hover {
		color: teal;
	}
`;

const MobileMenuToggle = styled.div`
	text-align: center;
	font-size: 2rem;
	height: 80px;
	width: 80px;
	display: flex;
	align-items: center;
`;

const MobileMenu = styled.div`
	width: 70vw;
	height: 100vh;
	z-index: 12222;
	background-color: white;
	font-size: 1.2rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	position: absolute;
	top: 8.9rem;
	overflow: hidden;
	left: ${(props) => props.left};
	transition: 0.3s all ease-in-out;
	display: flex;
	flex-direction: column;
`;
const MobileMenuItems = styled.a`
	text-decoration: none;
	width: 100%;
	padding: 0 0 0 8px;
	display: flex;
	color: #303030;
	align-items: flex-start;
	height: 3rem;
	border-bottom: 0.5px solid lightgray;
	margin-top: 1rem;
	&:hover {
		color: teal;
	}
`;
const MobileMenuDropItems = styled.a`
	height: 3rem;
	padding: 1px 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #303030;
	align-content: center;
	margin-top: 1rem;
	border-bottom: 0.5px solid lightgray;
	&:hover {
		color: teal;
	}
`;

function Menu() {
	const slicedListOne = navigation.slice(0, 3);
	const slicedListTwo = navigation.slice(3, 6);

	const [dropDown, setdropDown] = useState(false);
	const [responsive, setResponsive] = useState(false);
	const [sideMenu, setSideMenu] = useState(false);
	const [sideMenuDrop, setSideMenuDrop] = useState(false);

	const handleMobileMenuDrop = (event, item) => {
		item = !'PRODUCTS' && setSideMenu(false);
		setSideMenuDrop(true);
		(event) => event.preventDefault();
	};

	useEffect(() => {
		const handleResize = () => {
			window.innerWidth < 950 ? setResponsive(true) : setResponsive(false);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [responsive]);

	useEffect(() => {
		if (window.innerWidth < 950) {
			setResponsive(true);
		}
	}, []);

	return (
		<>
			<MenuWrapper>
				{!responsive && (
					<Left>
						{slicedListOne.map((items) => {
							if (items.name === 'PRODUCTS') {
								return (
									<>
										<Link to={items.path} style={{ textDecoration: 'none' }}>
											<MenuItems key={items.id} onMouseEnter={() => setdropDown(true)} onMouseLeave={() => setdropDown(false)}>
												{items.name}
												{dropDown && <Submenu />}
											</MenuItems>
										</Link>
									</>
								);
							}

							return (
								<Link to={items.path} style={{ textDecoration: 'none' }}>
									<MenuItems key={items.id}>{items.name}</MenuItems>
								</Link>
							);
						})}
					</Left>
				)}

				<Centre>
					<Link to={'/'} style={{ textDecoration: 'none' }}>
						<Logo src={Logosrc} />
					</Link>
				</Centre>

				{responsive && (
					<MobileMenuToggle>
						{sideMenu ? <Icons.FaTimes onClick={() => setSideMenu(!sideMenu)} /> : <Icons.FaBars onClick={() => setSideMenu(!sideMenu)} />}
					</MobileMenuToggle>
				)}

				{!responsive && (
					<Right>
						{slicedListTwo.map((items) => (
							<Link to={items.path} style={{ textDecoration: 'none' }}>
								<MenuItems key={items.id}>{items.name}</MenuItems>
							</Link>
						))}
					</Right>
				)}
			</MenuWrapper>

			<MobileMenu left={sideMenu ? '0' : '-100%'}>
				{navigation.map((item) => {
					if (item.name === 'PRODUCTS') {
						return (
							<>
								<Link to={item.path} style={{ textDecoration: 'none' }} onClick={() => handleMobileMenuDrop(item.name)}>
									<MobileMenuItems key={item.id}>{item.name}</MobileMenuItems>
								</Link>

								{sideMenuDrop &&
									productsDropdown.map((items) => (
										<Link to={items.path} style={{ textDecoration: 'none' }} onClick={() => setSideMenu(false)}>
											<MobileMenuDropItems key={items.id}>{items.name}</MobileMenuDropItems>
										</Link>
									))}
							</>
						);
					}

					return (
						<Link to={item.path} style={{ textDecoration: 'none' }} onClick={() => setSideMenu(false)}>
							<MobileMenuItems key={item.id}>{item.name}</MobileMenuItems>
						</Link>
					);
				})}
			</MobileMenu>
		</>
	);
}

export default Menu;
