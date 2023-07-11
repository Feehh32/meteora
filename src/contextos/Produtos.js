import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProdutosContext = createContext();
ProdutosContext.displayName = "Produtos";

export default function ProdutosProvider({ children }) {
    const [produtos, setProdutos] = useState([]);
    const [produtoCateg, setProdutoCateg] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    const buscarProdutos = async () => {
        try {
            const response = await axios.get("https://my-json-server.typicode.com/Feehh32/meteora-api/produtos");
            const data = response.data;
            setProdutos(data);

        } catch (error) {
            console.error("Erro na requisição:", error);

        }
    }

    useEffect(() => {
        buscarProdutos();

    }, [])

    const filtroCategoria = (categoriaTitulo) => {
        const resultadosBusca = produtos?.filter((produto) => produto.categoria.toLowerCase().includes(categoriaTitulo.toLowerCase()));

        setProdutoCateg(resultadosBusca);

    }

    const filtroPesquisa = (valorDaBusca) => {
        let resultadoPesquisa = [];

        if (valorDaBusca === '') {
            setProdutosFiltrados([]);

        } else {
            resultadoPesquisa = produtos?.filter((produto) => produto.titulo.toLowerCase().includes(valorDaBusca.toLowerCase()));
            
            if(resultadoPesquisa.length === 0){
                setProdutosFiltrados([]);
            }
        };

        setProdutosFiltrados(resultadoPesquisa);

    }

    return (
        <ProdutosContext.Provider value={{
            produtos,
            setProdutos,
            filtroCategoria,
            produtoCateg,
            setProdutoCateg,
            filtroPesquisa,
            produtosFiltrados
        }}>
            {children}
        </ProdutosContext.Provider>
    )
}