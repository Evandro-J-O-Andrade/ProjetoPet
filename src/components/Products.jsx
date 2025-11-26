// src/components/Products.jsx
import React from "react";

// importa todos os arquivos da pasta src/img
const imgs = import.meta.globEager("../img/*");

function getImageByName(filename) {
  // imgs tem chaves como "../img/racao.png"
  const key = Object.keys(imgs).find(k => k.endsWith(`/${filename}`));
  return key ? imgs[key].default : null;
}

// exemplo de produtos (pode vir do App.js ou um arquivo de dados)
const produtos = [
  { nome: "Ração Premium", preco: "R$199,90", imageFile: "racao.png" },
  { nome: "Brinquedo Interativo", preco: "R$59,90", imageFile: "brinquedo.png" },
  { nome: "Coleira Confort", preco: "R$89,90", imageFile: "coleira.png" },
];

function Products({ openWhats }) {
  return (
    <section id="produtos" className="produtos">
      <h2>Nossas Categorias Favoritas</h2>

      <div className="lista-produtos">
        {produtos.map((p, i) => {
          const imgSrc = getImageByName(p.imageFile);
          return (
            <div key={i} className="produto-card paw-card">
              {imgSrc && <img src={imgSrc} alt={p.nome} className="produto-img" />}
              <h3>{p.nome}</h3>
              <p className="preco">{p.preco}</p>
              <button
                className="btn-produto"
                onClick={() => openWhats(`Olá! Quero comprar: ${p.nome} - ${p.preco}`)}
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
