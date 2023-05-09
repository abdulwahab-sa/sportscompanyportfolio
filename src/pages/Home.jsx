import React from 'react';
import Categories from '../components/Categories';
import HomeExtras from '../components/HomeExtras';
import Newsletter from '../components/Newsletter';
import Reviews from '../components/Reviews';
import CustomOrderButton from '../components/CustomOrderButton';
import MobileHomeComp from '../components/MobileHomeComp';

function Home() {
	return (
		<>
			<MobileHomeComp />
			<HomeExtras />
			<Categories />
			<CustomOrderButton />
			<Reviews />
			<Newsletter />
		</>
	);
}

export default Home;
