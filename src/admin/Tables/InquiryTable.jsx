import './TableLayout.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const dummyData = [
	{
		id: 1,
		name: 'John Doe',
		email: 'test@gmail.com',
		phone: '123456789',
		requiredQty: '500',
		orderDetail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eveniet.',
	},
];

export default function InquiryTable() {
	const [data, setData] = useState(dummyData);
	/*
	const endPoint = 'https://tradecity.herokuapp.com/api/';

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

		{ field: 'name', headerName: 'Client Name', width: 150 },
		{ field: 'email', headerName: 'Email', width: 150 },
		{
			field: 'phone',
			headerName: 'Contact',
			width: 150,
		},

		{
			field: 'requiredQty',
			headerName: 'Required Qty',
			width: 120,
		},
		{
			field: 'orderDetail',
			headerName: 'Order Details',
			width: 200,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={'/update/' + params.row.id}>
							<button className="productListEdit">View</button>
						</Link>
						<DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
					</>
				);
			},
		},
	];

	return (
		<div className="productList">
			<DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection sx={{ overflowX: 'scroll' }} />
		</div>
	);
}
