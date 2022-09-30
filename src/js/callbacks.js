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
//* Cuando se tienen muchos callbacks anidados se le conoce como CALLBACK HELL, ya que
//* Esto es llamado asi porque es insostenible el codigo con tantos callbacks
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