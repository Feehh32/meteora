import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaBase from 'Pages/PaginaBase';
import Inicio from 'Pages/Inicio';

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PaginaBase />}>
					<Route index element={<Inicio />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes;