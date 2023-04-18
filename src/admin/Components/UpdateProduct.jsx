import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
`;
const Title = styled.h2`
	margin: 2rem auto;
	font-size: 28px;
	color: teal;
	font-weight: 500;
	text-align: center;
`;

const Form = styled.form`
	height: 100%;
	margin: 2rem auto;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
`;

const InputWrapper = styled.div`
	width: 400px;
	margin: 12px;
	text-align: center;
	color: #303030;
`;

const DescriptionWrapper = styled.div`
	width: 700px;
	margin: 12px;
`;

const Label = styled.label`
	color: #303030;
	margin-top: 10px;
`;
const Input = styled.input`
	//border: 0.5px solid #303030;
	padding: 14px 8px;
	border: 1px solid #d3d3d3;
	color: #303030;
	font-family: 'Montserrat', sans-serif;
	width: 100%;
	border-radius: 8px;
`;

const Select = styled.select`
	padding: 14px 8px;
	color: #303030;
	border: 1px solid #d3d3d3;
	font-family: 'Montserrat', sans-serif;
	width: 100%;
	border-radius: 8px;

	option {
		background: #fff;
	}
`;

const File = styled.input`
	margin: 12px 0;
`;

const Description = styled.textarea`
	padding: 8px;
	color: #303030;
	border: 1px solid #d3d3d3;
	font-family: 'Montserrat', sans-serif;
	width: 100%;
	border-radius: 8px;
`;
const Button = styled.button`
	border: none;
	padding: 12px 28px;
	color: #fff;
	font-size: 14px;
	font-weight: 600;
	background-color: orange;
	border-radius: 8px;
	margin: 6px 0;
	cursor: pointer;
`;

const Successmessage = styled.span`
	color: green;
	font-size: 12px;
	display: block;
	margin-top: 5px;
`;

const Errormessage = styled.span`
	color: red;
	font-size: 12px;
	display: block;
`;

export const UpdateProduct = () => {
	const { id } = useParams();

	const endPoint = `https://tradecity.herokuapp.com/api/${id}`;

	const [formInputs, setFormInputs] = useState({
		productName: '',
		article: '',
		mainCategory: '',
		subCategory: '',
		productDescription: '',
		//subCategoryImg: '',
		//productImg: '',
	});

	const [fileData, setfileData] = useState([]);

	const [errors, setErrors] = useState({
		productName: '',
		article: '',
		mainCategory: '',
		subCategory: '',
		productDescription: '',
		productImg: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleChange = (event) => {
		setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
	};

	const handleFileChange = (event) => {
		setfileData({
			...fileData,
			[event.target.name]: event.target.files[0],
		});
	};

	const validateForm = () => {
		let newErrors = {};
		if (!formInputs.productName) {
			newErrors.productName = 'Title is required';
		}
		if (!formInputs.article) {
			newErrors.article = 'Article is required';
		}
		if (!formInputs.mainCategory) {
			newErrors.mainCategory = 'Category is required';
		}
		if (!formInputs.subCategory) {
			newErrors.subCategory = 'Subcategory is required';
		}
		if (!formInputs.productDescription) {
			newErrors.productDescription = 'Description is required';
		}
		if (!fileData.productImg) {
			newErrors.productImg = 'Product Image is required';
		}

		setErrors(newErrors);
		return Object.values(newErrors).every((error) => error === '');
	};

	const createProduct = async (productData) => {
		try {
			const result = await axios.put(endPoint, productData);
			console.log(result);
		} catch (err) {
			console.error(err);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		if (validateForm()) {
			const formData = new FormData();

			const productimage = new Blob([fileData.productImg], { type: fileData.productImg.type });

			formData.append('productImg', productimage, fileData.productImg.name);
			formData.append('productName', formInputs.productName);
			formData.append('mainCategory', formInputs.mainCategory);
			formData.append('subCategory', formInputs.subCategory);
			formData.append('productDescription', formInputs.productDescription);
			formData.append('article', formInputs.article);

			createProduct(formData);

			setFormInputs({
				productName: '',
				article: '',
				mainCategory: '',
				subCategory: '',
				productDescription: '',
			});

			setfileData([]);
			// API call
		} else {
			setIsSubmitting(false);
		}
	};

	return (
		<Container>
			<Title>Update Existing Product</Title>
			<Form onSubmit={handleSubmit}>
				<InputWrapper>
					<Input type="text" placeholder="Enter Product Title" name="productName" value={formInputs.productName} onChange={handleChange} />
					{errors.productName && <Errormessage> Title is required </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<Input type="text" placeholder="Enter Article Number" name="article" value={formInputs.article} onChange={handleChange} />
					{errors.article && <Errormessage> Article is required </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<Select>
						<option value="" hidden>
							Choose Category
						</option>
						<option value={formInputs.mainCategory}> Casualwear </option>
						<option value={formInputs.mainCategory}> Fitnesswear </option>
						<option value={formInputs.mainCategory}> Leatherwear </option>
					</Select>

					{/* 	<Input type="text" placeholder="Enter Category" name="mainCategory" value={formInputs.mainCategory} onChange={handleChange} />
					
					*/}
					{errors.mainCategory && <Errormessage> Category is required </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<Select>
						<option value="" hidden>
							Choose Subcategory
						</option>
						<option value={formInputs.subCategory}> Casualwear </option>
						<option value={formInputs.subCategory}> Fitnesswear </option>
						<option value={formInputs.subCategory}> Leatherwear </option>
					</Select>
					{errors.subCategory && <Errormessage> Subcategory is required </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<File type="file" id="files" name="productImg" onChange={handleFileChange} />
					{errors.productImg && <Errormessage> Product Image is required </Errormessage>}
				</InputWrapper>

				<DescriptionWrapper>
					<Description
						placeholder="Enter Description"
						rows={8}
						cols={24}
						name="productDescription"
						value={formInputs.productDescription}
						onChange={handleChange}
					/>
					{errors.productDescription && <Errormessage> Description is required </Errormessage>}
				</DescriptionWrapper>

				<InputWrapper>
					<Button type="submit" disabled={isSubmitting}>
						Update Product
					</Button>
					{submitSuccess && <Successmessage> Product has been updated! </Successmessage>}
				</InputWrapper>
			</Form>
		</Container>
	);
};
