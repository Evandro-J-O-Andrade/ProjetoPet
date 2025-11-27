import React from "react";

// Caminhos CORRETOS usando src/assets/img/
import cao from "../assets/img/cao.jpeg";
import cao2 from "../assets/img/cao2.jpg";
import coracaopata from "../assets/img/coracaopata.png";
import cachorro from "../assets/img/cachorro.jpg";

function Benefits() {
  return (
    <section className="beneficios">
      <h2>Por Que Comprar na Pet Rations Express?</h2>

      <div className="beneficios-grid">
        <div className="card paw-card">
          <img 
            src={cao}
            alt="Cachorro correndo" 
            className="card-image" 
          />
          Entrega Super Rápida
        </div>

        <div className="card paw-card">
          <img 
            src={cao2} 
            alt="Gato no WhatsApp" 
            className="card-image" 
          />
          Atendimento Humano pelo WhatsApp
        </div>

        <div className="card paw-card">
          <img 
            src={coracaopata} 
            alt="Dinheiro com pata" 
            className="card-image" 
          />
          Preços Especiais de Verdade
        </div>

        <div className="card paw-card">
          <img 
            src={cachorro} 
            alt="Cartões de pagamento" 
            className="card-image" 
          />
          Pagamentos Flexíveis
        </div>
      </div>
    </section>
  );
}

export default Benefits;
