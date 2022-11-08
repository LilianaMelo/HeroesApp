import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

    // permite acceso al useCONTEXT, se desestructura el login y se llama al AuthContext
    const { login } = useContext( AuthContext );

    // constante para salir de la pantalla de la app.
    // custom hook, porque no viene directamente de react.
    const navigate = useNavigate();

    const onLogin = () => {
        
        // estaparte permite ir a la ultima pagina donde estuvo el usuario antes de cerrar sesion.
        const lastPath = localStorage.getItem('lastPath') || '/'
        
        login( "Liliana Melo" ); // aqui se manda a llamar al login. funcion sincrona.
        
        // '/' se cambio por lastPath
        navigate( lastPath , {
            replace: true
        });
    }

    return (        
        <div className='container mt-5'>
            <h1 className='text-center'>Login</h1>
            <hr />

            {/* Form en construccion */}
            <div className='row d-flex justify-content-center'>
                <div className='col-sm-8'>
                    <form >
                        <div className="mb-3 mt-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Usuario:</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div className="form-text">Se requiere que ingreses algún nombre.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña:</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button 
                        className='btn btn-warning btn-block'
                        onClick={ onLogin }
                        >
                            Ingresar
                        </button>
                        <div className="form-text">Página demo con React, solo debes ingresar un nombre y dar click en ingresar.</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

