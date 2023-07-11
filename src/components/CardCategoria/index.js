import React from 'react'
import styles from './CardCategoria.module.css';

function CardCategoria({imagem, alt, titulo, onClick}) {
    return (
        <button type='button' className={styles.container} onClick={onClick}>
            <div className={styles.containerImagem}>
                <img src={imagem} alt={alt}/>
            </div>
                <h4 className={styles.titulo}>{titulo}</h4>
        </button> 
    )
}
export default CardCategoria;