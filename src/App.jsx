import './App.css';
import { RouterProvider } from 'react-router-dom';

import { APIContextProvider } from './context/ProductContext';

import router from './Routes/Routes';
import { Suspense } from 'react';
import { AuthContextProvider } from './context/AuthContext';

function App() {
	return (
		<APIContextProvider>
			<AuthContextProvider>
				<Suspense
					fallback={
						<div id="loading">
							<div class="loader"></div>
						</div>
					}
				>
					<RouterProvider router={router} />
				</Suspense>
			</AuthContextProvider>
		</APIContextProvider>
	);
}

export default App;
