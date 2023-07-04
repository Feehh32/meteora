import React from 'react'
import styles from './CardProduto.module.css'

function CardProduto({ imagem, alt, titulo, descricao, preco, onClick}) {
    return (
        <div className={styles.cardContainer}>
            <div>
                <img src={imagem} alt={alt} />
            </div>
            <div className={styles.cardInfo}>
                <h5>{titulo}</h5>
                <p>{descricao}</p>
                <p>{`R$ ${parseFloat(preco).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
                <button type='button' className={styles.botaoModal} onClick={onClick}>Ver mais</button>
            </div>
        </div>
    )
}

export default CardProduto;