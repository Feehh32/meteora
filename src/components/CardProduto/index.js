import React from 'react'
import styles from './CardProduto.module.css'

import { motion } from 'framer-motion';

function CardProduto({ imagem, alt, titulo, descricao, preco, onClick }) {
    return (
        <motion.div
            className={styles.cardContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div>
                <img src={imagem} alt={alt} />
            </div>
            <div className={styles.cardInfo}>
                <h5>{titulo}</h5>
                <p>{descricao}</p>
                <p>{`R$ ${parseFloat(preco).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
                <button type='button' className={styles.botaoModal} onClick={onClick}>Ver mais</button>
            </div>
        </motion.div>
    )
}

export default CardProduto;