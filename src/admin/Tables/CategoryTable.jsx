import './TableLayout.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import dummyImg from './../../images/casual.png';
import { useAPI } from '../../context/ProductContext';
import { Buffer } from 'buffer';

const dummyData = [
	{
		id: 1,
		mainCategory: 'Streetwear',
		subCategory: 'Hoodies',
		subCategoryImg: dummyImg,
	},
];

export default function CategoryTable() {
	const { categories, subcategories } = useAPI();

	const [data, setData] = useState(subcategories);

	useEffect(() => {
		setData(subcategories);
		console.log(subcategories);
	}, [subcategories]);

	const handleDelete = (id) => {
		axios
			.delete(`https://tradecity-api.onrender.com/api/subcategories/${id}`)
			.then((response) => {
				const newSubcategories = subcategories.filter((subcategory) => subcategory.subcategory_id !== id);
				setData(newSubcategories);
				alert('Subcategory and its products are deleted!');
				window.location.reload();
			})
			.catch((error) => {
				alert('Error Deleting SubCategory');
			});
	};

	const columns = [
		{ field: 'subcategory_id', headerName: 'ID', width: 60 },

		{
			field: 'subcategory_title',
			headerName: 'SubCategory',
			width: 200,
		},
		{
			field: 'category_title',
			headerName: 'Category',
			width: 200,
			renderCell: (params) => {
				const categoryTitle = categories.find(
					(category) => category.category_id === parseInt(params.row.category_category_id)
				)?.category_title;
				return <div>{categoryTitle}</div>;
			},
		},
		{
			field: 'subcategory_img',
			headerName: 'SubCategory Img',
			width: 150,
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img
							className="productListImg"
							src={`data:image/png;base64,${Buffer.from(params.row.subcategory_img.data).toString('base64')}`}
							alt=""
						/>
						{params.row.name}
					</div>
				);
			},
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={'/updatecategory/' + params.row.subcategory_id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.subcategory_id)} />
					</>
				);
			},
		},
	];

	return (
		<div className="productList">
			<DataGrid
				getRowId={(row) => row.subcategory_id}
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				checkboxSelection
			/>
		</div>
	);
}
