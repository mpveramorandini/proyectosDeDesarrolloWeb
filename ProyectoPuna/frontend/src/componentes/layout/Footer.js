import "../../estilos/componentes/layout/Footer.css";
import React from "react";
import ScrollButton from "../ScrollButton";
import ReactWhatsappButton from "../Whatsapp";

const Footer = (props) => {
  return (
    <footer>
      <div className="contactosFooter">
        <div className="contactoFooterIzq">
          <ul>
            <li className="contactanos"> Contactanos!</li>
            <li>+54 9 3845171252</li>
            <li>reservas@loscondores.com.ar</li>
            <li>
              Departamento de Antofagasta de la Sierra. Provincia de Catamarca.
            </li>
          </ul>
        </div>

        <div className="contactoFooterDer">
          <ul>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a
              accusantium harum suscipit quae, natus dicta. Quam veritatis nemo
              esse? Labore inventore excepturi eius, voluptate nobis enim a
              dolores natus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Lorem ipsum dolor sit amet consectetur adipisicing elit
            </li>
          </ul>
        </div>
      </div>

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

      <div>
        <p class="copy">&copy; Copyright 2023 - Built with &#x2661; by MPV</p>
      </div>
      <ScrollButton />
      <ReactWhatsappButton />
    </footer>
  );
};

export default Footer;
