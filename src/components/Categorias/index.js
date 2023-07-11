import React, { useContext, useState } from 'react'
import styles from './Categorias.module.css';

import CardCategoria from 'components/CardCategoria';
import categorias from './categorias.json'

import { useMediaQuery } from 'react-responsive';
import { ProdutosContext } from 'contextos/Produtos';

function Categorias() {
    const isTablet = useMediaQuery({ minWidth: "768px" });
    const isDesktop = useMediaQuery({ minWidth: "1080px" });

    const { filtroCategoria, setProdutoCateg } = useContext(ProdutosContext);

    const [classeBorda, setClasseBorda] = useState('');

    const filtrarProdutos = (categoria, id) => {
        filtroCategoria(categoria);
        setClasseBorda(id);
    }

    const fecharCategoria = () => {
        setClasseBorda('');
        setProdutoCateg(null)
    }

    return (
        <section className={styles.containerCategoria}>
            <h3 className={styles.categoriaTitulo}>Busque por categoria:</h3>

            <ul className={styles.categoriaLista}>
                {categorias.map((categoria) => {
                    const imagem =
                        isDesktop
                            ? categoria.imagem.desktop
                            : isTablet
                                ? categoria.imagem.tablet
                                : categoria.imagem.mobile;
                    return (
                        <li key={categoria.id} className={classeBorda === categoria.id ? styles.categoriaClicada : ""} >
                            <button type='button' className={styles.botaoFechar} onClick={fecharCategoria}>
                                X
                            </button>
                            <CardCategoria
                                imagem={imagem}
                                titulo={categoria.titulo}
                                alt={categoria.titulo}
                                onClick={() => filtrarProdutos(categoria.titulo, categoria.id)}
                            />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Categorias;