import React from "react";

function Benefits() {
  return (
    <section className="beneficios">
      <h2>Por Que Comprar na Pet Rations Express?</h2>

      <div className="beneficios-grid">
        <div className="card paw-card">
          <img src="../img/cao.jpeg" alt="Cachorro correndo" className="card-image" /> {/* Adicione sua imagem aqui */}
          Entrega Super Rápida
        </div>
        <div className="card paw-card">
          <img src="/src/img/cao2.jpg" alt="Gato no WhatsApp" className="card-image" /> {/* Adicione sua imagem aqui */}
          Atendimento Humano pelo WhatsApp
        </div>
        <div className="card paw-card">
          <img src="/src/img/coracaopata.png" alt="Dinheiro com pata" className="card-image" /> {/* Adicione sua imagem aqui */}
          Preços Especiais de Verdade
        </div>
        <div className="card paw-card">
          <img src="/src/img/cachorro.jpg" alt="Cartões de pagamento" className="card-image" /> {/* Adicione sua imagem aqui */}
          Pagamentos Flexíveis
        </div>
      </div>
    </section>
  );
}

export default Benefits;