import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../autenticacion/context/AuthContext';


export const Navbar = () => {

    // nombre del loginPage
    const { user, logout } = useContext( AuthContext );
    // console.log(user);

    // custom hook, porque no viene directamente de react.
    // revisar en la consola en los components de react en la parte de Navigation.Provider -> props -> value -> navigator
    const navigate = useNavigate();

    // funcion para salir de la pantalla de la app.
    const onLogout = () => {
        // console.log("Logout");

        logout(); // aqui limpia el localStorage y el State. Y luego navega al usuario.
        
        navigate('/login', {
            replace: true  // reemplaza la ruta que yo tengo, y evita q el usuario regrese al la pagina anterior o al historial anterior. Cuando se sale de la app, y esta en el login

        }); // con esto se navega al login
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-warning bg-warning p-2 mb-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Comics
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? "active": "" } ` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? "active": "" } ` } 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? "active": "" } ` } 
                        to="/search"
                    >
                        Buscar
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                <ul className="navbar-nav ml-auto">
                    {/* <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? "active": "" } ` } 
                        to="/login"
                    >
                        Logout
                    </NavLink> */}

                    <span className="nav-item nav-link text-danger">
                        { user?.name  } {/* ? si esto es nulo que no continue, pero si tiene un valor que lo muestre.  */}
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                        Cerrar Sesion
                    </button>

                </ul>
            </div>
        </nav>
    )
}

