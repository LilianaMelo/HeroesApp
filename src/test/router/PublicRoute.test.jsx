import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../autenticacion";
import { PublicRoute } from "../../router/PublicRoute";


describe('Pruebas en <PublicRoute />', () => { 
    
    test('debe mostrar el children si no esta autenticado ', () => {

        const contextValue = {
            // se le da el estado aqui
            logged: false
        }

        render( // para hacer testing que las rutas se debe tener encuenta el orden del arbol y saber quien contiene al componente PublicRoute-
            <AuthContext.Provider value={ contextValue } >
                <PublicRoute> 
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText("Ruta pública")).toBeTruthy();

        // screen.debug; // 

    });


    test('debe navegar o entrar a la página de marvel si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: "Strider",
                id: "ABC123"
            }
        }

        render( // para hacer testing que las rutas se debe tener encuenta el orden del arbol y saber quien contiene al componente PublicRoute-
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={["/login"]}>

                    <Routes>
                        <Route path="login" element={
                            <PublicRoute> 
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={ <h1>Pagina Marvel</h1>} />
                    </Routes>

                    
                </MemoryRouter>
            </AuthContext.Provider>
        
        );

        // screen.debug();
        expect( screen.getByText("Pagina Marvel")).toBeTruthy();

    })
    
})