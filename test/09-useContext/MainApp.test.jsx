import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <MainApp />', () => {

    test('debe de mostrar el HomePage', () => {

        // ¿ El MemoryRouter es el sustituto del BroswerRouter para la consola
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage') ).toBeTruthy();

        // screen.debug();

    });


    test('debe de mostrar el LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        const anchor = screen.getAllByRole('link')
                             .find( anchor => anchor.href.includes('/Login') );


        expect( screen.getByText('LoginPage') ).toBeTruthy();
        expect( anchor.className ).toBe('nav-link active');

        // screen.debug();

    });


});