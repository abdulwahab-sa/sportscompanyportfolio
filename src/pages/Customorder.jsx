import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 100%;
	width: 100%;
	font-family: 'Montserrat', sans-serif;
`;

const Description = styled.div`
	height: 100%;
	width: 100%;
	background-color: teal;
	padding: 25px 80px;
	color: whitesmoke;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-wrap: wrap;
	text-align: center;
`;

const Heading = styled.h2`
	margin: 0.8rem 0 0.8rem;
	color: ${(props) => props.color};
	line-height: 32px;
`;
const Subheading = styled.h4`
	color: ${(props) => props.color};
`;
const Statement = styled.span``;

const Body = styled.div`
	height: 100%;
	width: 100%;
	background-color: #eff5f5;
	padding: 25px 80px;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 5px;
`;

const Right = styled.div`
	flex: 1;
	height: 100%;
`;

const Wrapper = styled.div`
	margin: 0.8rem;
`;

const Process = styled.div`
	margin: 0.8rem;
	color: #303030;
`;

const Form = styled.form`
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
const FormInputs = styled.div`
	width: 100%;
	height: 100%;
	margin: 0.5rem;
	text-align: center;
	flex-wrap: wrap;
`;
const FormStatement = styled.div`
	background-color: teal;
	padding: 20px;
	color: #303030;
	color: whitesmoke;
`;
const Input = styled.input`
	flex: 1;
	width: 40%;
	margin: 0.6rem;
	padding: 10px 8px;
	background-color: #d1d1d1;
	border: none;
	border-radius: 5px;
	font-family: 'Montserrat', sans-serif;
	color: #303030;
	&:focus {
		outline: none;
	}
`;
const Textarea = styled.textarea`
	width: 80%;
	margin: 0.6rem;
	padding: 10px 8px;
	background-color: #d1d1d1;
	border: none;
	border-radius: 5px;
	font-family: 'Montserrat', sans-serif;
	color: #303030;
	resize: none;
	&:focus {
		outline: none;
	}
`;

const AttachmentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #303030;
	width: 100%;
`;
const Label = styled.label`
	color: #303030;
	font-size: 0.8rem;
`;
const FileAttachment = styled.input`
	margin: 0.5rem auto;
	cursor: pointer;
	&::file-selector-button {
		padding: 0.5rem 0.6rem;
		color: whitesmoke;
		font-family: 'Montserrat', sans-serif;
	}
`;
const Button = styled.button`
	padding: 0.6rem 0.6rem;
	color: whitesmoke;
	font-family: 'Montserrat', sans-serif;
	margin: 0.6rem auto;
	background-color: teal;
	border: none;
	width: 100%;
	font-weight: 700;
	cursor: pointer;
`;
function Customorder() {
	return (
		<Container>
			<Description>
				<Heading> Custom Order</Heading>
				<Subheading> Looking for a manufacturer?</Subheading>
				<Subheading> You found Us.</Subheading>
			</Description>
			<Body>
				<Left>
					<Heading color={'teal'}>What will be your next step?</Heading>
					<Subheading color={'teal'}> You are one step closer to build your perfect product</Subheading>
					<Wrapper>
						<Process>
							<Subheading> 1. Fill the Form</Subheading>
							<Statement>Try to write as much detail as possible and submit this form with your requirements.</Statement>
						</Process>
						<Process>
							<Subheading> 2. Quote Preparation</Subheading>
							<Statement>Our team will prepare a quote based on your requirements.</Statement>
						</Process>
						<Process>
							<Subheading> 3. Discussion</Subheading>
							<Statement>Once the quote is ready, our team will reach out to discuss your order.</Statement>
						</Process>
						<Process>
							<Subheading> 4. Sample/Bulk Order</Subheading>
							<Statement>Last but not the least, we will process your order and ship it to your doorstep.</Statement>
						</Process>
					</Wrapper>
				</Left>
				<Right>
					<Form>
						<FormWrapper>
							<FormStatement>
								<Statement>Write us your requirements and we will prepare a proposal for you within 24 hours.</Statement>
							</FormStatement>
							<FormInputs>
								<Input type="text" placeholder="Your Name" />
								<Input type="text" placeholder="Your Email" />
								<Input type="text" placeholder="Your Phone" />
								<Input type="text" placeholder="Required Qty" />
							</FormInputs>
							<Textarea placeholder="Write your Order Details" rows="6" />
							<AttachmentWrapper>
								<Label>Upload your logo, techpacks etc.</Label>
								<FileAttachment type="file" multiple />
							</AttachmentWrapper>
							<Button>Get Quote</Button>
						</FormWrapper>
					</Form>
				</Right>
			</Body>
		</Container>
	);
}

export default Customorder;
