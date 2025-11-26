import React from "react";

// Recebe produtos e openWhats via props
function Products({ produtos, openWhats }) {
  return (
    <section id="produtos" className="produtos">
      <h2>Nossas Categorias Favoritas</h2>

      <div className="lista-produtos">
 {produtos.map((p, i) => ( 
 <div key={i} className="produto-card paw-card"> 
 
            {/* ⬅️ NOVO CÓDIGO DE IMAGEM */}
            <img 
                src={p.image} 
                alt={p.nome} 
                className="produto-img" 
            />
            {/* ⬅️ FIM NOVO CÓDIGO */}
            
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

      <button
        className="cta cta-secundario"
        onClick={() => openWhats("Quero ver o catálogo completo de rações!")}
      >
        Ver Catálogo Completo
      </button>
    </section>
  );
}

export default Products;