import './App.css';
import { RouterProvider } from 'react-router-dom';

import { APIContextProvider } from './context/ProductContext';

import router from './Routes/Routes';
import { Suspense } from 'react';

function App() {
	return (
		<APIContextProvider>
			<Suspense
				fallback={
					<div id="loading">
						<div class="loader"></div>
					</div>
				}
			>
				<RouterProvider router={router} />
			</Suspense>
		</APIContextProvider>
	);
}

export default App;
