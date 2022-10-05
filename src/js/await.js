import { buscarHeroeAsync } from './promesas';

const heroesIds = ['capi','iron','spider'];

//!Para utilizar el await su condicion es que debe estar dentro de una funcion async
export const obtenerHeroesArr = async() =>{
    const heroesArr =[];

    for( const id of heroesIds){
        const heroe = await buscarHeroeAsync( id );
        heroesArr.push(heroe);
    }

    return heroesArr
}