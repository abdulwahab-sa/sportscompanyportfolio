import Menu from '../components/Menu';
import FooterComponent from '../components/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
	return (
		<>
			<Menu />

			<main>
				<Outlet />
			</main>

			<FooterComponent />
		</>
	);
};

export default RootLayout;
