// src/assets/data/ListaProdutos.jsx

import specialDog from "../img/produto8.jpg";;
import caminhas from "../img/produto1.jpg";;
import coleiras from "../img/produto5.jpg";
import acessorios from "../img/acessorios.avif";          // mantive o .AVIF que você tem
import casinhaViagem from "../img/produto3.jpg";    // nome exato que você tem
import racaogatos from "../img/produto7.png";
import filhotesImg from "../img/produto6.jpg";               // A SUA IMAGEM REAL
import racaogato from "../img/produto10.jpg";         // NOVO PRODUTO 9
import racaocachorro   from  "../img/produto9.jpg";     // NOVO PRODUTO 10
import petiscos from "../img/produto11.jpg";         // NOVO PRODUTO 11
const ListaProdutos = [
  {
    id: 1,
    nome: "Ração Premium Cães Special Dog (15,kg)",
    preco: "R$ 199,90",
    image: specialDog,
    descricao: "Alimento completo Special Dog Premium, rico em proteínas de carne e frango.",
    beneficios: ["Ômega 3 e 6", "Alta Digestibilidade", "Articulações Saudáveis"]
  },
  {
    id: 2,
    nome: "Caminha Licenciada Barbie/Hot Wheels",
    preco: "R$ 149,90",
    image: caminhas,
    descricao: "Cama super macia com estampas licenciadas. Acolchoamento reforçado.",
    beneficios: ["Design Exclusivo", "Conforto Máximo", "Material Lavável"]
  },
  {
    id: 3,
    nome: "Kit Coleiras e Guias Temáticas",
    preco: "R$ 59,90",
    image: coleiras,
    descricao: "Coleiras ajustáveis de nylon em várias estampas divertidas.",
    beneficios: ["Nylon Resistente", "Ajuste Fácil", "Segurança Garantida"]
  },
  {
    id: 4,
    nome: "Kit Toca, Arranhador e Comedouro Inteligente",
    preco: "R$ 169,90",
    image: acessorios,
    descricao: "Kit completo para gatos com toca, arranhador e dispensador de água.",
    beneficios: ["Toca Confortável", "Anti-Stress para Gatos", "Design Moderno"]
  },
  {
    id: 5,
    nome: "Caixa de Transporte Viagem (P/M)",
    preco: "R$ 119,90",
    image: casinhaViagem,
    descricao: "Caixa de transporte leve e resistente (azul e rosa).",
    beneficios: ["Ventilação Máxima", "Trava de Segurança", "Padrão ANAC"]
  },
  {
    id: 6,
    nome: "Ração Golden Gatos Castrados (10,1kg)",
    preco: "R$ 139,90",
    image: racaogatos,
    descricao: "Alimento completo Golden sabor Frango para gatos castrados.",
    beneficios: ["Trato Urinário Saudável", "Rico em Taurina", "Sem Corantes"]
  },
  {
    id: 7,
    nome: "Shampoo Hipoalergênico Filhotes",
    preco: "R$ 49,90",
    image: filhotesImg,
    descricao: "Shampoo suave, ideal para peles sensíveis de filhotes. Não arde os olhos.",
    beneficios: ["pH Balanceado", "Sem Parabenos", "Aroma Suave"]
  },
    // ====== PRODUTOS NOVOS (8, 9 e 10) ======

  {
    id: 8,
    nome: "Peitoral + Guia Hello Kitty FreeFaro",
    preco: "R$ 129,90",
    image: racaogato, // ← está usando a mesma foto boa que você já tem (Hello Kitty)
    descricao: "Kit completo oficial Hello Kitty: peitoral ergonômico, guia e coleira. Perfeito para cães pequenos e médios.",
    beneficios: ["Licenciado FreeFaro", "Acolchoado e confortável", "Fecho reforçado"]
  },
  {
    id: 9,
    nome: "Brinquedo Mordedor Corda com Bola",
    preco: "R$ 34,90",
    image: racaocachorro, // ← usa a foto do filhote (fica fofo e combina com brinquedo)
    descricao: "Brinquedo de corda resistente com bola de borracha. Ideal para limpeza dental e diversão.",
    beneficios: ["Limpeza dos dentes", "Resistente a mordidas", "100% atóxico"]
  },
  {
    id: 10,
    nome: "Tapete Higiênico Lavável Pet 60x80cm",
    preco: "R$ 89,90",
    image: petiscos, // ← usa a foto das caminhas (fundo branco bonito, combina com tapete)
    descricao: "Tapete higiênico reutilizável, absorve até 1 litro. Economize com fraldas!",
    beneficios: ["Lavável na máquina", "Base antiderrapante", "Economia de até 80%"]
  }
];

export default ListaProdutos;