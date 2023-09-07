import "../../estilos/componentes/layout/Footer.css";
import React from "react";
import ScrollButton from "../ScrollButton";
import ReactWhatsappButton from "../Whatsapp";

const Footer = (props) => {
  return (
    <footer>
      <div className="redes">
        <ul className="social-icons">
          <li>
            <a href="https://www.instagram.com/" target="_blanck">
              <i class="fa-brands fa-instagram fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blanck">
              <i class="fa-brands fa-facebook fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blanck">
              <i class="fa-brands fa-twitter fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>

      <p class="copy">&copy; Copyright 2023 - Built with &#x2661; by MPV</p>

      <ScrollButton/>
      < ReactWhatsappButton/>
    </footer>
  );
};

export default Footer;
