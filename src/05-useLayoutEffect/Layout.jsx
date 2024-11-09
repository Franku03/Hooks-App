import { LoadingMessage, PokemonCard } from "../03-examples";
import { useCounter, useFetch } from "../hooks"


export const Layout = () => {

  const { counter, decrement, increment} = useCounter(1);
  const { data, hasError, isLoading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
        <h1>Información de Pokémon</h1>
        <hr />

        {
            isLoading 
            ? <LoadingMessage />
            : (
              <PokemonCard 
                id={ data.id } 
                name={ data.name } 
                sprites={ [
                  data.sprites.front_default,
                  data.sprites.back_default,
                  data.sprites.front_shiny,
                  data.sprites.back_shiny,
                ] }
              />
            )
        }

        { 
          hasError && <h2>{ error?.code } - Not Found</h2> 
        }

        {/* <h2>{ data?.name }</h2> */}
        {/* <pre>{ data && JSON.stringify( data, null, 2 )}</pre> */}

        <button
          className="btn btn-primary mt-2"
          onClick={ () => counter > 1 ? decrement() : null }
        > 
          Anterior
        </button>
        <button
          className="btn btn-primary mt-2"
          onClick={ () => increment() }
        >
          Siguiente
        </button>

    </>
  )
}
