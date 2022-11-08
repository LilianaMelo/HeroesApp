import { types } from "../types/types";

// reducer manejo de estado
// control sobre el estado reducer
export const authReducer = ( state = {}, action ) => {

    // no se puede llamar el localStorage aqui.
    // ni console.log , ni api externa, no llaman informacion que se encuentra fuera de este reducer.

    switch ( action.type ) {

        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        
        case types.logout:
            return {
                logged: false, // aqui se quita el name, porque ya no estar en el state el nombre.
            };

        default:
            return state;
    }
}
