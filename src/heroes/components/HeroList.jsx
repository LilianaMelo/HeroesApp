import React, { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers';


export const HeroList = ({ publisher }) => {
    
    // Aqui se memoriza la función con useMemo, 
    const heroes = useMemo( () =>  getHeroesByPublisher( publisher ), [publisher] );

    // const heroes = getHeroesByPublisher( publisher );
    
    return (
        
        <>
            <div className="row rows-cols-3 row-cols-md-3 g-3" >
           
                {
                    heroes.map(hero => (
                        <HeroCard key={ hero.id } 
                        { ...hero }
                        />
                    ))
                }

                {/* <div className="card"  { maxWidth: 540 } >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> */}
            </div>
        </>

    )
}
