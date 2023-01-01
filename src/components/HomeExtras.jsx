import React from 'react';
import styled from 'styled-components';
import { FaTshirt, FaTruck, FaDollarSign, FaCertificate, FaHeadset } from 'react-icons/fa';
import { MediumScreen, mobile } from '../responsive';
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
	flex-wrap: wrap;
	padding: 0 10px;
	transition: 0.5s all ease-out;
	transform: ${(props) => (props.inView ? '' : 'translateX(-100%)')};
`;

const Title = styled.h2`
	color: #303030;
	font-family: 'Montserrat', sans-serif;
	text-align: center;
	margin: 2rem auto;
	font-size: 2.5rem;
	${mobile({ fontSize: '1.8rem' })};
	&::after {
		content: '';
		display: block;
		background-color: teal;
		width: 150px;
		height: 5px;
		margin: 1rem auto;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 12rem;
	min-width: 30%;
	margin: 0.2rem auto;
`;
const Icon = styled.div`
	font-size: 2.2rem;
	color: whitesmoke;
	background-color: teal;
	height: 75px;
	width: 75px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Info = styled.span`
	margin-top: 1.2rem;
	font-size: 1.4rem;
	color: #303030;
	font-weight: 600;
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
	${MediumScreen({ flexDirection: 'column', padding: '15px' })};
`;

const Heading = styled.h2``;
const AcheivementInfo = styled.span`
	font-size: 1rem;
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
	${MediumScreen({ marginTop: '1.5rem' })};
`;

function HomeExtras() {
	const { ref, inView } = useInView({
		triggerOnce: 'true',
	});
	return (
		<>
			<Title> WHY CHOOSE US</Title>
			<Container ref={ref} inView={inView}>
				<Wrapper>
					<Icon>
						<FaTshirt />
					</Icon>
					<Info>CUSTOM DESIGNS</Info>
				</Wrapper>
				<Wrapper>
					<Icon>
						<FaTruck />
					</Icon>
					<Info>FAST SHIPPING</Info>
				</Wrapper>
				<Wrapper>
					<Icon>
						<FaDollarSign />
					</Icon>
					<Info>COMPETITIVE PRICES</Info>
				</Wrapper>
				<Wrapper>
					<Icon>30</Icon>
					<Info>LOW MOQ</Info>
				</Wrapper>
				<Wrapper>
					<Icon>
						<FaCertificate />
					</Icon>
					<Info>PREMIUM QUALITY</Info>
				</Wrapper>
				<Wrapper>
					<Icon>
						<FaHeadset />
					</Icon>
					<Info>CUSTOMER SERVICE</Info>
				</Wrapper>
			</Container>
			<Title>ACHEIVEMENTS</Title>

			<AcheivementContainer>
				<AcheivementWrapper>
					<Counter target={250} duration={1.5} />
					<AcheivementInfo>HAPPY CLIENTS</AcheivementInfo>
				</AcheivementWrapper>
				<AcheivementWrapper>
					<Counter target={2000} duration={1.5} />
					<AcheivementInfo>ORDERS COMPLETED</AcheivementInfo>
				</AcheivementWrapper>
				<AcheivementWrapper>
					<Counter target={1000} duration={1.5} />
					<AcheivementInfo>CLIENT SATISFACTION</AcheivementInfo>
				</AcheivementWrapper>
			</AcheivementContainer>
		</>
	);
}

export default HomeExtras;
