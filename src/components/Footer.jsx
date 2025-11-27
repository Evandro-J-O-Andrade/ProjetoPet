import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import "../styles.css"; // certifique-se de ter um CSS para estilizar

function Footer() {
  return (
    <footer className="footer">
      {/* Ícones de Redes Sociais */}
      <div className="social-icons">
        <a
          href="https://instagram.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>

        <a
          href="https://facebook.com/seupagina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="icon" />
        </a>

        <a
          href="https://wa.me/5511969037920"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icon" />
        </a>
      </div>

      <p>Pet Rations Express • Entregas rápidas na sua cidade</p>
      <p>© 2025 Todos os direitos reservados.</p>
      <p>Desenvolvido por Evandro Andrade</p>
    </footer>
  );
}

export default Footer;
