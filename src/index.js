//* Para que no halla error ya que tienen el mismo nombre de funcion se le puede dar un alias
//* para eso se coloca AS y el nombre que se quiera poner
import { buscarHeroe as buscarHeroeCallbacks} from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

//! Callback = Funcion que es enviada por un argumento y son sincronas, es decir que no sigue el codigo
//! hasta que se resuleva el callback
// buscarHeroe(heroeId1, (err, heroe1)=>{
//     // if(err){
//     //     console.error(err);
//     // }else{
//     //     console.info(heroe);
//     // }

//     //Manera corta de realizar lo anterior
//     if(err){return console.error(err);}

//     buscarHeroe(heroeId2, (err, heroe2) =>{
//         if(err){return console.error(err);}
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });
// });

//! Las promesas son ASINCRONAS, es decir se pueden ejecutar a destiempo, para el caso de las 
//! promesas, estas pasan a segundo plano previniendo que se bloquee el codigo de js y cuando 
//! y cuando se resuleven regresan a la cola normal de procesos 
//! Estas tienen metodos como:
//* .catch = Cuando se tiene un error
//* .finally = Se utiliza para hacer limpiezas y se ejecuta despues del ".then" o el ".catch"
//* .then = Cuando todo sucede correctamente
//? .then = Recibe un callback de agumento
buscarHeroe( heroeId1 ).then( heroe => {
    console.log(`Enviando a ${heroe.nombre} a la mision`);
});

console.log('Fin del programa');