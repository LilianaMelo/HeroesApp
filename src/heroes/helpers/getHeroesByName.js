
import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = "" ) => {
    
    // toLowerCase pasar de mayuscula a miniscula
    name = name.toLowerCase().trim();
    
    // no escribio nada, devuelve un arreglo vacio.
    if (name.length === 0 ) return [];

    // superhero : es el nombre del heroe
    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes(name)
    );

    
}
