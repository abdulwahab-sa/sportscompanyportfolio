import React, { useState } from 'react';
import styled from 'styled-components';
import { BigScreen } from '../responsive';

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
	height: 5rem;
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

const Form = styled.form`
	text-align: center;
	margin: 12px 0;
`;

const FormContainer = styled.div`
	margin: 1rem auto;
	height: 100%;
	width: 80%;
	${BigScreen({ width: '40%' })}
`;

const Input = styled.input`
	width: 100%;
	margin: 0 auto;
	padding: 10px 8px;
	background-color: #f0f0f0;
	border: none;
	border-radius: 5px;
	font-family: 'Montserrat', sans-serif;
	color: #303030;
	&:focus {
		outline: none;
	}
`;
const Label = styled.label`
	font-size: 0.8rem;
	font-weight: 500;
`;

const DetailInput = styled.textarea`
	background-color: #f0f0f0;
	border: none;
	width: 100%;
	padding: 10px 8px;
	color: #303030;
	font-family: 'Montserrat', sans-serif;
	&:focus {
		outline: none;
	}
`;

const InputItem = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5rem auto;
`;

const Button = styled.button`
	padding: 10px 8px;
	background-color: teal;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	font-weight: 500;
	font-family: 'Montserrat', sans-serif;
	transition: 0.2s all ease-out;
	margin-top: 10px;
	&:hover {
		background-color: #81cdc6;
		color: #fff;
	}
`;

const Errormessage = styled.span`
	color: red;
	font-size: 12px;
	display: block;
`;

const Successmessage = styled.span`
	color: green;
	font-size: 12px;
	display: block;
	margin-top: 8px;
`;

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = useState({
		name: '',
		message: '',
		email: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const validateForm = () => {
		let newErrors = {};
		if (!formData.name) {
			newErrors.name = 'Name is required';
		}
		if (!formData.message) {
			newErrors.message = 'Message is required';
		}
		if (!formData.email) {
			newErrors.email = 'Email is required';
		}
		setErrors(newErrors);
		return Object.values(newErrors).every((error) => error === '');
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		if (validateForm()) {
			const forminputs = new FormData();
			forminputs.append('name', formData.name);
			forminputs.append('email', formData.email);
			forminputs.append('message', formData.message);
			console.log(forminputs.get('name'));
		} else {
			setIsSubmitting(false);
		}
	};

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
				<Form onSubmit={handleSubmit}>
					<InputItem>
						<Input type="text" name="name" value={formData.name} placeholder="Your name" onChange={handleChange} />
						{errors.name && <Errormessage> Name is required</Errormessage>}
					</InputItem>
					<InputItem>
						<Input type="email" name="email" value={formData.email} placeholder="Your email" onChange={handleChange} />
						{errors.email && <Errormessage> Email is required</Errormessage>}
					</InputItem>
					<InputItem>
						<DetailInput type="text" name="message" value={formData.message} placeholder="Your message" onChange={handleChange} rows="8" />
						{errors.message && <Errormessage> Message is required</Errormessage>}
					</InputItem>
					<Button type="submit" disabled={isSubmitting}>
						SUBMIT
					</Button>
					{isSubmitting && <Successmessage>Your message has been sent! </Successmessage>}
				</Form>
			</FormContainer>
		</Container>
	);
}

export default Contact;
