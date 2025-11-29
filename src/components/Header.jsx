import React, { useState } from "react";

function Header({ openWhats, navigateTo }) { 
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    // Função para links internos (ex: #produtos) - AGORA ATUALIZA O HASH
    const handleNavigation = (e) => {
        e.preventDefault(); 
        
        if (navigateTo) {
            navigateTo('home');
        }
        
        setIsMenuOpen(false); 

        const targetId = e.currentTarget.getAttribute('href'); // Ex: '#produtos'

        setTimeout(() => {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // CORREÇÃO: Atualiza o hash da URL manualmente
                window.location.hash = targetId; 
            }
        }, 50); 
    };

    // Função para Início e Logo (rolar para o topo) - AGORA LIMPA O HASH
 const handleHomeClick = (e) => {
        e.preventDefault();

        setIsMenuOpen(false);
        navigateTo("home");

        const el = document.querySelector("#inicio");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };
    return (
        <header className="header">
            
            {/* LOGO */}
            <div 
                className="logo"    
                onClick={handleHomeClick} // Usa handleHomeClick
                style={{ cursor: 'pointer' }}
            >
                <span style={{ marginRight: '8px', fontSize: '1.5em' }}>🐾</span>
                Pet Rations Express
            </div>
            
            {/* NOVO ELEMENTO: ÍCONE DO WHATSAPP (Mobile) */}
            <div 
                className="btn-whats-mobile"
                onClick={() => openWhats("Olá! Gostaria de fazer meu primeiro pedido.")}
            >
              
            </div>

            {/* BOTÃO HAMBURGUER */}
            <button 
                className="menu-toggle" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen} 
            >
                {isMenuOpen ? 'X' : '☰'} 
            </button>


            {/* MENU DE NAVEGAÇÃO - CORREÇÃO NO LINK 'INÍCIO' */}
            <nav className={isMenuOpen ? 'active' : ''}>
                {/* CORREÇÃO: 'Início' DEVE USAR handleHomeClick */}
                <a href="#inicio" onClick={handleNavigation}>Início</a> 
                
                <a href="#produtos" onClick={handleNavigation}>Produtos</a>
                <a href="#ofertas" onClick={handleNavigation}>Ofertas</a>
                <a href="#depoimentos" onClick={handleNavigation}>Depoimentos</a>
                <a href="#sobre" onClick={handleNavigation}>Sobre Nós</a>
                <a href="#faq" onClick={handleNavigation}>FAQ</a>
            </nav>

            {/* BOTÃO WHATSAPP (Desktop) */}
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