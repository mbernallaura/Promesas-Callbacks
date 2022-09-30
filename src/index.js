import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId = 'iron';

//*Callback = Funcion que es enviada por un argumento
buscarHeroe(heroeId, (err, heroe)=>{
    if(err){
        console.error(err);
    }else{
        console.info(heroe);
    }
});