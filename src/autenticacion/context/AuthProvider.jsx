// usa el authContext. con el objetivo
// este archivo o componente es el que provee la informacion a todos los componentes y toda la aplicacion.

import React, { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

// const initialState = {
//     logged: false,
// }

// mantener el usuario activo
const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );

    return {
        logged: !!user, // si user existe esto va a estar en true.
        user, // si existe muestra el user.
    }
}


export const AuthProvider = ({ children }) => {

    // control sobre el estado es mejor un reducer.
    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    const login = ( name = "" ) => {

        const user = { id: "ABC", name }

        const action  = { 
            type: types.login,
            payload: user
        }

        // guarda info en localStorage.
        // al localStorage solo se puede enviar strings.
        localStorage.setItem("user", JSON.stringify(user) );

        dispatch(action);  
    }

    // funcion de logout, saca al usuario del login 
    const logout = () => {
        localStorage.removeItem("user");
        const action = { type: types.logout };
        dispatch( action );
    }


    return (
        <AuthContext.Provider value={{ 
            ...authState, // propiedades o atributos.

            // metodos.
            login,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    )
}
