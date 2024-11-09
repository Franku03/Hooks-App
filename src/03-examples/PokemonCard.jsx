import { useLayoutEffect, useRef, useState } from "react"

export const PokemonCard = ({ id, name, sprites = []}) => {

    const h1Ref = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    //En este caso, no hace falta ponerle condición de disparo [name] porque el componente
    //Siempre vuelve a renderizarse en el componente padre cuando cambia el pokemon
    useLayoutEffect(() => {
        
       const { height, width } = h1Ref.current.getBoundingClientRect() ;
       setBoxSize({height, width});

    }, [name])

  return (
    <>
        <section
            style={ {  display: "flex" } }
        >
            <h1 ref={ h1Ref }  className="text-capitalize">
                #{ id } - { name }
            </h1>

            { /* Imágenes */}
            <div>
                {
                    sprites.map( sprite => (
                        <img key={ sprite } src={ sprite } alt={ name } />
                    ))
                }
            </div>
        </section>

        <code>{ JSON.stringify(boxSize) }</code>
    </> 
  )
}
