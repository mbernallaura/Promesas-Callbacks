//Para Utilizar os webpack de pluguins por lo general se reqieren hacer constantes
const htmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports ={
    mode: 'production',

    //output, clean: crea sobre el archivo ya creado las modificaciones sin crear uno nuevo cada vez que se cree otro 
    output: {
        clean: true,
        //Para nombrar nuestro archivo .js
        filename: 'main.[contenthash].js'
    },

    module: {
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                options:{
                    sources: false 
                }
            },
            {
                //Tambien se puede especificar el archivo ejm (/\componentes.css$/)
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer:[
            new CssMinimizer(),
            new Terser(),
        ]
    },

    plugins:[
        //Crea el html con las relaciones de archivos .js si no tiene nada adentro de los parentesis
        new htmlWebPack({
            //title: Para que en la carpea de produccion llamada dist, en el archivo html se cambie de nombre
            title: 'Mi Webpack App', 
            //filename: renombrar el archivo html
            filename: 'index.html',
            //template: Archivo de html con el cual se base para realizar las modificacines en produccion (dis),
            //y que a la hora de modificarlo en desarrollo a la hora de ejecutar el npm se pasen todos los cambios a produccion
            template: './src/index.html',
        }), 

        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
                //Origen, destino
                {from: 'src/assets/', to: 'assets/'}
            ]
            
        })
    ]
}