import React from 'react'
import styles from './rodape.module.css';

function Rodape() {
	return (
		<footer className={styles.container} >
			<p className={styles.paragrafoRodape}>2023 © Desenvolvido por Fernando Pereira | Projeto fictício sem fins comerciais.</p>
		</footer>
	)
}

export default Rodape