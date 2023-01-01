import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	color: #303030;
	font-family: 'Montserrat', sans-serif;
`;

const Statement = styled.p`
	font-size: 1.6rem;
	font-family: 500;
	width: 50vw;
	line-height: 2.2rem;
	margin: 0 auto;
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
	margin: 1rem auto;
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
`;
const ContactContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-evenly;
	margin: 2.5rem auto;
`;
const Info = styled.div`
	display: flex;
	width: 260px;
	height: 100px;
	margin: 1.5rem;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-bottom: 0.5px solid teal;
`;
const InfoTitle = styled.h3``;
const InfoDetail = styled.span``;

const FormContainer = styled.div`
	width: 50%;
	margin: 1rem auto;
`;

const Input = styled.input`
	background-color: white;
	height: 40px;
	width: 100%;
	border: 2px solid teal;
	color: teal;
	text-indent: 5px;
	font-family: 'Montserrat', sans-serif;
`;
const Label = styled.label`
	font-size: 1rem;
	font-weight: 500;
`;

const DetailInput = styled.input`
	background-color: white;
	height: 100px;
	width: 100%;
	border: 2px solid teal;
	color: teal;
	text-indent: 5px;
	font-family: 'Montserrat', sans-serif;
`;

const InputItem = styled.div`
	display: flex;
	flex-direction: column;
`;

const Button = styled.button`
	padding: 10px;
	border: 2px solid teal;
	background-color: teal;
	cursor: pointer;
	font-weight: 600;
	font-family: 'Montserrat', sans-serif;
	transition: 0.2s all ease-out;
	margin: 1.5rem auto;
	&:hover {
		background-color: #f8f4f4;
		color: teal;
	}
`;

function Contact() {
	return (
		<Container>
			<Title>CONTACT INFORMATION</Title>
			<Statement>Contact Us Directly For More Information Or Leave A Message Below And We'll Get Back To You ASAP!</Statement>
			<ContactContainer>
				<Info>
					<InfoTitle>EMAIL</InfoTitle>
					<InfoDetail>info@tradecitycorp.com</InfoDetail>
					<InfoDetail>tradecitycorp@gmail.com</InfoDetail>
				</Info>
				<Info>
					<InfoTitle>PHONE</InfoTitle>
					<InfoDetail>+92 300 5025290</InfoDetail>
				</Info>
				<Info>
					<InfoTitle>OPENING HOURS</InfoTitle>
					<InfoDetail>Monday - Thursday: 10am - 6pm</InfoDetail>
					<InfoDetail>Friday: 10am - 3pm</InfoDetail>
				</Info>
				<Info>
					<InfoTitle>Address</InfoTitle>
					<InfoDetail>Bismillah Chowk, Pasrur Road</InfoDetail>
					<InfoDetail>Sialkot - 51310, Pakistan</InfoDetail>
				</Info>
			</ContactContainer>
			<FormContainer>
				<InputItem>
					<Label>Your Name</Label>
					<Input />
				</InputItem>
				<InputItem>
					<Label>Your Email</Label>
					<Input />
				</InputItem>
				<InputItem>
					<Label>Your Message</Label>
					<DetailInput />
				</InputItem>
				<Button>SUBMIT</Button>
			</FormContainer>
		</Container>
	);
}

export default Contact;
