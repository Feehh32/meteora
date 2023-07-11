import React from 'react';
import styles from './ProdutosModal.module.css';


function ProdutosModal({imagem, nomeProduto, produtoDescricao, preco}) {

    return (
        <div className={styles.modalPrincipal}>
            <div className={styles.produtoImagem}>
                <img src={imagem} alt="imagem" />
            </div>
            <div className={styles.produtoInfoContainer}>
                <div className={styles.produtoDescricao}>
                    <h3>{nomeProduto}</h3>
                    <p>{produtoDescricao}</p>
                    <hr />
                    <p className={styles.preco}>{`R$ ${parseFloat(preco).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
                    <p>Vendido e entregue por Riachuelo </p>
                </div>
                <form>
                    <fieldset className={styles.radioContainer}>
                        <legend>Cores:</legend>
                        <label htmlFor="azul">
                            <input type="radio" id='azul' name='cor' className={styles.azul} />
                            Azul claro
                        </label>
                        <label htmlFor="offWhite">
                            <input type="radio" id='offWhite' name='cor' className={styles.offWhite} />
                            OffWhite
                        </label>
                        <label htmlFor="preto">
                            <input type="radio" id='preto' name='cor' className={styles.preto} />
                            Preto
                        </label>
                    </fieldset>
                    <fieldset className={styles.radioContainer}>
                        <legend>Tamanho:</legend>
                        <label htmlFor="p">
                            <input type="radio" id='p' name='tamanho' className={styles.tamanho} />
                            P
                        </label>
                        <label htmlFor="m">
                            <input type="radio" id='m' name='tamanho' className={styles.tamanho} />
                            M
                        </label>
                        <label htmlFor="g">
                            <input type="radio" id='g' name='tamanho' className={styles.tamanho} />
                            G
                        </label>
                        <label htmlFor="gg">
                            <input type="radio" id='gg' name='tamanho' className={styles.tamanho} />
                            GG
                        </label>
                    </fieldset>
                    <button type="button" className={styles.botaoSacola}> Adicionar à sacola</button>
                </form>
            </div>
        </div>
    )
}

export default ProdutosModal;