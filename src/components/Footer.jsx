import React from "react";

function Footer() {
  return (
    <footer className="footer">

      {/* Ícones de Redes Sociais */}
      <div className="social-icons">
        
        {/* Instagram */}
        <a 
          href="https://instagram.com/seuusuario" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        {/* Facebook */}
        <a 
          href="https://facebook.com/seupagina" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/5511969037920" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      <p>Pet Rations Express • Entregas rápidas na sua cidade</p>
      <p>© 2025 Todos os direitos reservados.</p>
      <p>Desenvolvido por Evandro Andrade</p>

    </footer>
  );
}

export default Footer;
