import './App.css';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/home';
import About from './pages/About';
import Customorder from './pages/Customorder';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import MainCategory from './pages/MainCategory';
import SubCategory from './components/SubCategory';

function App() {
	return (
		<BrowserRouter>
			<div id="container">
				<Menu />
				<div id="main-content">
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/casualwear" element={<MainCategory />} />
						<Route path="/casualwear/:category" element={<SubCategory />} />
						<Route path="/casualwear/:category/:productId" exact element={<ProductDetail />} />
						<Route path="/activewear" element={<MainCategory />} />
						<Route path="/activewear/:category" element={<SubCategory />} />
						<Route path="/activewear/:category/:productId" exact element={<ProductDetail />} />
						<Route path="/leatherwear" element={<MainCategory />} />
						<Route path="/leatherwear/:category" element={<SubCategory />} />
						<Route path="/leatherwear/:category/:productId" exact element={<ProductDetail />} />
						<Route path="/customorder" element={<Customorder />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
