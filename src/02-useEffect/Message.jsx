import { useEffect, useState } from "react";


export const Message = () => {

  const [coords, setcoords] = useState({x: 0, y: 0});


  useEffect(() => {

    const onMouseMove = ({x, y}) => {
        // const coords = {x, y};
        setcoords({x, y});
    }

    // Añadimos una referencia en memoria del listener a la función onMouseMove
    window.addEventListener( 'mousemove' , onMouseMove );

    return () => {
        // Eliminamos el listener y a su vez su referencia en memoria a la función
        window.removeEventListener( 'mousemove' , onMouseMove );
    }
  }, []);


  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords )}
    </>
  )
}
