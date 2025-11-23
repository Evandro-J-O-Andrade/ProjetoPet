import React from "react";

function Header({ openWhats }) {
  return (
    <header className="header">
      
      {/* LOGO */}
      <div className="logo">
        <span style={{ marginRight: '8px', fontSize: '1.5em' }}>🐾</span>
        Pet Rations Express
      </div>

      {/* MENU */}
      <nav>
        <a href="#inicio">Início</a>
        <a href="#produtos">Produtos</a>
        <a href="#ofertas">Ofertas</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#sobre">Sobre Nós</a>
        <a href="#faq">FAQ</a>
      </nav>

      {/* BOTÃO WHATSAPP */}
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
