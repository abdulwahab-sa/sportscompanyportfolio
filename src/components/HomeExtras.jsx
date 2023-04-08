import React from 'react';
import styled from 'styled-components';
import { FaTshirt, FaTruck, FaDollarSign, FaCertificate, FaHeadset } from 'react-icons/fa';
import { MediumScreen, mobile, BigScreen } from '../responsive';
import { useInView } from 'react-intersection-observer';
import Counter from './Counter';
import './HomeExtras.css';

const Container = styled.div`
	margin: 2rem auto;
	height: 100%;
	width: 100%;
	text-align: center;
	font-family: 'Montserrat', sans-serif;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 0 10px;
`;

const Title = styled.h2`
	color: #303030;
	font-family: 'Montserrat', sans-serif;
	text-align: center;
	margin: 2rem 0;
	font-size: 2.2rem;
	font-weight: 600;
	${mobile({ fontSize: '1.6rem' })};
	&::after {
		content: '';
		display: block;
		background-color: teal;
		width: 150px;
		height: 3px;
		margin: 1rem auto;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 12px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 6px;
	padding: 18px 14px;
	border-radius: 10px;
	max-width: 450px;
`;
const Icon = styled.div`
	font-size: 1.2rem;
	color: whitesmoke;
	background-color: teal;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Info = styled.span`
	margin: 8px 0;
	font-size: 1.3rem;
	color: #303030;
	font-weight: 500;
`;

const Statement = styled.p`
	color: #303030;
`;

const Countertest = styled.div`
	color: whitesmoke;
	font-size: 2rem;
	font-weight: 700;
`;

const AcheivementContainer = styled.div`
	background-color: teal;
	color: whitesmoke;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	font-family: 'Montserrat', sans-serif;
	padding: 20px 10px;
	${MediumScreen({ flexDirection: 'column', padding: '40px' })};
	${BigScreen({ height: '200px' })}
`;

const Heading = styled.h2``;
const AcheivementInfo = styled.span`
	font-size: 1.4rem;
	color: whitesmoke;
	font-weight: 600;
	margin-top: 1rem;
`;
const AcheivementWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-width: 20%;
	text-align: center;
	margin: 0 auto;
	${MediumScreen({ margin: '1.5rem' })};
`;

const data = [
	{
		id: 1,
		icon: FaTshirt,
		title: 'Custom Designs',
		statement:
			'We offer custom designs manufacturing. You can send us your own techpacks or contact with our design team to get your desired design created.',
	},
	{
		id: 2,
		icon: FaTruck,
		title: 'Fast Shipping',
		statement:
			'Depending on your location, we have wide range of shipping options, from air cargo to sea shipping. We also offer door delivery and express shipping.',
	},
	{
		id: 3,
		icon: FaDollarSign,
		title: 'Competitive Prices',
		statement:
			'Getting custom designs in low MOQ is much difficult as the prices in the market are high. We have catered the needs of brands by offering custom designs in competitive prices.',
	},
	{
		id: 4,
		icon: FaCertificate,
		title: 'Premium Quality',
		statement:
			'Our dedicated QC department enables us to control the quality of products at manufacturing and final stages. We proudly manufacture finest quality products using best raw materials.',
	},
];

const acheivements = [
	{
		id: 1,
		target: 250,
		title: 'Happy Clients',
	},
	{
		id: 2,
		target: 2000,
		title: 'Orders Completed',
	},
	{
		id: 3,
		target: 1000,
		title: 'Client Satisfaction',
	},
];

function HomeExtras() {
	return (
		<>
			<Title> WHY CHOOSE US</Title>
			<Container>
				{data.map((el) => {
					return (
						<Wrapper key={el.id}>
							<Icon>
								<el.icon />
							</Icon>
							<Info>{el.title}</Info>
							<Statement> {el.statement} </Statement>
						</Wrapper>
					);
				})}
			</Container>
			<Title>ACHEIVEMENTS</Title>

			<AcheivementContainer>
				{acheivements.map((el) => {
					return (
						<AcheivementWrapper key={el.id}>
							<Counter target={el.target} duration={1.5} />
							<AcheivementInfo>{el.title}</AcheivementInfo>
						</AcheivementWrapper>
					);
				})}
			</AcheivementContainer>
		</>
	);
}

export default HomeExtras;
