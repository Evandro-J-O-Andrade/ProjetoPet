// src/components/Catalogo.jsx
import React, { useState } from "react";
// Caminho correto para a lista de produtos
import ListaProdutos from "../assets/data/ListaProdutos";
import "../styles.css"; // Ajuste de caminho para o styles.css

function Catalogo({ openWhats }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra os produtos pelo nome
  const produtosFiltrados = ListaProdutos.filter((p) =>
    p.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="catalogo" className="catalogo-completo">
      <h2>Catálogo Completo de Produtos</h2>

      <div className="catalogo-filtros">
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-busca"
        />
      </div>

      {produtosFiltrados.length > 0 ? (
        <div className="catalogo-grid">
          {produtosFiltrados.map((p) => (
            <div key={p.id} className="produto-card">
              <img src={p.image} alt={p.nome} className="produto-img" />
              <h3 className="produto-nome">{p.nome}</h3>
              <p className="descricao">{p.descricao}</p>

              {p.beneficios && p.beneficios.length > 0 && (
                <ul className="produto-beneficios">
                  {p.beneficios.map((b, i) => (
                    <li key={i}>✅ {b}</li>
                  ))}
                </ul>
              )}

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
      ) : (
        <p className="sem-produtos">
          Nenhum produto encontrado para "{searchTerm}".
        </p>
      )}
    </section>
  );
}

export default Catalogo;
