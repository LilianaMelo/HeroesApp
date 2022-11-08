// rutas publicas

import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../autenticacion'

export const PublicRoute = ({ children }) => {
    
    const { logged } = useContext( AuthContext );  // obtiene la informacion del useContext.

    // protege a sus hijos si no esta atenticado 
    
    // ! es negacion
    return ( !logged ) // si no esta autenticado
        ? children // voy a mostrar los hijos
        : <Navigate to="/marvel" />
}
