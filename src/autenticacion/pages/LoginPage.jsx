import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    // constante para salir de la pantalla de la app.
    // custom hook, porque no viene directamente de react.
    const navigate = useNavigate();

    const onLogin = () => {
        navigate("/", {
            replace: true
        } );
    }


    return (

        
        <div className='container mt-5'>

            <h1>LoginPage</h1>
            <hr />


            {/* Form en construccion */}

            <form >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Acepto términos y condiciones</label>
                </div>

                <button 
                className='btn btn-warning'
                onClick={ onLogin }
                >
                    Ingresar este siii
                </button>

                </form>

        </div>
    )
}
