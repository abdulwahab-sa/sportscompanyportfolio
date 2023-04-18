import './TableLayout.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import dummyImg from './../../images/casual.png';

const dummyData = [
	{
		id: 1,
		mainCategory: 'Streetwear',
		subCategory: 'Hoodies',
		subCategoryImg: dummyImg,
	},
];

export default function CategoryTable() {
	const [data, setData] = useState(dummyData);
	const endPoint = 'https://tradecity.herokuapp.com/api/';

	/*
	const fetchproducts = async () => {
		axios
			.get(endPoint)
			.then((response) => {
				const productData = response.data;
				setData(productData);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		fetchproducts();
	}, []);
*/
	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
		axios
			.delete(`${endPoint}${id}`)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 60 },

		{ field: 'mainCategory', headerName: 'Main Category', width: 150 },
		{
			field: 'subCategory',
			headerName: 'SubCategory',
			width: 200,
		},
		{
			field: 'subCategoryImg',
			headerName: 'SubCategory Img',
			width: 100,
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img className="productListImg" src={params.row.subCategoryImg} alt="" />
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
						<Link to={'/update/' + params.row.id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
					</>
				);
			},
		},
	];

	return (
		<div className="productList">
			<DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
		</div>
	);
}
