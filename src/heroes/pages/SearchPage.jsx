import { useLocation, useNavigate } from 'react-router-dom';
import queryString from "query-string"; // se importa del paquete instalado.

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {

    // para saber la localizacion para saber donde estamos en que pagina. o heroe.
    const location = useLocation() ;
    // se instala un paquete query-string
    // console.log(location);

    // query parametro con la libreria de queryString. // son opcionales -> muestra el nombre de lo que se esta buscando en el cuadro rojo
    const { q = "" } = queryString.parse( location.search );
    // console.log(query);


    // Busqueda:
    const heroes = getHeroesByName(q);

    // esta condicion ya regresa un valor booleano (true o false)
    const showSearch = (q.length === 0);

    const showError = (q.length > 0) && heroes.length === 0;

    // usar el form
    const { searchText, onInputChange } = useForm({
        searchText: q // el mismo nombre del name del input

    });


    // navegar a otra pagina
    const navigate = useNavigate();

    const onSearchSubmit = (e) => {
        e.preventDefault();
        // console.log({ searchText });

        // if (searchText.trim().length <= 1) return;
        
        console.log("desde testing... 'FORM' ") // con esto se conforma que si se esta haciendo el submit o envio del formulario en la prueba.

        // ?q=${ searchText } estos es un query parametro.
        navigate(`?q=${ searchText }`);   
    }



    return (
        
        <>
            <h1>Búsqueda</h1>
            <hr />

        <div className='row'>

            <div className="col-5">
                
                <h4>Búsquedas</h4>

                <form onSubmit={ onSearchSubmit } aria-label="form" >
                    <input 
                        type="text"
                        placeholder='Buscar heroe'
                        className='form-control'
                        name='searchText' // para tomar el valor del input y ponerlo en algun lugar
                        autoComplete='off'
                        value={ searchText }
                        onChange={ onInputChange }
                    />

                    <button className='btn btn-outline-warning mt-3'>
                        Buscar
                    </button>
                </form>
            </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>

                    {/* {
                        ( q === "")
                        ? <div className='alert alert-primary'>Buscar heroe</div>
                        : (heroes.length === 0 )
                            && <div className='alert alert-danger'>No hay un heroe con <b>{ q }</b> </div>
                    }  esta es una forma de hacerlo. */}

                    <div 
                        className='alert alert-primary animate__animated animate__fadeIn' 
                        style={{ display: showSearch ?  "" : 'none' }}>
                        Buscar heroe
                    </div>

                    {/* se pone este nombre aria-label='alert-danger' para poder hacer la prueba del test en SearchPage.test.jsx */}
                    <div aria-label='alert-danger'
                        className='alert alert-danger animate__animated animate__fadeIn' 
                        style={{ display: showError ? "" : "none" }}>
                        No hay un heroe con <b>{ q }</b> 
                    </div>

                    {
                        heroes.map( hero => (
                            <HeroCard
                                key={ hero.id }
                                {...hero} 
                            /> 
                        ))
                    }

                </div>
            </div>    
        </>

    )
}

// proteccion de rutas publicas y privadas: se crea carpeta de context y types, dentro de atenticacion.

