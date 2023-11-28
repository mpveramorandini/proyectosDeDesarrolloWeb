import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";
import Inicio from "./paginas/Inicio";
import Servicios from "./paginas/Servicios";
import Contacto from "./paginas/Contacto";
import DestinoPuna from "./paginas/DestinoPuna";
import ACercaDe from "./paginas/ACercaDe";

function App() {
  return (
    <div className="App">
       <Header/>

<BrowserRouter>
<Nav/>

<Routes>
<Route path="/" element={<Inicio />} />
<Route path="destinoPuna" element={<DestinoPuna/>} />
<Route path="servicios" element={<Servicios/>} />
<Route path="contacto" element={<Contacto/>} />
<Route path="acerca" element={<ACercaDe/>} />
</Routes>
</BrowserRouter>

<Footer/>
   
    </div>
  );
}

export default App;
