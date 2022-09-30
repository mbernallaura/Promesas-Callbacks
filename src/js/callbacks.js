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

//* Primero se ejecuta la funcion buscarHeroe y luego el callback de forma secuencial
export const buscarHeroe = (heroeId, callback) =>{
    const heroe = heroes[heroeId];

    //Si existe el heroe
    if(heroe){
        callback(null, heroe);
    }else{
        // Un error
        callback(`No existe un heroe con el id ${heroeId}`);
    }
    
    //callback(heroe);
}