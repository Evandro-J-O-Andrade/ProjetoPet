import React from "react";
// Importe os ícones que você for usar aqui se estiver usando a biblioteca @fortawesome/react-fontawesome
// Exemplo: import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      
      {/* Container de Ícones de Redes Sociais */}
      <div className="social-icons">
        {/* Usando classes Font Awesome (necessário instalar a lib FA) */}
        
        {/* Instagram */}
        <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faInstagram} /> */}
          <i className="fa-brands fa-instagram"></i>
        </a>
        
        {/* Facebook */}
        <a href="https://facebook.com/seupagina" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faFacebookF} /> */}
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        
        {/* WhatsApp (Para contato) */}
        <a href="https://wa.me/5511969037920" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
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
