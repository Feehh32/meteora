import styles from './SearchInput.module.css'

import { useState } from 'react';
import React, { useContext } from 'react';

import { ProdutosContext } from 'contextos/Produtos';


function SearchInput() {
    const [pesquisa, setPesquisa] = useState("")
    const {filtroPesquisa } = useContext(ProdutosContext)

    const pesquisarProduto = () => {
        filtroPesquisa(pesquisa);
    }

    const aoClicarEnter = (e) => {
        if(e.key === 'Enter'){
            pesquisarProduto();
        }
    }

    return (
        <>
            <input 
            className={styles.input} 
            type="text"  
            placeholder="Digite o produto" 
            onChange={(e) =>  setPesquisa(e.target.value)}
            onKeyDown={aoClicarEnter} 
            />
            <button className={styles.button} type="button" onClick={pesquisarProduto}>Search</button>
        </>
    )
}

export default SearchInput;