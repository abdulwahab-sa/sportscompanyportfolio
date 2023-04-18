import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	margin: 3rem auto;
	height: 100%;
	font-family: 'Montserrat', sans-serif;
`;

const Heading = styled.h2`
	margin: 2rem auto;
	font-size: 28px;
	color: teal;
	font-weight: 500;
	text-align: center;
`;

const BodyWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 5px 15px;
`;

const Wrapper = styled.div`
	padding: 5px 16px;
	border-bottom: 1px solid #d3d3d3;
	display: flex;
	flex-direction: column;
	margin: 8px;
	width: 400px;
`;

const Title = styled.h2`
	font-size: 14px;
	color: teal;
`;

const Message = styled.span`
	font-size: 16px;
	color: #303030;
`;

const OrderDetailWrapper = styled.div`
	padding: 5px 16px;
	border-bottom: 1px solid #d3d3d3;
	display: flex;
	flex-direction: column;
	margin: 8px;
	width: 80%;
`;

const ViewInquiry = () => {
	return (
		<Container>
			<Heading>Inquiry from Customer</Heading>
			<BodyWrapper>
				<Wrapper>
					<Title>Full Name</Title>
					<Message>Abdul Wahab</Message>
				</Wrapper>
				<Wrapper>
					<Title>Full Name</Title>
					<Message>Abdul Wahab</Message>
				</Wrapper>
				<Wrapper>
					<Title>Full Name</Title>
					<Message>Abdul Wahab</Message>
				</Wrapper>
				<Wrapper>
					<Title>Full Name</Title>
					<Message>Abdul Wahab</Message>
				</Wrapper>
				<Wrapper>
					<Title>Full Name</Title>
					<Message>Abdul Wahab</Message>
				</Wrapper>
				<OrderDetailWrapper>
					<Title>Full Name</Title>
					<Message>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, odio. Obcaecati, incidunt voluptatibus pariatur exercitationem
						nemo aperiam molestiae odit! Laudantium quis blanditiis numquam, excepturi exercitationem dolor aperiam labore! Vero sit ex
						tempore aliquid minima, veniam nisi molestiae tempora sunt esse ea officia architecto magni pariatur atque impedit, error
						suscipit ipsam quibusdam nesciunt mollitia quos! Obcaecati distinctio cum quia, ex saepe alias molestiae dicta blanditiis,
						quibusdam dignissimos ipsa? Voluptate, quae repellendus.
					</Message>
				</OrderDetailWrapper>
			</BodyWrapper>
		</Container>
	);
};

export default ViewInquiry;
