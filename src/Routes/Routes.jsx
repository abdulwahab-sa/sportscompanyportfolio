import { lazy } from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, Navigate } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import About from './../pages/About';
import CustomOrder from './../pages/Customorder';
import Contact from './../pages/Contact';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../admin/Dashboard';
import AllCategories from '../admin/Components/AllCategories';
import AllProducts from '../admin/Components/Products';
import Inquiries from '../admin/Components/Inquiry';
import ViewInquiry from '../admin/Components/ViewInquiry';
import { UpdateProduct } from '../admin/Components/UpdateProduct';
import { NewProduct } from '../admin/Components/NewProduct';
import { NewCategory } from '../admin/Components/NewCategory';
import { UpdateCategory } from '../admin/Components/UpdateCategory';
import Login from '../admin/Components/Login';
import '../index.css';

const Home = lazy(() => import('./../pages/Home'));
const MainCategory = lazy(() => import('./../pages/MainCategory'));
const Subcategory = lazy(() => import('./../components/SubCategory'));
const ProductDetail = lazy(() => import('./../components/ProductDetail'));

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />

				<Route path="about" element={<About />} />
				<Route path="customorder" element={<CustomOrder />} />
				<Route path="contact" element={<Contact />} />
				<Route path=":category" element={<MainCategory />} />
				<Route path=":category/:subcategory" element={<Subcategory />} />
				<Route path=":category/:subcategory/:productId" exact element={<ProductDetail />} />
			</Route>

			<Route path="/" element={<AdminLayout />}>
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="allcategories" element={<AllCategories />} />
				<Route path="createcategory" element={<NewCategory />} />
				<Route path="updatecategory/:id" element={<UpdateCategory />} />
				<Route path="allproducts" element={<AllProducts />} />
				<Route path="createproduct" element={<NewProduct />} />
				<Route path="updateproduct/:id" element={<UpdateProduct />} />
				<Route path="inquiries" element={<Inquiries />} />
				<Route path="viewinquiry" element={<ViewInquiry />} />
			</Route>
			<Route path="/login" element={<Login />} />
		</>
	)
);

export default router;
