import React from "react";

// Recebe openWhats via props
function Hero({ openWhats }) {
  return (
    <section id="inicio" className="hero">
      <h1>Fome de Pet não espera! Ração na porta em minutos.</h1>
      <p>Preços especiais, entrega imediata e atendimento direto pelo WhatsApp.</p>

      <button
        className="cta cta-principal"
        onClick={() =>
          openWhats("Olá, quero saber das rações disponíveis e fazer um pedido!")
        }
      >
        Fazer Pedido Agora
      </button>
    </section>
  );
}

export default Hero;
