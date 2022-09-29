import '../css/componentes.css'
// import webpacklogo from '../assets/imgs/webpack-logo.png';
//Si queremos exportar en este caso la funcion saludar, debemos colocar la palabra export al inicio de la f
export const saludar = (nombre) =>{
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola, ${nombre}!!!`;
    document.body.append(h1);


    // console.log(webpacklogo);
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);
}
