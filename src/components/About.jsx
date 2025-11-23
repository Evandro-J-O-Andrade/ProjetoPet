import React from "react";
import patacorcao from "../img/patacorcao.jpg"; // Caminho correto

function About() {
  return (
    <section id="sobre" className="sobre">
      <h2>Mais Que Uma Loja, Uma Família.</h2>

      <div className="about-content paw-card">
        <img
          src={patacorcao}
          alt="Coração com Pata"
          className="about-icon"
        />
        
        <p>
          A Pet Rations Express nasceu da paixão por animais e da necessidade de
          rapidez na entrega de rações. Aqui você pede pelo WhatsApp e recebe
          na porta, com carinho e agilidade.
        </p>
      </div>
    </section>
  );
}

export default About;
