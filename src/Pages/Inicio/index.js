import React from 'react';
import styles from './Inicio.module.css';

import Banner from 'components/Banner';
import Categorias from 'components/Categorias';
import Facilidades from 'components/Facilidades';
import Produtos from 'components/Produtos';
import NewsLetterForm from 'components/newsletterForm';

function Inicio() {
	return (
		<main className={styles.principal}>
			<Banner />
			<section className={styles.principalContainer}>
				<Categorias />
				<Produtos />
			</section>
				<Facilidades />
				<NewsLetterForm />
		</main>
	)
}

export default Inicio;