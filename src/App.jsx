import './App.css';
import { BrowserRouter, Routes, Route, Navigate, RouterProvider } from 'react-router-dom';

import { APIContextProvider } from './context/ProductContext';

import router from './Routes/Routes';

function App() {
	return (
		<APIContextProvider>
			<RouterProvider router={router} />
		</APIContextProvider>
	);
}

export default App;
