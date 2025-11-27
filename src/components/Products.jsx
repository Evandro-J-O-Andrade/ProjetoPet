import React from "react";
import "../styles.css";
// ListaProdutos e useState, etc., não são mais necessários aqui, pois o carrossel foi removido.
// import ListaProdutos from "../data/ListaProdutos"; 

// Adicionamos 'navigateTo' nos props
function Products({ produtos, openWhats, navigateTo }) { 

  // Todos os estados e funções relacionados ao carrossel (showCarousel, currentIndex, 
  // next, prev, getPositionStyle) foram removidos para simplificar o componente.

  return (
    <section id="produtos" className="produtos">
      <h2>Produtos em Destaque</h2>

      {/* 3 produtos fixos */}
      <div className="lista-produtos">
        {produtos.map((p, i) => (
          <div key={i} className="produto-card paw-card" style={{background: "transparent"}}>
            <img src={p.image} alt={p.nome} className="produto-img" />
            <h3>{p.nome}</h3>
            <p className="preco">{p.preco}</p>
            <button
              className="btn-produto"
              onClick={() =>
                openWhats(`Olá! Quero comprar: ${p.nome} - ${p.preco}`)
              }
            >
              Pedir pelo Whats
            </button>
          </div>
        ))}
      </div>

      {/* Botão de navegação para o Catálogo */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          className="btn-ver-mais"
          // CHAMA A FUNÇÃO navigateTo PASSADA PELO App.jsx
          onClick={() => navigateTo('catalogo')}
        >
          Veja todos os produtos no Catálogo
        </button>
      </div>

      {/* A seção do Carrossel 3D ({showCarousel && (...)}) foi completamente removida.
      */}
    </section>
  );
}

export default Products;