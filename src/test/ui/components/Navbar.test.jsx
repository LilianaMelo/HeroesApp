import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../autenticacion/context/AuthContext";
import { Navbar } from "../../../ui-interfaz-grafica/components/Navbar";

// mock
const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({ // objeto literal dentro de los corchetes.
    ...jest.requireActual("react-router-dom"),// toma todo lo que trae la libraria y solo se va a sobre escribir el useNavigate.
    useNavigate: () => mockedUseNavigate // aqui va a regresar el mock
}) );


describe('Pruebas en <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: "Pepito Perez",
        },

            // se llama el logout de Authprovider.. esta funcion es la que se evalua con jest.fn()
            logout: jest.fn()
        }

        beforeEach(() => jest.clearAllMocks() ); // limpia las funciones jest. Se usa solo con jest

    test('Debe mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();:: muestra el codigo html del navbar.
        expect( screen.getByText("Pepito Perez") ).toBeTruthy(); // "Pepito Perez" eso tiene que existir.

    });



    test('Debe llamar el logout y navigate cuando se hace click en el botón de logout', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>   
        );

        const logoutBtn = screen.getByRole("button");
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();

        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});

    });

});

