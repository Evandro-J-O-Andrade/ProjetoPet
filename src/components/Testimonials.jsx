import React from "react";

// Recebe depoimentos via props
function Testimonials({ depoimentos }) {
  return (
    <section id="depoimentos" className="depoimentos">
      <h2>Quem Compra, Aprova!</h2>

      <div className="depoimentos-grid">
        {depoimentos.map((d, i) => ( // Usa a prop 'depoimentos'
          <div key={i} className="depoimento-card paw-card"> {/* ADICIONADO paw-card AQUI */}
            <p className="depoimento-texto">"{d.texto}"</p>
            <p className="depoimento-autor">
              <b>{d.nome}</b> ({d.cidade})
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;