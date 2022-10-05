const heroes = {
    capi:{
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron:{
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider:{
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las picaduras de araña'
    }
}

export const buscarHeroe = ( heroeId ) =>{
    const heroe = heroes[heroeId];

    //*Adentro de la promesa recibe un callback y este recibe dos argumentos, ambas son opcionales
    //* Resolve= Cuando se resuelve la promesa
    //* Reject= Cuando se rechaza la promesa o cuando esta falla
    return new Promise(( resolve, reject ) => {
        if(heroe){
            //*Se puede enviar, varios argumentos 
            resolve(heroe);
        }else{
            //*Mandar un error
            reject(`No existe un heroe con el id ${heroeId}`);
        }
    });
}

//!Forma de hacer lo anterior utilizando Async
//?Cuando hay la palabra async en una funcion, esto por defecto ya devuelve una promesa y no 
//?Se tiene que hacer el return de la new Promise
export const buscarHeroeAsync = async( heroeId ) =>{
    const heroe = heroes[heroeId];

    if(heroe){
        //*En la funcion con async, se pone return y lo que se resuelve, es decir lo que vienen 
        //*siendo el resolve en una funcion que no tiene el async
        return heroe;
    }else{
        //!Cuando se sabe que error se esta manejando solo se coloca THROW
        //!Sin embargo cuando no se sabe cual es el error, se coloca throw Error( elError )
        throw `No existe un heroe con el id ${heroeId}`;
    }
}

const promesaLenta = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Promesa Rapida'), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}