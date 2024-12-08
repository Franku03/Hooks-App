import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks";


describe('Pruebas en el useCounter', () => {

    test('debe de retornar los valores por defecto', () => {

        const { result } = renderHook( () =>  useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe( 10 );
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));

    });

    test('debe de generar el counter con el valor de 100', () => {

        const { result } = renderHook( () =>  useCounter(100) );
        const { counter } = result.current;
        expect( counter ).toBe( 100 )
    });

    test('debe de incrementar el contador', () => {

        const { result } = renderHook( () =>  useCounter() );
        const { counter, increment } = result.current;
       
        // ¡ Función que nos permite hacer un update al state de react desde el testSuite
        act(() => {
            increment();
            increment(2);
        })

        // ¿ Usamos current porque debemos obtener el valor actual del state, lo que extraemos en el primer counter es estático
        // ¿ Podría decirse que era el estado de ese momento
        expect( result.current.counter ).toBe(13);

    });
    
    test('debe de decrementar el contador', () => {
    
        const { result } = renderHook( () =>  useCounter() );
        const { decrement } = result.current;
       
        act(() => {
            decrement();
            decrement(2);
        })
    
        expect( result.current.counter ).toBe(7);
    
    });

    test('debe de resetear el contador al valor predefinido', () => {
    
        const { result } = renderHook( () =>  useCounter(100) );
        const { increment, reset } = result.current;
       
        act(() => {
            increment(4);
            reset();
        })
    
        expect( result.current.counter ).toBe( 100 );
    
    });
})