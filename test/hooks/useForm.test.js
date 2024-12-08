import { act, renderHook, waitFor } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Franku',
        email: 'franku@gmail.com',
    }


    test('debe de regresar la información por defecto ', () => {

        const { result } = renderHook( () => useForm( initialForm ) );
        expect(result.current).toEqual(    {
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
          });

    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Pedro';
        
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;

        act( () => {
            onInputChange( { target: { value: newValue, name: 'name'}} )
        });
        
        expect( result.current.name ).toEqual( newValue );
        expect( result.current.formState.name ).toEqual( newValue );

    });

    test('debe de realizar el reset del formulario', () => {

        const newValue = 'Pedro';
        
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            onInputChange( { target: { value: newValue, name: 'name'}} );
            onResetForm();
        });
        
        expect( result.current.name ).toEqual( initialForm.name );
        expect( result.current.formState.name ).toEqual( initialForm.name );

    });
    
})