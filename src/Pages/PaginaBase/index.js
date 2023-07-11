import React from 'react';

import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/rodape';
import ProdutosProvider from 'contextos/Produtos';
import ScrollToTop from 'components/ScrollToTop';

import { Outlet } from 'react-router-dom';

function PaginaBase() {
	return (
		<>
			<ScrollToTop />
			<ProdutosProvider>
				<Cabecalho />
				<Outlet />
				<Rodape />
			</ProdutosProvider>
		</>
	)
}

export default PaginaBase;