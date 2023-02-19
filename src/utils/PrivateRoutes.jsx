import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../auth/authHook';
const PrivateRoutes = () => {
	const { user } = useAuth();
	return user.accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
