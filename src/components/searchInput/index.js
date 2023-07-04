import React from 'react'
import styles from './SearchInput.module.css'

function SearchInput() {
    return (
        <>
            <input className={styles.input} type="text"  placeholder="Digite o produto" />
            <button className={styles.button} type="button">Search</button>
        </>
    )
}

export default SearchInput;