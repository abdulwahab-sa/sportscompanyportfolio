import { lazy } from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, Navigate, redirect } from 'react-router-dom';
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
import { useAuthContext } from '../hooks/useAuthContext';
//import { user } from '../context/AuthContext';
const Home = lazy(() => import('./../pages/Home'));
const MainCategory = lazy(() => import('./../pages/MainCategory'));
const Subcategory = lazy(() => import('./../components/SubCategory'));
const ProductDetail = lazy(() => import('./../components/ProductDetail'));
const user = JSON.parse(localStorage.getItem('user'));

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
				<Route
					path="dashboard"
					element={<Dashboard />}
					loader={async () => {
						if (user) {
							return <Dashboard />;
						} else {
							throw redirect('/login');
						}
					}}
				/>
				<Route
					path="allcategories"
					element={<AllCategories />}
					loader={async () => {
						if (user) {
							return <AllCategories />;
						} else {
							throw redirect('/login');
						}
					}}
				/>
				<Route
					path="createcategory"
					element={<NewCategory />}
					loader={async () => {
						if (user) {
							return <NewCategory />;
						} else {
							throw redirect('/login');
						}
					}}
				/>
				<Route
					path="updatecategory/:id"
					element={<UpdateCategory />}
					loader={async () => {
						if (user) {
							return <UpdateCategory />;
						} else {
							throw redirect('/login');
						}
					}}
				/>
				<Route
					path="allproducts"
					element={<AllProducts />}
					loader={async () => {
						if (user) {
							return <AllProducts />;
						} else {
							throw redirect('/login');
						}
					}}
				/>
				<Route
					path="createproduct"
					element={<NewProduct />}
					loader={async () => {
						if (user) {
							return <NewProduct />;
						} else {
							throw redirect('/login');
						}
					}}
				/>
				<Route
					path="updateproduct/:id"
					element={<UpdateProduct />}
					loader={async () => {
						if (user) {
							return <UpdateProduct />;
						} else {
							throw redirect('/login');
						}
					}}
				/>
				<Route
					path="inquiries"
					element={<Inquiries />}
					loader={async () => {
						if (user) {
							return <Inquiries />;
						} else {
							throw redirect('/login');
						}
					}}
				/>
				<Route
					path="viewinquiry/:inquiryId"
					element={<ViewInquiry />}
					loader={async () => {
						if (user) {
							return <ViewInquiry />;
						} else {
							throw redirect('/login');
						}
					}}
				/>
			</Route>
			<Route
				path="/login"
				element={<Login />}
				loader={async () => {
					if (user) {
						throw redirect('/dashboard');
					} else {
						return <Login />;
					}
				}}
			/>
		</>
	)
);

export default router;
