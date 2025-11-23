import React from "react";

// Recebe openWhats via props
function Offers({ openWhats }) {
 return (
 <section id="ofertas" className="ofertas">
 <h2>Aproveite Enquanto Dura!</h2>

 <div className="oferta-box paw-card">
        {/* ⬅️ NOVO CÓDIGO DE IMAGEM */}
        <img 
            src="../img/aminais.png" 
            alt="Oferta Especial de Ração" 
            className="oferta-image" 
        />
        {/* ⬅️ FIM NOVO CÓDIGO */}
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