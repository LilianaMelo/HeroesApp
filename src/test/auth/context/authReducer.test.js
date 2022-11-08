import { authReducer, types } from "../../../autenticacion";


describe("Pruebas en authReducer", () => {

    test("Debe retornar(regresar) el estado por defecto", () => {

        const state = authReducer({ logged: false }, {});

        expect( state ).toEqual({ logged: false });
        
    } )




    test("El (login) debe llamar el login atenticar y establecer el user", () => {

        const action = {
            type: types.login,
            payload: {
                name: "Pepito",
                id: "123"
            }
        }

        const state = authReducer({ logged: false }, action );

        expect( state ).toEqual({
            logged: true,
            user: action.payload
        });
        
    } )

    test(" El (logout) debe borrar el name del usuario y logged en false", () => {

        const state = { // se simula que el logged esta en true. para entrar a la app
            logged: true,
            user: { 
                id: "123",
                name: "Pepito"
            } 
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action );
        // console.log(newState);

        expect( newState).toEqual({ logged: false })
    } )
});