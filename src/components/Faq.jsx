import React from "react";

// Recebe todas as props do App.js
function Faq({ faqs, openFaqIndex, toggleFaq }) {
  return (
    <section id="faq" className="faq">
      <h2>Dúvidas Rápidas</h2>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item paw-card">
            <button
              className="faq-pergunta"
              onClick={() => toggleFaq(index)}
            >
              {item.pergunta}
              <span className="faq-icone">
                {openFaqIndex === index ? "−" : "+"}
              </span>
            </button>

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
