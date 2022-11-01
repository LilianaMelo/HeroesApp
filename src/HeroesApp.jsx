
import React from 'react';
import { AuthProvider } from './autenticacion';
import { AppRouter } from './router/AppRouter';

export const HeroesApp = () => {
    return (
        
        // AuthProvider : sirve para compartir la informacion que esta en  AuthProvider en toda la apliacacion, en pantallas autenticas y no autenticadas.
        
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
