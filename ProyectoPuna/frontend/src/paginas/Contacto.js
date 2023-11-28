import React from "react";
import "../estilos/componentes/paginas/Contacto.css";
const Contacto = (props) => {
  return (
    <div className="ContenedorContacto" id="ContenedorContacto">
      <div className="tituloContacto">
        <h2>Contacto</h2>
      </div>

      <div className="contacto">
        <div className="form">
          <h2>Formulario de consulta</h2>
          <form action="" method="" className="formulario">
            <p>
              <label for="nombre">Nombre</label>
              <input type="text" name="" />
            </p>

            <p>
              <label for="email">Correo</label>
              <input type="text" name="" />
            </p>
            <p>
              <label for="asunto">Asunto</label>
              <input type="text" name="" />
            </p>
            <p>
              <label for="mensaje">Mensaje</label>
              <textarea name=""></textarea>
            </p>
            <p className="boton">
              <input type="submit" value="Enviar" />
            </p>
          </form>
        </div>
        <div className="ubicacion">
          <iframe
            className="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7168.332667561845!2d-67.41611494302882!3d-26.0608198731451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a080132e06d10b%3A0x3c02f3fa338632ac!2sAntofagasta%20de%20la%20Sierra%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1688777518015!5m2!1ses-419!2sar"
            style={{ width: 500, height: 400, border: 0 }}
          ></iframe>
          <a
            className="mapaDirecto"
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7168.332667561845!2d-67.41611494302882!3d-26.0608198731451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a080132e06d10b%3A0x3c02f3fa338632ac!2sAntofagasta%20de%20la%20Sierra%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1688777518015!5m2!1ses-419!2sar"
            target='"_blank"'
          >
            Ruta 43 km, Departamento de Antofagasta de la Sierra. Provincia de
            Catamarca. Altitud 3390 sobre el nivel del mar.
          </a>
        </div>
      </div>

      <div className="contactos">
        <ul>
          <li>
            <i className="fa-solid fa-phone fa-xl icono"></i> De
            Lunes a Viernes en horario de atención 09 a 16 hs, +54 9 384 5171252
          </li>
          <li>
            <i className="fa-solid fa-envelope fa-xl icono"></i>{" "}
            Todas las reservas deberán ser solicitadas por escrito enviando un
            e-mail a reservas@loscondores.com.ar
          </li>
          <li>
            <i
              className="fa-solid fa-location-dot fa-xl icono"
            
            ></i>{" "}
            Ruta Prov. 43 Km. Localidad -----, Departamento de Antofagasta de la
            Sierra. Provincia de Catamarca. 
          </li>
          <li>
            <i className="fa-solid fa-gas-pump fa-xl icono"></i>{" "}
            Estaciones de combustible más cercanas: Antofagasta de la Sierra (a
            veces se queda sin suministro), El Eje, Hualfín y Belén.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contacto;
