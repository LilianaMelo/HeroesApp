import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../heroes/pages/SearchPage";


// mock
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));


describe("Pruebas en <SearchPage />", () => {

    // siempre que se hace un mock se debe hacer esto, para limpiar los mock de otras funciones.
    beforeEach(() => jest.clearAllMocks() );

    test('debe mostrar correctamente con valores por defecto', () => {

        const {container} = render(
            // para identificar en que url estoy.
            <MemoryRouter > 
                <SearchPage />
            </MemoryRouter>
        );
        // screen.debug();
        expect( container ).toMatchSnapshot(); 
        // fotografia del componente. en la carpeta de test/heroes/pages/snapshot/ searchpage
    });

    test('debe mostrar a Batman  y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        );
        // screen.debug();
        
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

        {/* se pone este nombre aria-label='alert-danger' para poder hacer la prueba del test en SearchPage.jsx */}
        const divAlert = screen.getByLabelText('alert-danger');
        // console.log(divAlert.style.display);
        expect( divAlert.style.display ).toBe('none');

    });


    // Tarea:

    test('debe mostrar un error si no se encuentra el heroe (batman123)', () => {

        render(
            <MemoryRouter initialEntries={["/search?q=batman123"]}>
                <SearchPage />
            </MemoryRouter>

        );

        const alert = screen.getByLabelText("alert-danger");
        expect(alert.style.display).toBe("");

    });

    test('debe llamar el navigate a la pantalla nueva', () => {

        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={["/search"]}>
                <SearchPage />
            </MemoryRouter>
        );
        
        const input = screen.getByRole("textbox");

        //  name: 'searchText' del div a evaluar en el SearchPage
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue }})
        // console.log(input.value);


        // se puso el nombre de aria-label="form" en el archivo de SearchPage para que permita hacer la prueba.
        const form = screen.getByRole("form"); 
        fireEvent.submit( form );
        

        // hacer un mock parcial
        expect( mockedUseNavigate ).toHaveBeenCalledWith( `?q=${inputValue}` );

        /* Hola! Para disparar el evento submit sin agregar el aria-label al form lo que hice fue esto:

        const input = screen.getByRole( "textbox" );
        fireEvent.change( input, { target: { value: "superman" } });
        fireEvent.submit( input ); 

        Directamente ocupé el método submit en el input y funcionó.
        */

    });

});