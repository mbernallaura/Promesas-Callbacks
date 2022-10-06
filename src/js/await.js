import { buscarHeroe2, buscarHeroeAsync } from './promesas';

const heroesIds = ['capi','iron','spider'];
const heroesPromesas = heroesIds.map(id => buscarHeroe2(id)); //Arreglo de 3 promesas

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
};

export const obtenerHeroeAwait = async( id ) =>{
    //*Manejar errores de una funcion con await
    //!Cuando se ejecuta el trycatch dentro de una funcion async, para que funcione el catch de 
    //!afuera, lo que se tiene que hacer es que enn el catch se coloque throw y el error 
    try {
        const heroe = await buscarHeroeAsync ( id );
        return heroe;
    } catch (error) {
        // throw `Catch: ${error}`;
        //*Se puede devolver un valor por defecto en caso que no funcione lo esperado
        return{
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }

}

export const heroesCiclo = async() =>{
    console.time('HeroesCiclo');
    
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach( console.log )

    //Lo mismo que lo anterior
    for await(const heroe of heroesPromesas){
        console.log(heroe);
    }

    //!El await se puede utilizar tambien dentro de un console.log
    //heroesPromesas.forEach(async(p) => console.log(await p))

    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async( id ) =>{
    //!El await sirve para transformar una promesa a el resultado que se espera
    if((await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('El mejor de todos');
    }else{
        console.log('Nel');
    }
}
