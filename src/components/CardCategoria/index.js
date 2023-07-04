import React from 'react'
import styles from './CardCategoria.module.css';
import { Link } from 'react-router-dom';

function CardCategoria({imagem, alt, titulo}) {
    return (
        <Link to="/" className={styles.container}>
            <div className={styles.containerImagem}>
                <img src={imagem} alt={alt}/>
            </div>
                <h4 className={styles.titulo}>{titulo}</h4>
        </Link> 
    )
}
export default CardCategoria;