import React from 'react';

import styles from './Cabecalho.module.css';

import Logo from 'components/Logo';
import MenuHamburguer from 'components/Menu-Hamburger';
import SearchInput from 'components/searchInput';

function Cabecalho() {
    return (
        <header className={styles.container}>
            <div className={styles.containerLogoMenu}>
                <Logo />
                <MenuHamburguer />
            </div>
            <div className={styles.containerInput}>
                <SearchInput />
            </div>
        </header>
    )
}

export default Cabecalho;