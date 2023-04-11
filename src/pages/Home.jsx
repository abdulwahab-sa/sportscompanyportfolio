import React from 'react';
import Categories from '../components/Categories';
import HomeExtras from '../components/HomeExtras';
import Newsletter from '../components/Newsletter';
import PopularProducts from '../components/PopularProducts';
import Reviews from '../components/Reviews';
import CustomOrderButton from '../components/CustomOrderButton';
import MobileHomeComp from '../components/MobileHomeComp';
import { motion } from 'framer-motion';

function Home() {
	return (
		<>
			<MobileHomeComp />
			<HomeExtras />
			<Categories />
			<CustomOrderButton />
			<PopularProducts />
			<Reviews />
			<Newsletter />
		</>
	);
}

export default Home;
