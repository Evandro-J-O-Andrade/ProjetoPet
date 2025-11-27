import React, { useState } from 'react';
// Assumindo que você usa a mesma lista de produtos
import ListaProdutos from '../data/ListaProdutos'; 
import '../styles.css'; // Use os estilos existentes ou crie um específico para o catálogo

function Catalogo({ openWhats }) {
    // Estado para armazenar os termos de busca e filtro (para expansões futuras)
    const [searchTerm, setSearchTerm] = useState('');
    
    // Filtra os produtos com base no termo de busca
    const produtosFiltrados = ListaProdutos.filter(p =>
        p.nome.toLowerCase().includes(searchTerm.toLowerCase())
        // Você pode adicionar mais lógica de filtro aqui (ex: categoria)
    );

    return (
        <section id="catalogo" className="catalogo-completo">
            <h2>Catálogo Completo de Produtos</h2>

            {/* 1. Área de Busca e Filtros */}
            <div className="catalogo-filtros">
                <input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-busca"
                />
                {/* Placeholder para dropdowns de filtro (ex: Categoria, Preço) */}
                {/* <select className="select-filtro">...</select> */}
            </div>

            {/* 2. Grid de Produtos */}
            {produtosFiltrados.length > 0 ? (
                <div className="catalogo-grid">
                    {produtosFiltrados.map((p, i) => (
                        // Usamos a mesma estrutura de card para consistência
                        <div key={i} className="produto-card catalogo-card">
                            <img src={p.image} alt={p.nome} className="produto-img" />
                            <h3>{p.nome}</h3>
                            {/* Adicione descrição completa aqui se houver */}
                            {/* <p className="descricao">{p.descricao}</p> */}
                            <p className="preco">{p.preco}</p>
                            <button
                                className="btn-produto"
                                onClick={() =>
                                    openWhats(`Olá! Quero comprar: ${p.nome} - ${p.preco} (Catálogo)`)
                                }
                            >
                                Pedir pelo Whats
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="sem-produtos">Nenhum produto encontrado para "{searchTerm}".</p>
            )}
        </section>
    );
}

export default Catalogo;