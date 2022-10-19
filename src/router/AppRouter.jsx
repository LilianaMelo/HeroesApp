// este es el nombre del router principal.aaaa
// se crea un nuevo directorio para menejar todas las rutas de la app.
// Primero se configura el archivo de las rutas.

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { LoginPage } from '../autenticacion';


export const AppRouter = () => {

    return (
        // screencast Mode permite que parezca un cirulo rojo en el cursor y letreros de las teclas que se oprimen.
        // se puede colocar el path='login' sin /

        <>



            <Routes>
                
                <Route path='login' element={ <LoginPage/> } />

                <Route path='/*' element={ <HeroesRoutes /> } />


            </Routes>
        
        </>
    )
}
