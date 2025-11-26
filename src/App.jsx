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

// --- DADOS CENTRAIS DA APLICAÇÃO ---
const PRODUTOS = [
  { 
    nome: "Ração Super Premium Cães (15kg)", 
    preco: "R$ 199,90", 
    image: "./src/img/cao.jpeg" // <--- ADICIONADO AQUI
  },
  { 
    nome: "Ração Premium Gatos Adultos (10kg)", 
    preco: "R$ 89,90", 
    image: "/src/img/gato.png" // <--- ADICIONADO AQUI
  },
  { 
    nome: "Ração Filhotes Light (3kg)", 
    preco: "R$ 39,90", 
    image: "/src/img/filhotes.jpeg" // <--- ADICIONADO AQUI
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
  { pergunta: "Vocês trabalham com rações especiais?", resposta: "Sim! Possuímos linhas premium, super premium e terapêuticas." },
];

// --- COMPONENTE PRINCIPAL APP ---
function App() {
  const whatsappNumber = "5511969037920"; // Seu número
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Função central para abrir o WhatsApp
  const openWhats = (msg) => {
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text!=${text}`, "_blank");
  };

  // Função para o FAQ
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="container">
      {/* PASSANDO O openWhats */}
      <Header openWhats={openWhats} />
      <Hero openWhats={openWhats} />
      
      {/* BENEFÍCIOS não precisa de props, mas precisa do paw-card dentro dele */}
      <Benefits />
      
      {/* PASSANDO DADOS E openWhats */}
      <Products produtos={PRODUTOS} openWhats={openWhats} />
      <Offers openWhats={openWhats} />
      
      {/* PASSANDO DADOS */}
      <Testimonials depoimentos={DEPOIMENTOS} />
      
      <About />
      
      {/* PASSANDO DADOS E LÓGICA DE ESTADO */}
      <Faq 
        faqs={FAQS} 
        openFaqIndex={openFaqIndex} 
        toggleFaq={toggleFaq} 
      />
      
      {/* O FOOTER NÃO RECEBE PROPS */}
      <Footer />
      
      {/* BOTÃO WHATS FLUTUANTE */}
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