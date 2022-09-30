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