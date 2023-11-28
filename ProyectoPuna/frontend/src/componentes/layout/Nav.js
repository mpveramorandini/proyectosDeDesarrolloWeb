import "../../estilos/componentes/layout/Nav.css";
import { NavLink } from "react-router-dom";
import React,{useState} from "react"


const Nav = (props) => {
  const[isOpen, setIsOpen] = useState(false)
  return (
    <nav>   
      <div>
        {" "}
        <img className="LogoCondor" src="imagenes/Logo.jpg" alt="Servicios" />
      </div>
      <div className={`navItems ${isOpen && "open"}`}>
        <ul >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/acerca"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              a cerca de{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destinoPuna"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              destino puna{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servicios"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Servicios
            </NavLink>
          </li>
          <li>
          <a className="botonNav" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7168.332667561845!2d-67.41611494302882!3d-26.0608198731451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a080132e06d10b%3A0x3c02f3fa338632ac!2sAntofagasta%20de%20la%20Sierra%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1688777518015!5m2!1ses-419!2sar"
          target="&quot;_blank&quot;">UBICACIÓN</a>
          </li>
        </ul>
       
        </div>
        {/* <div className="boton">
          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7168.332667561845!2d-67.41611494302882!3d-26.0608198731451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a080132e06d10b%3A0x3c02f3fa338632ac!2sAntofagasta%20de%20la%20Sierra%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1688777518015!5m2!1ses-419!2sar"
          target="&quot;_blank&quot;">UBICACIÓN</a>
        </div> */}
        <div className={`navToggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen) }>
          <span></span>
          <span></span>
          <span></span>
        </div>
    
    </nav>
    
  );
};
export default Nav;



