import React from "react";

function Testimonials({ depoimentos }) {
  return (
    <section id="depoimentos" className="depoimentos">
      <h2>Quem Compra, Aprova!</h2>

      <div className="depoimentos-grid">
        {depoimentos.map((d, i) => (
          <div key={i} className="depoimento-card paw-card">
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
