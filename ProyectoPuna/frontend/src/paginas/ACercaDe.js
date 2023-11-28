import React from "react";
import "../estilos/componentes/paginas/ACercaDe.css";
const ACercaDe = (props) => {
  return (
    <div className="aCerca">
      <div className="tituloACercaDe">
        <h2>a cerca de </h2>
      </div>
      <div className="contenedorAcerca">
        <div className="imagenACerca">
          
          <img src="imagenes/inicio/Antofagasta_de_la_Sierra.jpg" alt="" />
        </div>

        <div className="contenedorP">
          <div className="aCercaPalabras">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              fuga quibusdam dolores possimus totam. Non sunt fuga laborum
              quisquam impedit repudiandae vitae esse, nesciunt provident
              eligendi, iusto sapiente laudantium maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              fuga quibusdam dolores possimus totam. Non sunt fuga laborum
              quisquam impedit repudiandae vitae esse, nesciunt provident
              eligendi, iusto sapiente laudantium maxime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ACercaDe;
