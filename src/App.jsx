import React, { useState } from "react";
import "./styles.css";

// Importações dos componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import Offers from "./components/Offers";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

// === IMPORTAÇÕES CORRETAS DAS IMAGENS ===
import cao from "./assets/img/cao.jpeg";
import gato from "./assets/img/gato.png";
import filhotes from "./assets/img/filhotes.jpeg";

// --- DADOS CENTRAIS ---
const PRODUTOS = [
  
  { 
    nome: "Ração Super Premium Cães (15kg)", 
    preco: "R$ 199,90", 
    image: cao
  },
  { 
    nome: "Ração Premium Gatos Adultos (10kg)", 
    preco: "R$ 89,90", 
    image: gato
  },
  { 
    nome: "Ração Filhotes Light (3kg)", 
    preco: "R$ 39,90", 
    image: filhotes
  }
];

const DEPOIMENTOS = [
  { nome: "Carla S.", cidade: "São Paulo", texto: "Chegou em 20 minutos! Meu pedido sempre foi urgente e a Pet Rations Express nunca falha." },
  { nome: "Pedro A.", cidade: "Belo Horizonte", texto: "Atendimento super atencioso pelo WhatsApp. Encontraram a ração hipoalergênica que eu precisava." },
  { nome: "Mariana R.", cidade: "Rio de Janeiro", texto: "A melhor loja para quem tem urgência. O preço estava ótimo e a entrega foi no prazo." },
];

const FAQS = [
  { pergunta: "Qual o prazo de entrega?", resposta: "Trabalhamos com entrega expressa em até 90 minutos, dependendo da região." },
  { pergunta: "Quais são as formas de pagamento?", resposta: "Pix, cartões de crédito e débito (na entrega) e dinheiro." },
  { pergunta: "Vocês trabalham com rações especiais!?", resposta: "Sim! Possuímos linhas premium, super premium e terapêuticas." },
];

function App() {
  const whatsappNumber = "5511969037920";
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const openWhats = (msg) => {
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="container">
      <Header openWhats={openWhats} />
      <Hero openWhats={openWhats} />
      <Benefits />

      <Products produtos={PRODUTOS} openWhats={openWhats} />
      <Offers openWhats={openWhats} />

      <Testimonials depoimentos={DEPOIMENTOS} />
      <About />

      <Faq 
        faqs={FAQS} 
        openFaqIndex={openFaqIndex} 
        toggleFaq={toggleFaq} 
      />

      <Footer />

      <button
        className="floating-whats"
        onClick={() => openWhats("Olá, pode me ajudar com um pedido?")}
      >
        💬 Pedir Agora
      </button>
    </div>
  );
}

export default App;
