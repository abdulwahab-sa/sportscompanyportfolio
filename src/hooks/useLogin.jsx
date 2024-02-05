import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useLogin = () => {
	const { dispatch } = useAuthContext();

	const login = async (username, password) => {
		try {
			const response = await axios.post('https://tradecity-api.onrender.com/api/login', { username, password });
			const data = response.data.accessToken;

			if (data) {
				//const { accessToken, refreshToken } = response.data;
				localStorage.setItem('user', JSON.stringify(data));
				dispatch({ type: 'LOGIN', payload: data });
				window.location.replace('/dashboard');
			} else {
				alert('Invalid username or password');
			}
		} catch (err) {
			alert('Invalid username or password');
		}
	};
	return { login };
};
