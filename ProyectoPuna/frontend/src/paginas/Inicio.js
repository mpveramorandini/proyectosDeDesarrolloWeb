import React from "react";
import "../estilos/componentes/paginas/Inicio.css";
import { Link } from "react-router-dom";
import Slider from "../componentes/Slider";

const Inicio = (props) => {
  return (
    <div className="home">
      <div className="slider">
        <Slider/>
      </div>
      <div className="holder">
        <div className="columna">
          <h2>Bienvenidos </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a
            accusantium harum suscipit quae, natus dicta. Quam veritatis nemo
            esse? Labore inventore excepturi eius, voluptate nobis enim a
            dolores natus. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Magnam ea aperiam minima cum saepe. Cumque sapiente repellat
            error, fuga pariatur architecto nihil ea similique quo laudantium
            consequuntur dignissimos ad labore? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam perferendis hic similique non
            facilis itaque aliquam ullam, illo dolorem! Fugiat, ipsam cumque!
            Deleniti voluptatem ratione cupiditate tempore alias, fuga tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            maxime. Praesentium fugit labore dolor iste natus optio est laborum
            debitis reiciendis beatae. Voluptatibus tempore rerum veniam.
            Doloremque, illum iusto! Beatae.
          </p>
        </div>
{/* el tamaño de las fotos debe ser el mismo */}
        <div className="contenedorAbajo">
          <div className="contAbajo">
            <Link
              to="/servicios"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              <img
                src="imagenes/inicio/puna2.jpg"
                alt="Servicios"
              />
              <h5>Destino Puna</h5>
              <p>
              Guia informativa para viajar en la Puna
              </p>
            </Link>
          </div>
          <div className="contAbajo">
            <Link
              to="/servicios"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              <img
                src="imagenes/inicio/servicios1.jpg"
                alt="Servicios"
              />
              <h5>Servicios</h5>
              <p>
                Conoce las instalaciones
              </p>
            </Link>
          </div>
          <div className="contAbajo">
            <Link
              to="/contacto"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              <img
                src="imagenes/inicio/vicuñas.jpg"
                alt="contacto"
              />
              <h5>Contacto</h5>
              <p>
               Realizá tu reserva
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inicio;
