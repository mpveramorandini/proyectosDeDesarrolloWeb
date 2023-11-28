import React from "react";
import "../estilos/componentes/paginas/Servicios.css";
import { Link } from "react-router-dom";
const Servicios = (props) => {
  return (
    <main className="home">
      <div className="ContenedorServicios" id="ContenedorServicios">
        <div className="tituloServicios">
          <h2>servicios </h2>
        </div>
        <div className="servicios">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, labore.
            Pariatur dolor obcaecati iusto quas sed voluptatem Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ex, labore. Pariatur dolor
            obcaecati iusto quas sed voluptatem,
          </p>
          <div className="contenedorServicio">
            <div className="contServicio">
              <Link
                to="/servicios" /*a otra pagina*/ 
                className={({ isActive }) => (isActive ? "activo" : undefined)}
              >
                <img src="imagenes/inicio/cafe.jpg" alt="Servicios" />
                <h5>Desayuno</h5>
              </Link>
            </div>
            <div className="contServicio">
              <Link
                to="/servicios" /*a otra pagina*/ 
                className={({ isActive }) => (isActive ? "activo" : undefined)}
              >
                <img src="imagenes/inicio/camioneta1.jpg" alt="Servicios" />
                <h5>Excursiones</h5>
              </Link>
            </div>
            <div className="contServicio">
              <Link
                to="/servicios" /*a otra pagina*/ 
                className={({ isActive }) => (isActive ? "activo" : undefined)}
              >
                <img src="imagenes/inicio/servicios_1.jpg" alt="contacto" />
                <h5>Habitaciones</h5>
              </Link>
            </div>
          </div>
          <h3>
            Suministro eléctrico <i className="fa-solid fa-bolt"></i>
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, labore.
            Pariatur dolor obcaecati iusto quas sed voluptatem, exercitationem
            quam rem accusantium dolorem neque ut minus, eveniet quaerat
            voluptatum fuga temporibus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex, labore. Pariatur dolor obcaecati iusto quas
            sed voluptatem, exercitationem quam rem accusantium dolorem neque ut
            minus, eveniet quaerat voluptatum fuga temporibus.
          </p>

          <h3>
            Conexión a internet <i className="fa-solid fa-wifi"></i>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, labore.
            Pariatur dolor obcaecati iusto quas sed voluptatem, exercitationem
            quam rem accusantium dolorem neque ut minus, eveniet quaerat
            voluptatum fuga temporibus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex, labore. Pariatur dolor obcaecati iusto quas
            sed voluptatem, exercitationem quam rem accusantium dolorem neque ut
            minus, eveniet quaerat voluptatum fuga temporibus.
          </p>
          <h3>
            Servicio de restaurant <i className="fa-solid fa-utensils"></i>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, labore.
            Pariatur dolor obcaecati iusto quas sed voluptatem, exercitationem
            quam rem accusantium dolorem neque ut minus, eveniet quaerat
            voluptatum fuga temporibus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex, labore. Pariatur dolor obcaecati iusto quas
            sed voluptatem, exercitationem quam rem accusantium dolorem neque ut
            minus, eveniet quaerat voluptatum fuga temporibus.
          </p>
          <h3>
            Calefacción{" "}
            <i className="fa-solid fa-temperature-three-quarters"></i>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, labore.
            Pariatur dolor obcaecati iusto quas sed voluptatem, exercitationem
            quam rem accusantium dolorem neque ut minus, eveniet quaerat
            voluptatum fuga temporibus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex, labore. Pariatur dolor obcaecati iusto quas
            sed voluptatem, exercitationem quam rem accusantium dolorem neque ut
            minus, eveniet quaerat voluptatum fuga temporibus.
          </p>

          <h3>Horarios</h3>
          <ul>
            <li>DESAYUNO: de 07:30 a 09:30.</li>
            <li>CENA: de 20:00 a 22:00.</li>
            <li>
              El servicio de box lunch o el almuerzo para llevar debe
              solicitarse la noche anterior antes de las 20:00 hs. Y estará
              listo a la mañana siguiente.
            </li>
            <li>Este hotel no tiene servicio de habitaciones. </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default Servicios;
