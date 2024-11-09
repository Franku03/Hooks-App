import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';



export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      ( value = 1 ) => {
        // ? Debemos mandarle el valor del counter de esta forma para pasarle el valor actual de este
        setCounter( (c) => c + value);
      },
      [],
    );
    
    // ¡ El useCallback nos ayuda también a que este useEffect no disparé un ciclo infinito de renderizados por el cambio de la referencia en la función
    useEffect(() => {
      incrementFather();
    }, [incrementFather])
    

    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={incrementFather}/>
        </>
    )
}
