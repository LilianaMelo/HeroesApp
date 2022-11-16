import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

    // verificar input::
    const [user, setUser] = useState({ campo: "", valido: null });

    const inputChange = (e) => {
        setUser({ ...user.campo, campo: e.target.value });
    }
    console.log(user.campo);

    // expresiones regulares:
    const expressions = {
        user: /^[a-zA-Z0-9_-]{4,16}$/, // letras, numeros, guion (-) guion bajo (_)
        password: /^.{4,12}$/ // de 4 a 12 digitos.
    }


    // Validacion: // .test es una palabra reservada para hacer los test.
    const validacion = () => {
        if(expressions){
            if(expressions.user.test(user.campo)){
                console.log("Input Correcto");
                setUser({...user, valido: true });
            } else {
                console.log("Input Incorrecto");
                setUser({...user, valido: false });
            }
        }
    }


    // permite acceso al useCONTEXT, se desestructura el login y se llama al AuthContext
    const { login } = useContext( AuthContext );

    // constante para salir de la pantalla de la app.
    // custom hook, porque no viene directamente de react.
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();
        
        // esta parte permite ir a la ultima pagina donde estuvo el usuario antes de cerrar sesion.
        const lastPath = localStorage.getItem('lastPath') || '/'
        
        // login( "Liliana Melo" ); // aqui se manda a llamar al login. funcion sincrona.
        //login(user.campo); // aqui se manda a llamar al login. funcion sincrona.
        
        // '/' se cambio por lastPath
        // navigate( lastPath , {
        //     replace: true
        // });

        if (user.valido === true ) {
            login(user.campo);
            navigate( lastPath , {
                replace: true
            });
        } else {
            navigate( lastPath , {
                replace: false
            });   
        }
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

                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder='Usuario'

                                onChange={inputChange}
                                value={user.campo}
                            
                                onKeyUp={validacion}
                                onBlur={validacion}
                            
                            />

                            {
                                user.valido === false && <div className="form-text" style={{ color: "red"}} > ⚠️ Se requiere que ingreses algún nombre, no debe incluir espacios.</div>
                            }
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label"  >Contraseña:</label>
                            <input type="password" className="form-control" placeholder='Contraseña' disabled />
                        </div>

                        <button 
                        type='submit'
                        className='btn btn-warning btn-block'
                        onClick={ onLogin }
                        >
                            Ingresar
                        </button>
                        <div className="form-text"> Página demo con React, solo debes ingresar un nombre y dar click en ingresar.</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

