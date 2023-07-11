import styles from './Produtos.module.css'

import React, { useContext, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { ProdutosContext } from 'contextos/Produtos';

import CardProduto from 'components/CardProduto';
import Modal from 'components/Modal';
import ProdutosModal from 'components/ProdutosModal';

function Produtos() {
    const isTablet = useMediaQuery({ minWidth: "768px" });
    const isDesktop = useMediaQuery({ minWidth: "1080px" });

    const { produtos, produtoCateg, produtosFiltrados } = useContext(ProdutosContext);

    const [produtoSelecionado, setProdutoSelecionado] = useState(null)
    const [openModal, setOpenModal] = useState(false);
    const [produtosRenderizados, setProdutosRenderizados] = useState([])

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

    useEffect(() => {

        if (produtoCateg !== null && produtoCateg.length > 0) {
            setProdutosRenderizados(produtoCateg);

        } else if (produtosFiltrados !== null && produtosFiltrados.length > 0) {
            setProdutosRenderizados(produtosFiltrados);

        } else {
            setProdutosRenderizados(produtos)

        }

    }, [produtoCateg, produtosFiltrados, produtos]);

    return (
        <section className={styles.produtosContainer}>
            <h3>Produtos que estão bombando!</h3>
            <ul className={styles.produtosLista}>
                {produtosRenderizados.map((produto) => {
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
                                produto={produtos}
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