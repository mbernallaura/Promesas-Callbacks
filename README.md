# Uso del Webpack en un proyecto .JS

En este proyecto .js se hizo uso del webpack para saber sus multiples beneficios, entre ellos, se encontaran en estos archivos tales como

* El uso para conectar los diferentes modulos que se tengan en el proyecto utilizando el import ademas de utlizarlos como variable para posteriormente hacer uso de este mismo

* Poder utilizar los estilos en los diferentes archivos tanto .js como .html

* La incorporacion de las imagenes

* Aplicar los diferentes estilos que se tenian para distintos archivos

* Minificar, los archivos que se suban a produccion como un protocolo de seguridad, y sean mas dificiles de leer 

Lo anteriormente mencionado fue configurado en los archivos webpack que se hicieron para los diferntes entornos y cada uno de ellos, se tuvieron en cuenta las reglas y sus excepciones, como funcionan los pluguins con sus repectivas constantes previamente inicializadas, de acuerdo a la guia de estos mismos que se pueden encontrar en la pag oficial de webpack.

Tambien se hizo el correcto uso del archivo package.json, en donde se conecto los scripts que se realizaron para diferenciar el entorno de trabajo, en este caso desarrollo y produccion.

### Notas:
Recordar que la reconstruccion de los modulos de Node para que funcione el proyecto correctamente:

```
npm install
```

Y para construir el build (Archivos de produccion):

```
npm run build
```



