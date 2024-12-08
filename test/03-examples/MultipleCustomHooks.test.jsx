import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch" // Cuando hacemos mocks es mejor apuntar directo al archivo y no al index
import { useCounter } from "../../src/hooks/useCounter";

// ¿ Se inician los mocks de cada hook
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {

    // ? Se inician las funciones mock que sustituiran a las del useCounter
    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();

    // ? Se inicia el valor de retorno que dará el useCounter en cada prueba
    useCounter.mockReturnValue({
        counter: 2,
        increment: mockIncrement,
        decrement: mockDecrement,
    })

    //? Se resetean todos los mocks antes de cada prueba
    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        });

        render(<MultipleCustomHooks />);

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText('Información de Pokémon'));

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});

        expect( nextButton.disable ).toBeFalsy();

        // screen.debug();

    })

    test('debe de mostrar los sprites de un Pokemon', async() => {

        useFetch.mockReturnValue({
            data: { 
                id:1, 
                name:'bulbasaur', 
                sprites:{
                    front_default: 1,
                    back_default: 2,
                    front_shiny: 3,
                    back_shiny: 4,
                }
            },
            isLoading: false,
            hasError: false,
            error: null,
        });

        render(<MultipleCustomHooks />);
        expect( screen.getByText('#1 - bulbasaur') ).toBeTruthy(); 
        expect( screen.getAllByRole('img', {name: 'bulbasaur'}).length ).toEqual(4);

        const nextButton = screen.getByRole('button', {name: 'Siguiente'})
        expect( nextButton.disable ).toBeFalsy();

        // screen.debug();


    })

    test('debe de llamar la función de incrementar', () => {

        // const { increment } = useCounter();

        useFetch.mockReturnValue({
            data: { 
                id:1, 
                name:'bulbasaur', 
                sprites:{
                    front_default: 1,
                    back_default: 2,
                    front_shiny: 3,
                    back_shiny: 4,
                }
            },
            isLoading: false,
            hasError: false,
            error: null,
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Siguiente'})

        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

        // screen.debug()
    });


    test('debe de llamar la función de decrementar', () => {

        useFetch.mockReturnValue({
            data: { 
                id:1, 
                name:'bulbasaur', 
                sprites:{
                    front_default: 1,
                    back_default: 2,
                    front_shiny: 3,
                    back_shiny: 4,
                }
            },
            isLoading: false,
            hasError: false,
            error: null,
        });

        render(<MultipleCustomHooks />);

        const beforeButton = screen.getByRole('button', {name: 'Anterior'})
        fireEvent.click( beforeButton );

        expect( mockDecrement ).toHaveBeenCalled();
    });


})