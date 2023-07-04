import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/rodape';
import React from 'react';
import { Outlet } from 'react-router-dom';

function PaginaBase() {
	return (
		<>
			<Cabecalho />
			<Outlet />
			<Rodape />
		</>
	)
}

export default PaginaBase;