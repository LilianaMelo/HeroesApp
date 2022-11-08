import { types } from "../../../autenticacion";

describe('Pruebas en el componente "types.js', () => { 

    test("debe regresar estos types", () => {

        // console.log(types)
        expect(types).toEqual({
            login: "[Auth] Login",
            logout: "[Auth] Logout",
        })

    } )

})