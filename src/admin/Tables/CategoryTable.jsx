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
		{ field: 'subcategory_id', headerName: 'ID', width: 60 },

		{
			field: 'subcategory_title',
			headerName: 'SubCategory',
			width: 200,
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
						<DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
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
