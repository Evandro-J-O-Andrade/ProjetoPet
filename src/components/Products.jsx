// src/components/Products.jsx
import React from "react";

// Caminho correto + método correto do Vite moderno
const imgs = import.meta.glob("../../assets/img/*", { eager: true });

function getImageByName(filename) {
  const key = Object.keys(imgs).find((k) => k.endsWith(`/${filename}`));
  return key ? imgs[key].default : imgs[key];
}

function Products({ produtos, openWhats }) {
  return (
    <section id="produtos" className="produtos">
      <h2>Nossas Categorias Favoritas</h2>

      <div className="lista-produtos">
        {produtos.map((p, i) => {
          const imgSrc =
            typeof p.image === "string"
              ? getImageByName(p.image)
              : p.image;

          return (
            <div key={i} className="produto-card paw-card">
              {imgSrc && (
                <img
                  src={imgSrc}
                  alt={p.nome}
                  className="produto-img"
                />
              )}

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
          );
        })}
      </div>
    </section>
  );
}

export default Products;
