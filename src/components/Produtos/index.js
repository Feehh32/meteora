import React from 'react';
import styles from './Produtos.module.css'

import CardProduto from 'components/CardProduto';
import produtos from './produtos.json';
import Modal from 'components/Modal';

import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import ProdutosModal from 'components/ProdutosModal';

function Produtos() {
    const isTablet = useMediaQuery({ minWidth: "768px" });
    const isDesktop = useMediaQuery({ minWidth: "1440px" });

    const [produtoSelecionado, setProdutoSelecionado] = useState(null)
    const [openModal, setOpenModal] = useState(false);

    const handleModal = (produto) => {
        setProdutoSelecionado(produto);
        setOpenModal(!openModal);
    }

    const imagemResponsividade = (selectedProduto) => {
        const imagemModal = isDesktop
            ? selectedProduto.imagem.desktop
            : isTablet
                ? selectedProduto.imagem.tablet
                : selectedProduto.imagem.mobile
        return imagemModal;
    }

    return (
        <section className={styles.produtosContainer}>
            <h3>Produtos que estão bombando!</h3>
            <ul className={styles.produtosLista}>
                {produtos.map((produto) => {
                    const imagem =
                        isDesktop
                            ? produto.imagem.desktop
                            : isTablet
                                ? produto.imagem.tablet
                                : produto.imagem.mobile;

                    return (
                        <li key={produto.id}>
                            <CardProduto
                                imagem={imagem}
                                alt={produto.titulo}
                                titulo={produto.titulo}
                                descricao={produto.descricao}
                                preco={produto.preco}
                                onClick={() => handleModal(produto)}
                            />
                        </li>
                    )
                })}
            </ul>

            {produtoSelecionado && (
                <Modal
                    openModal={openModal}
                    textoCabecalho="Confira detalhes sobre o produto"
                    onClick={() => setOpenModal(!openModal)}
                    onClose={() => setOpenModal(false)}
                >
                    <ProdutosModal
                        imagem={imagemResponsividade(produtoSelecionado)}
                        nomeProduto={produtoSelecionado.titulo}
                        produtoDescricao={produtoSelecionado.descricao}
                        preco={produtoSelecionado.preco}
                    />
                </Modal>
            )}
        </section>
    )
}

export default Produtos;