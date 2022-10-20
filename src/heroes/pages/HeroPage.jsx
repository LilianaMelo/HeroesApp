import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

    const { id } = useParams(); // sirve para tener los parametros. 
    
    // se usa useMemo para memorizar los valores
    // useMemo va a dispara el callback cada vez que sus dependencias cambien, las dependencias son [id].
    const hero =  useMemo( () => getHeroById( id ), [id] );

    // const hero =  getHeroById( id );
    console.log(hero);

    // useMemo: para memorizar valores.
    // useCallback: para memorizar funciones.


    // esta es la parte para regresar a la pagina anterior.
    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate( -1 ); // esto mira el historial y regresa a la ultima página.
    }




    // si no tenemos un hero. esta condicion que regresa un jsx se debe poner antes del return.
    if (!hero) {
        return <Navigate to="/marvel" /> // Navigate que hace la redirección
    }

    return (
        <div className='row mt-5'>
            
            <div className='col-4'>
                <img
                    src={ `/assets/heroes/${ id }.jpg` }
                    alt={ hero.superhero }
                    className='img-thumbnail'
                />
            </div>

            <div className="col-8">  {/* // es el espacio restante. */}

                <h3> { hero.superhero } </h3>
                <ul className='list-grouop list-group-flush'>
                    <li className='list-group-item'> <b>Alter ego:</b> { hero.alter_ego } </li>

                    <li className='list-group-item'> <b>Editorial:</b> { hero.publisher } </li>

                    <li className='list-group-item'> <b>Primera aparición:</b> { hero.first_appearance } </li>

                </ul>

                <h5 className='mt-3'> Personajes </h5>
                <p>{ hero.characters }</p>

                <button 
                    className='btn btn-outline-warning'
                    onClick={ onNavigateBack }
                >
                    Regresar
                </button>

            </div>

        </div>
    )
}
