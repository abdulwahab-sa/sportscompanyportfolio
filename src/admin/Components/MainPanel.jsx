import React from 'react';
import styled from 'styled-components';
import adminPanelImg from './../../images/Admin-Control-Panel.svg';
import clothingIcon from './../../images/clothing-icon.png';
import messageIcon from './../../images/message-icon.png';

const Container = styled.div`
	width: 100%;
	height: 100%;
	font-family: 'Montserrat', sans-serif;
	color: #303030;
	padding: 14px;
`;

const WelcomeWrapper = styled.div`
	background-color: #b9eddd;
	padding: 15px;
	border-radius: 8px;
	display: flex;
	width: 650px;
	justify-content: space-around;
	align-items: center;
	margin: 0 auto;
	color: teal;
`;

const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 28px;
`;

const ItemWrapper = styled.div`
	background-color: #b9eddd;
	padding: 15px;
	border-radius: 8px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 20px;
	color: teal;
	width: 250px;
`;

const Wrapper = styled.div`
	line-height: 32px;
`;

const Heading = styled.h2`
	font-size: 26px;
	margin-bottom: 8px;
`;

const Span = styled.span``;

const Img = styled.img`
	width: 200px;
`;

const IconImg = styled.img`
	width: 60px;
`;
const data = [
	{
		id: 1,
		img: clothingIcon,
		title: 'Total Products',
		num: '80',
	},
	{
		id: 2,
		img: messageIcon,
		title: 'Total Inquiries',
		num: '10',
	},
];

const MainPanel = () => {
	return (
		<Container>
			<WelcomeWrapper>
				<Wrapper>
					<Heading>
						Welcome! <br /> Trade City Dashboard
					</Heading>
					<Span> Today is 12/04/2023, Tuesday </Span>
				</Wrapper>
				<Img src={adminPanelImg} />
			</WelcomeWrapper>
			<ContentWrapper>
				{data.map((el) => {
					return (
						<ItemWrapper key={el.id}>
							<IconImg src={el.img} />
							<Wrapper>
								<Span>{el.title}</Span>
								<Heading> {el.num} </Heading>
							</Wrapper>
						</ItemWrapper>
					);
				})}
			</ContentWrapper>
		</Container>
	);
};

export default MainPanel;
