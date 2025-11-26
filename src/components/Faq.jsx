import React from "react";

// Recebe todas as props do App.js
function Faq({ faqs, openFaqIndex, toggleFaq }) {
  return (
    <section id="faq" className="faq">
      <h2>Dúvidas Rápidas</h2>

      <div className="faq-container">
        {faqs.map((item, index) => ( // Usa a prop 'faqs'
          <div key={index} className="faq-item paw-card"> {/* ADICIONADO paw-card AQUI */}
            <button
              className="faq-pergunta"
              onClick={() => toggleFaq(index)} // Usa a prop 'toggleFaq'
            >
              {item.pergunta}
              {/* Usa a prop 'openFaqIndex' */}
              <span className="faq-icone">{openFaqIndex === index ? "−" : "+"}</span>
            </button>

            {/* Usa a prop 'openFaqIndex' */}
            {openFaqIndex === index && (
              <div className="faq-resposta">{item.resposta}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;