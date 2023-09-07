import '../../estilos/componentes/layout/Header.css';

import React from "react";

const Header = (props) => {
  return (
  <header>
     <ul>
      <li><i className="fa-solid fa-envelope" ></i> reservas@loscondores.com.ar</li>
      <li><i className="fa-solid fa-location-dot" ></i>
        <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7168.332667561845!2d-67.41611494302882!3d-26.0608198731451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a080132e06d10b%3A0x3c02f3fa338632ac!2sAntofagasta%20de%20la%20Sierra%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1688777518015!5m2!1ses-419!2sar"
          target="&quot;_blank&quot;"> Ruta 43 km, Departamento de Antofagasta de la Sierra. Provincia de Catamarca. </a>
      </li>
    </ul>
  </header>
  );
};
export default Header; 