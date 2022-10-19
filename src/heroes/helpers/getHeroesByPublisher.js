
import { heroes } from "../data/heroes";

// funcion que filtra de manera manual y regresa la informacion buscada.
export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ["DC Comics", "Marvel Comics"];

    // si los validPublisher incluyen( publisher) entonces enviar un msjs de rror.
    if ( !validPublishers.includes(publisher) ){
        throw new Error( ` ${publisher} no existe ` );
    }


    // si existe entonces retornA LOS HEROES.

    return heroes.filter( heroe => heroe.publisher === publisher );

}