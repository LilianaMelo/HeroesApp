import React from 'react'
import { Link } from 'react-router-dom';

// componente dentro, para que sea m}as legible.
const CharactersByHero = ({alter_ego, characters}) => {
    // if (alter_ego === characters) return (<></>); // regresa un fragmento, que es vacio.
    // return <p>{ characters }</p>

    // otra forma de hacerlo::
    return (alter_ego === characters)
        ? <></>
        : <p>{ characters }</p>;
}

export const HeroCard = ({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters,

}) => {
    // const heroImageUrl = `/assets/heroes/${id}.jpg`;
    // const charactersByHero = (<p>{ characters }</p>);
    
    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card mt-3'>
                <div className='row no-gutters'>
                    <div className='col-4 ' >
                        <img src={ `./assets/heroes/${id}.jpg` } alt={superhero} className='card-img'/> 
                        {/* para que funcione  `./assets/heroes/${id}.jpg`, dentro de assets debe ir otra carpeta llamada heroes y dentro de esta las imgs.  */}
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{ superhero }</h5>
                            <p className='card-text'>{ alter_ego }</p>

                            { // alter_ego si es diferente a los personajes interpretados si es asi: entonces muestra el parrafo
                               // (alter_ego !== characters ) && (<p>{ characters }</p>)
                               // esta es una forma de hacerlo en vez de <CharactersByHero />

                               // (alter_ego !== characters ) && charactersByHero
                            }

                            <CharactersByHero characters={characters} alter_ego={alter_ego} />

                            <p className='card-text'>
                                <small className='text-muted'>{ first_appearance }</small>
                            </p>
                    {/* // se debe poner /hero/ eslash al final antes del id, para que funcione. */}
                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
