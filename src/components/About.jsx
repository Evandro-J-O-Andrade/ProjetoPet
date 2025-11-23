import React from "react";

function About() {
  return (
    <section id="sobre" className="sobre">
      <h2>Mais Que Uma Loja, Uma Família.</h2>
      
      {/* NOVO BLOCO DE CONTEÚDO COM paw-card */}
      <div className="about-content paw-card">
        {/* Adicione uma imagem ou ícone que represente "família/cuidado" */}
        <img 
            src="/src/img/patacorcao.jpg" 
            alt="Coração com Pata" 
            className="about-icon" 
        />
        <p>
          A Pet Rations Express nasceu da paixão por animais e da necessidade de
          rapidez na entrega de rações. Aqui você pede pelo WhatsApp e recebe
          na porta, com carinho e agilidade.
        </p>
      </div>
      {/* FIM DO NOVO BLOCO */}
      
    </section>
  );
}

export default About;