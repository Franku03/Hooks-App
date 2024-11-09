import { useEffect, useState } from "react"

const localCache = {}

export const useFetch = ( url ) => {
  
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setstate({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });
  }

  const getFetch = async () => {

    // Revisa si la petición ya se hizo antes y se encuentra en memoria
    if( localCache[url] ) {
      console.log('Usando caché');

      setstate({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });

      return;
    }

    // Coloca la pantalla de carga
    setLoadingState();

    // Petición http
    const resp = await fetch( url );

    // Espera dos segundos para continuar ejecución (Motivos didácticos)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Si no hubo respuesta afirmativa, devuelve error
    if( !resp.ok ) {
        setstate({
            data: null,
            isLoading: false,
            hasError: true,
            error: {
                code: resp.status,
                message: resp.statusText,
            }
        });
        return;
    }

    // Si hay data, obtiene el json de esta
    const data = await resp.json();

    // Coloca en el estado la nueva data a mostrar
    setstate({
        data: data,
        isLoading: false,
        hasError: false,
        error: null,
    });

    // ¿ Manejo del Caché: 

    localCache[url] = data;

  };
  
  
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
  }
}
