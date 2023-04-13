import './App.css';
import { BrowserRouter, Routes, Route, Navigate, RouterProvider } from 'react-router-dom';

import { ProductContext } from './context/ProductContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuthContext } from './hooks/useAuthContext';
import router from './Routes/Routes';

function App() {
	const [data, setData] = useState([]);

	const endPoint = 'https://tradecity.herokuapp.com/api/';
	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			const productData = await axios.get(endPoint);
			const result = productData.data;

			setData(result);
		} catch (error) {
			console.error(error);
		}
	};
	const { user } = useAuthContext();

	return (
		<ProductContext.Provider value={{ data }}>
			<RouterProvider router={router} />

			{/*
				<div id="container">
					<div id="main-content">
						<Routes>
							<Route path="/admin" element={user ? <Dashboard /> : <Navigate to={'/login'} />} />
							<Route path="/login" element={!user ? <Login /> : <Navigate to={'/admin'} />} />

							<Route path="/update/:id" element={user ? <UpdateProduct /> : <Navigate to={'/login'} />} />

							<Route path="/" exact element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/:category" element={<MainCategory />} />
							<Route path="/:category/:subcategory" element={<SubCategory />} />
							<Route path="/:category/:subcategory/:productId" exact element={<ProductDetail />} />
							<Route path="/customorder" element={<Customorder />} />
							<Route path="/thankyou" element={<Thankyou />} />
						</Routes>
					</div>
				</div>
*/}
		</ProductContext.Provider>
	);
}

export default App;
