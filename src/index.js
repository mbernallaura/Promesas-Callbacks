import {promesaLenta, promesaMedia, promesaRapida} from './js/promesas';

// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );

//*Prommise.race() = Permite ejecutar multiples promesas y obtener la respuesta de la promesa que 
//*Se resuelva mas rapido
//!No importa si alguna da error antes que la promesa mas rapida, lo obvia y vota la respuesta
//!Si la promesa mas rapida tiene un error, eso es lo que nos mostrara
Promise.race([promesaLenta, promesaMedia, promesaRapida])
        .then(console.log);