import React from "react";
import aminais from "../img/aminais.png";   // <-- IMPORTANDO A IMAGEM

function Offers({ openWhats }) {
  return (
    <section id="ofertas" className="ofertas">
      <h2>Aproveite Enquanto Dura!</h2>

      <div className="oferta-box paw-card">

        <img 
          src={aminais}     // <-- USANDO A IMAGEM IMPORTADA
          alt="Oferta Especial de Ração"
          className="oferta-image"
        />

        Ração Premium 15kg — de <del>R$ 259,90</del> por <b>R$ 199,90</b>!
        <p>Use o cupom PET10OFF no WhatsApp.</p>
      </div>

      <button
        className="cta"
        onClick={() => openWhats("Quero aproveitar a oferta de Ração Premium!")}
      >
        Eu Quero Minha Oferta
      </button>
    </section>
  );
}

export default Offers;
