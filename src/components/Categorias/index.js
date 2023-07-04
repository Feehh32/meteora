import React from 'react'
import styles from './Categorias.module.css';

import CardCategoria from 'components/CardCategoria';
import categorias from './categorias.json'

import { useMediaQuery } from 'react-responsive';

function Categorias() {
    const isTablet = useMediaQuery({ minWidth: "768px" });
    const isDesktop = useMediaQuery({ minWidth: "1440px" });

    const categoriasMobile = categorias.categorias[0].mobile;
    const categoriasTablet = categorias.categorias[1].tablet;
    const categoriasDesktop = categorias.categorias[2].desktop;

    return (
        <section className={styles.containerCategoria}>
            <h3 className={styles.categoriaTitulo}>Busque por categoria:</h3>

            <ul className={styles.categoriaLista}>
                {isDesktop ? (
                    categoriasDesktop.map((categoria) => {
                        return (
                            <li key={categoria.id}>
                                <CardCategoria
                                    imagem={categoria.imagem}
                                    titulo={categoria.titulo}
                                    alt={categoria.titulo}
                                />
                            </li>
                        )
                    })
                ) : isTablet ? (
                    categoriasTablet.map((categoria) => {
                        return (
                            <li key={categoria.id}>
                                <CardCategoria
                                    imagem={categoria.imagem}
                                    titulo={categoria.titulo}
                                    alt={categoria.titulo}
                                />
                            </li>
                        )
                    })
                ) : (
                    categoriasMobile.map((categoria) => {
                        return (
                            <li key={categoria.id}>
                                <CardCategoria
                                    imagem={categoria.imagem}
                                    titulo={categoria.titulo}
                                    alt={categoria.titulo}
                                />
                            </li>
                        )
                    })
                )}
            </ul>
        </section>
    )
}

export default Categorias;