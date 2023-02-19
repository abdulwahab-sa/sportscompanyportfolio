import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Customorder from './pages/Customorder';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import MainCategory from './pages/MainCategory';
import SubCategory from './components/SubCategory';
import Dashboard from './admin/Dashboard';
import Login from './admin/Login';
import { NewProduct } from './admin/NewProduct';
import { Thankyou } from './components/Thankyou';
import { UpdateProduct } from './admin/UpdateProduct';
import { ProductContext } from './context/ProductContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuthContext } from './hooks/useAuthContext';

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
		<BrowserRouter>
			<ProductContext.Provider value={{ data }}>
				<div id="container">
					<Menu />
					<div id="main-content">
						<Routes>
							<Route path="/admin" element={user ? <Dashboard /> : <Navigate to={'/login'} />} />
							<Route path="/login" element={!user ? <Login /> : <Navigate to={'/admin'} />} />
							<Route path="/addproduct" element={user ? <NewProduct /> : <Navigate to={'/login'} />} />
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
					<Footer />
				</div>
			</ProductContext.Provider>
		</BrowserRouter>
	);
}

export default App;
