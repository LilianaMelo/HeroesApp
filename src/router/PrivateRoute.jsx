// rutas privadas...

import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../autenticacion/context/AuthContext';

// children recibe los componentes que van a estar dentro de PrivateRoute
export const PrivateRoute = ({ children }) => {

    // saber si el usuario esta autenticado:
    const { logged } = useContext( AuthContext );
    // console.log( {logged} );

    // const location = useLocation();
    // console.log(location); muestra informacion de key y q=? query parametro de busqueda y demás.

    // es para volver a la pagina anterior, antes de haber salido de la pagina con el logeo.
    const  { pathname, search } = useLocation();

    const lastPath =  pathname + search;

    localStorage.setItem('lastPath', lastPath);
    // console.log("redibujar");

    return ( logged )
        ? children  // si esta autenticado muestra el children
        : <Navigate to="/login" /> // si no navega a otra pantalla(login)
}
