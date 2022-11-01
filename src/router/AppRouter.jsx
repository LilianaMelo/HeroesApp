// este es el nombre del router principal.aaaa
// se crea un nuevo directorio para menejar todas las rutas de la app.
// Primero se configura el archivo de las rutas.

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { LoginPage } from '../autenticacion';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    return (
        // screencast Mode permite que parezca un cirulo rojo en el cursor y letreros de las teclas que se oprimen.
        // se puede colocar el path='login' sin /
        // Ruta principal.

        <>
            <Routes>
                
                {/* <Route path='login' element={ <LoginPage/> } /> */}

                {/* esta es una forma de hacerla... */}
                <Route path='/login' element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                    }
                />

                
                {/* <Route path='login/*' element={
                    <PublicRoute>
                        <Routes>
                            <Route path='/*' element={ <LoginPage/> } />
                            {/* <Route path='/*' element={ <LoginPage/> } /> // se pueden poner más rutas hijas o publicas... * //
                        </Routes>
                    </PublicRoute>
                    }
                />  */}


                {/* esta ruta es para hacer las rutas privadas y dentro de ella va la ruta de HeroesRoute */}
                <Route path='/*' element={
                    <PrivateRoute>
                        <HeroesRoutes />        
                    </PrivateRoute>
                } /> 

                {/* <Route path='/*' element={ <HeroesRoutes /> } /> */}

            </Routes>

        </>
    )
}
