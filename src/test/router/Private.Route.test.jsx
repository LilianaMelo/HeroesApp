import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../autenticacion/context/AuthContext"
import { PrivateRoute } from "../../router/PrivateRoute"

describe("pruebas en el <PrivateRoute />", () => {

    test("debe mostrar el children si está autenticado", () => {

        // evaluar el localStorege: // se debe sobreescribir...el prototipe en el localStorage.
        Storage.prototype.setItem = jest.fn();
        // localStorage.setItem = jest.fn(); // de esta forma no se puede usar, ya que sale error.

        const contextValue = {
            logged: true,
            user: {
                id: "123",
                name: "Pepito Perez"
            }
        }
    
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={["/search?q=batman"]}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter> {/* el error de useLocation se corrige poniendo el <MemoryRouter> */}
            </AuthContext.Provider>
        );
    
        expect( screen.getByText("Ruta privada")).toBeTruthy();

        // localStorage
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search?q=batman");


    })

    

})