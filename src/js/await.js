import { buscarHeroeAsync } from './promesas';

const heroesIds = ['capi','iron','spider'];

//!Para utilizar el await su condicion es que debe estar dentro de una funcion async
export const obtenerHeroesArr = async() =>{
    const heroesArr =[];

    //*El await no es recomendable que este dentro de un await
    //?Hacer el await cuando ya todos los procesos ya esten realizados
    for( const id of heroesIds){
        // const heroe = await buscarHeroeAsync( id );
        // heroesArr.push(heroe);
        heroesArr.push(buscarHeroeAsync( id ))
    }

    return await Promise.all(heroesArr);
}

//*Hacer de manera elegante lo anterior
export const obtenerHeroesArr2 = async() =>{
    //!El primer elemento que se encuentra del primer arreglo es el que se manda en la funcion que esta 
    //!como argumento en este buscarHeroeAsync()
    return await Promise.all(heroesIds.map( buscarHeroeAsync ));
}