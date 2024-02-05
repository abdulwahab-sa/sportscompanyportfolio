import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAPI } from '../../context/ProductContext';

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
	const { categories, subcategories, products } = useAPI();
	const { id } = useParams();

	const endPoint = `https://tradecity-api.onrender.com/api/products/${id}`;

	useEffect(() => {
		const product = products.find((product) => product.product_id === parseInt(id));
		setFormInputs({
			product_title: product?.product_title,
			product_description: product?.product_description,
			product_article: product?.product_article,
			subcategory_subcategory_id: product?.subcategory_subcategory_id,
			category_category_id: product?.category_category_id,
		});

		setSelectedCategory(product?.category_category_id);
	}, [id, products]);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [formInputs, setFormInputs] = useState({
		product_title: '',
		product_description: '',
		product_article: '',
		subcategory_subcategory_id: '',
		category_category_id: '',
	});

	console.log(formInputs);

	const [fileData, setfileData] = useState([]);

	console.log(fileData);

	const [errors, setErrors] = useState({
		product_title: '',
		product_description: '',
		product_article: '',
		subcategory_subcategory_id: '',
		category_category_id: '',
		product_img: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState('');

	const handleChange = (event) => {
		setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
	};

	const handleOptionsChange = (e) => {
		if (e.target.name === 'category_category_id') {
			setSelectedCategory(e.target.value);
		}
		setFormInputs({ ...formInputs, [e.target.name]: parseInt(e.target.value) });
	};

	const handleFileChange = (event) => {
		setfileData({
			...fileData,
			[event.target.name]: event.target.files[0],
		});
	};

	const updateProduct = async (productData) => {
		try {
			const result = await axios.put(endPoint, productData);

			if (result) {
				setSubmitSuccess(!submitSuccess);
				setTimeout(() => {
					window.location.replace('/allproducts');
				}, 2000);
			} else {
				setSubmitError('Something went wrong, please try again');
			}
		} catch (err) {
			setSubmitError('Something went wrong, please try again');
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsSubmitting(true);

		const formData = new FormData();

		if (fileData.length !== 0) {
			const productimage = new Blob([fileData.product_img], { type: fileData.product_img.type });
			formData.append('product_img', productimage, fileData.product_img.name);
		}

		formData.append('product_title', formInputs.product_title);
		formData.append('category_category_id', formInputs.category_category_id);
		formData.append('subcatgory_subcategory_id', formInputs.subcategory_subcategory_id);
		formData.append('product_description', formInputs.product_description);
		formData.append('product_article', formInputs.product_article);

		await updateProduct(formData);

		setIsSubmitting(false);
	};

	return (
		<Container>
			<Title>Update Existing Product</Title>
			<Form onSubmit={handleSubmit}>
				<InputWrapper>
					<Input
						type="text"
						placeholder="Enter Product Title"
						name="product_title"
						value={formInputs.product_title}
						onChange={handleChange}
					/>
					{errors.product_title && <Errormessage> {errors.product_title} </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<Input
						type="text"
						placeholder="Enter Article Number"
						name="product_article"
						value={formInputs.product_article}
						onChange={handleChange}
					/>
					{errors.product_article && <Errormessage> {errors.product_article} </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<Select name="category_category_id" onChange={handleOptionsChange}>
						<option value="" hidden>
							{formInputs.category_category_id
								? categories.find((el) => el.category_id === formInputs.category_category_id)?.category_title
								: 'Choose Category'}
						</option>
						{categories.map((el) => {
							return (
								<option key={el.category_id} value={el.category_id}>
									{' '}
									{el.category_title}{' '}
								</option>
							);
						})}
					</Select>

					{errors.category_category_id && <Errormessage> {errors.category_category_id} </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<Select name="subcategory_subcategory_id" onChange={handleOptionsChange}>
						<option value="" hidden>
							{formInputs.subcategory_subcategory_id
								? subcategories?.find((el) => el.subcategory_id === formInputs.subcategory_subcategory_id)?.subcategory_title
								: 'Choose Subcategory'}
						</option>
						{selectedCategory &&
							subcategories
								?.filter((el) => el.category_category_id === parseInt(selectedCategory))
								.map((el) => {
									return (
										<option key={el.subcategory_id} value={el.subcategory_id}>
											{' '}
											{el?.subcategory_title}{' '}
										</option>
									);
								})}
						{selectedCategory && subcategories?.filter((el) => el.category_category_id === parseInt(selectedCategory)).length === 0 && (
							<option value="" disabled={true}>
								No subcategories found!
							</option>
						)}
					</Select>
					{errors.subcategory_subcategory_id && <Errormessage> {errors.subcategory_subcategory_id} </Errormessage>}
				</InputWrapper>

				<InputWrapper>
					<File type="file" id="files" name="product_img" onChange={handleFileChange} />
					{errors.product_img && <Errormessage> {errors.product_img} </Errormessage>}
				</InputWrapper>

				<DescriptionWrapper>
					<Description
						placeholder="Enter Description"
						rows={8}
						cols={24}
						name="product_description"
						value={formInputs.product_description}
						onChange={handleChange}
					/>
					{errors.product_description && <Errormessage> {errors.product_description} </Errormessage>}
				</DescriptionWrapper>

				<InputWrapper>
					<Button type="submit" disabled={isSubmitting}>
						Update Product
					</Button>
					{submitSuccess && <Successmessage> Product has been updated! </Successmessage>}
					{submitError && <Errormessage> {submitError} </Errormessage>}
				</InputWrapper>
			</Form>
		</Container>
	);
};
