import { useState } from "react";

const EjemploContador = () => {
    
    //let contador = 0;
    const [contador, setContador ] = useState(0) 


    const aumentar = () => {
        //contador++; 
        setContador(contador + 1)
        console.log("Clickeamos el boton " ,contador)
    }

    return (
        <div>
            <p>Contador: {[contador]}</p>
            <button onClick={aumentar}>+</button>
        </div>
    )
}

export default EjemploContador
