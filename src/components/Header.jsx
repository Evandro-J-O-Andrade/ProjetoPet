import React from "react";

function Header({ openWhats }) {
  // openWhats é recebida via prop do App.js
  return (
    <header className="header">
      <div className="logo">
        {/* LOGOMARCA COM EMOJI MAIOR */}
        <span style={{ marginRight: '8px', fontSize: '1.5em' }}>🐾</span> 
        {/* A propriedade fontSize: '1.5em' aumenta a pata em 50% */}
        Pet Rations Express
      </div>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#produtos">Produtos</a>
        <a href="#ofertas">Ofertas</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#sobre">Sobre Nós</a>
        <a href="#faq">FAQ</a>
      </nav>

      <button
        className="btn-whats"
        onClick={() => openWhats("Olá! Gostaria de fazer meu primeiro pedido.")}
      >
        Comprar no WhatsApp
      </button>
    </header>
  );
}

export default Header;