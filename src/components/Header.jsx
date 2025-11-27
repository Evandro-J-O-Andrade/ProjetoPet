import React from "react";

function Header({ openWhats, navigateTo }) { 

    // Função para links internos (ex: #produtos) - AGORA ATUALIZA O HASH
    const handleNavigation = (e) => {
        e.preventDefault(); 
        
        // 1. Volta para a 'home' (necessário se estiver no catálogo)
        if (navigateTo) {
            navigateTo('home');
        }

        const targetId = e.currentTarget.getAttribute('href'); // Ex: '#produtos'

        // 2. Rola para a âncora específica após 50ms
        setTimeout(() => {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // NOVO: Atualiza o hash da URL manualmente após a rolagem
                window.location.hash = targetId; 
            }
        }, 50); 
    };

    // Função para Início e Logo (rolar para o topo) - AGORA LIMPA O HASH
    const handleHomeClick = (e) => {
        e.preventDefault();
        
        // 1. Volta para a página 'home'
        if (navigateTo) {
            navigateTo('home');
        }
        
        // 2. Rolagem forçada para o topo (50ms para sincronizar o React)
        setTimeout(() => {
             // Força a rolagem no topo
             window.scrollTo({ top: 0, behavior: 'smooth' }); 
             document.documentElement.scrollTop = 0; 
             document.body.scrollTop = 0;           
             
             // NOVO: Limpa o hash da URL para indicar que estamos no topo/Início
             window.location.hash = ''; 
        }, 50);
    }
    
    return (
        <header className="header">
            
            {/* LOGO - Clicar no logo usa a função handleHomeClick */}
            <div 
                className="logo" 
                onClick={handleHomeClick} 
                style={{ cursor: 'pointer' }}
            >
                <span style={{ marginRight: '8px', fontSize: '1.5em' }}>🐾</span>
                Pet Rations Express
            </div>

            {/* MENU - Todos os links agora atualizam o hash corretamente */}
            <nav>
                <a href="#inicio" onClick={handleNavigation}>Início</a>
                <a href="#produtos" onClick={handleNavigation}>Produtos</a>
                <a href="#ofertas" onClick={handleNavigation}>Ofertas</a>
                <a href="#depoimentos" onClick={handleNavigation}>Depoimentos</a>
                <a href="#sobre" onClick={handleNavigation}>Sobre Nós</a>
                <a href="#faq" onClick={handleNavigation}>FAQ</a>
            </nav>

            {/* BOTÃO WHATSAPP */}
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