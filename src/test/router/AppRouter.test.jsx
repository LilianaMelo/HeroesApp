import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../autenticacion";
import { MarvelPage } from "../../heroes/pages";
import { AppRouter } from "../../router/AppRouter";

describe('Pruebas en <AppRouter />', () => {

    test('Debe mostrar el login si no está autenticado', () => {
    
        const contextValue = {
            logged: false,
        }


        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={["/marvel"]}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>

        );

        // screen.debug(); 
        expect( screen.getAllByText("Login").length).toBe(1);

    });


    test('Debe mostrar el componente de Marvel si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: "123",
                name: "Pepito Perez"
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={["/login"]}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();
        expect( screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1); 

    })

});