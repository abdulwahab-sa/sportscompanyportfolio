import React, { useState } from 'react';
import styled from 'styled-components';
import { BigScreen } from '../responsive';
import { useNavigate } from 'react-router-dom';

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
	padding: 25px 25px;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px;
	${BigScreen({ width: '50%' })}
`;

const Right = styled.div`
	height: 100%;
	${BigScreen({ width: '50%', maxWidth: '500px' })}
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
	flex-wrap: wrap;
`;
const FormStatement = styled.div`
	background-color: teal;
	padding: 20px;
	color: #303030;
	color: whitesmoke;
`;

const InputWrapper = styled.div`
	width: 90%;
	margin: 10px auto;
	text-align: center;
`;

const Input = styled.input`
	width: 100%;
	margin: 0 auto;
	padding: 10px 8px;
	background-color: #d1d1d1;
	border: none;
	border-radius: 5px;
	font-family: 'Montserrat', sans-serif;
	color: #303030;
	${BigScreen({ width: '80%' })}
	&:focus {
		outline: none;
	}
`;
const Textarea = styled.textarea`
	width: 100%;
	margin: 10px auto;
	padding: 10px 8px;
	background-color: #d1d1d1;
	border: none;
	border-radius: 5px;
	font-family: 'Montserrat', sans-serif;
	color: #303030;
	resize: none;
	${BigScreen({ width: '80%' })}
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

const Errormessage = styled.span`
	color: red;
	font-size: 12px;
	display: block;
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
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		quantity: '',
		orderDetails: '',
	});

	const [fileData, setfileData] = useState([]);

	const [errors, setErrors] = useState({
		name: '',
		phone: '',
		email: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleFileChange = (event) => {
		setfileData({
			...fileData,
			[event.target.name]: event.target.files[0],
		});
	};

	const validateForm = () => {
		let newErrors = {};
		if (!formData.name) {
			newErrors.name = 'Name is required';
		}
		if (!formData.phone) {
			newErrors.phone = 'Phone is required';
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
			forminputs.append('phone', formData.phone);
			forminputs.append('email', formData.email);
			forminputs.append('quantity', formData.quantity);
			forminputs.append('orderDetails', formData.orderDetails);
			forminputs.append('attachment', fileData.attachment);
			console.log(forminputs.get('attachment'));
			console.log(forminputs.get('name'));
			// API call
			//sendInquiry(forminputs)
			navigate('/thankyou');
		} else {
			setIsSubmitting(false);
		}
	};

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
					<Form onSubmit={handleSubmit}>
						<FormWrapper>
							<FormStatement>
								<Statement>Write us your requirements and we will prepare a proposal for you within 24 hours.</Statement>
							</FormStatement>
							<FormInputs>
								<InputWrapper>
									<Input type="text" name="name" value={formData.name} placeholder="Your Name" onChange={handleChange} />
									{errors.name && <Errormessage>{errors.name}</Errormessage>}
								</InputWrapper>
								<InputWrapper>
									<Input type="text" name="email" value={formData.email} placeholder="Your Email" onChange={handleChange} />
									{errors.email && <Errormessage>{errors.email}</Errormessage>}
								</InputWrapper>
								<InputWrapper>
									<Input type="text" name="phone" value={formData.phone} placeholder="Your Phone" onChange={handleChange} />
									{errors.phone && <Errormessage>{errors.phone}</Errormessage>}
								</InputWrapper>

								<InputWrapper>
									<Input type="text" name="quantity" value={formData.quantity} placeholder="Required Qty" onChange={handleChange} />
								</InputWrapper>
								<InputWrapper>
									<Textarea
										type="text"
										name="orderDetails"
										value={formData.orderDetails}
										placeholder="Write your Order Details"
										rows="6"
										onChange={handleChange}
									/>
								</InputWrapper>
							</FormInputs>

							<AttachmentWrapper>
								<Label>Upload your logo, techpacks etc.</Label>
								<FileAttachment name="attachment" value={formData.attachment} type="file" multiple onChange={handleFileChange} />
							</AttachmentWrapper>
							<Button type="submit" disabled={isSubmitting}>
								Get Quote
							</Button>
						</FormWrapper>
					</Form>
				</Right>
			</Body>
		</Container>
	);
}

export default Customorder;
