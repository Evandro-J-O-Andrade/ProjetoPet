import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import "../styles.css";

function Footer() {
  return (
    <footer className="footer">
      
      <h3 className="footer-title">Siga-nos nas Redes Sociais</h3>

      <div className="social-row">
        <a
          href="https://facebook.com/seupagina"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
        >
          <FaFacebookF className="icon" />
          <span>Facebook</span>
        </a>

        <a
          href="https://instagram.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
        >
          <FaInstagram className="icon" />
          <span>Instagram</span>
        </a>

        <a
          href="https://wa.me/5511969037920"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
        >
          <FaWhatsapp className="icon" />
          <span>WhatsApp</span>
        </a>
      </div>

      <p>Pet Rations Express • Entregas rápidas na sua cidade</p>
      <p>© 2025 Todos os direitos reservados.</p>
      <p>Desenvolvido por Evandro Andrade</p>
    </footer>
  );
}

export default Footer;
