import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

//*Callback = Funcion que es enviada por un argumento
buscarHeroe(heroeId1, (err, heroe1)=>{
    // if(err){
    //     console.error(err);
    // }else{
    //     console.info(heroe);
    // }

    //Manera corta de realizar lo anterior
    if(err){return console.error(err);}

    buscarHeroe(heroeId2, (err, heroe2) =>{
        if(err){return console.error(err);}
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    });
});