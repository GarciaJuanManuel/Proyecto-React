import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import EjemploContador from "./components/Ejemplos/EjemploContador";

import './App.css';

function App() {
  const saludo = () => {
    alert("Saludos desde el componente App");
  }

  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting="Hola, bienvenido a la tienda" /> 
      <EjemploContador />
    </div>
  );
}

export default App;