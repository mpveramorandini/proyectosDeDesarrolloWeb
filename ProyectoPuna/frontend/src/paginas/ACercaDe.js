import React from "react";
import "../estilos/componentes/paginas/ACercaDe.css";
const ACercaDe = (props) => {
  return (
    <div className="aCerca">
      <div className="tituloACercaDe">
        <h2>a cerca de </h2>
      </div>

      <div className="quienesSomos">
        <div className="quienes">
          <p>ANTOFAGASTA DE LA SIERRA.
            Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Dolore a accusantium harum suscipit quae, natus dicta. Quam
            veritatis nemo esse? Labore inventore excepturi eius, voluptate
            nobis enim a dolores natus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolore a accusantium harum suscipit quae, natus
            dicta. Quam veritatis nemo esse? Labore inventore excepturi eius,
            voluptate nobis enim a dolores natus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Dolore a accusantium harum suscipit
            quae, natus dicta. Quam veritatis nemo esse? Labore inventore
            excepturi eius, voluptate nobis enim a dolores natus. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Dolore a accusantium harum
            suscipit quae, natus dicta. Quam veritatis nemo esse? Labore
            inventore excepturi eius, voluptate nobis enim a dolores natus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="quienes">
          <img
            className="foto_personas"
            src="imagenes/inicio/Antofagasta_de_la_Sierra.jpg"
            alt="Personas"
          />
        </div>
      </div>
    </div>
  );
};
export default ACercaDe;
