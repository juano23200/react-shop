/* Se crea la variable path a la cual se le va a signar un require el cual va a
   ayudar a traer un elemnto, para lo cual path ya esta disponible en Node asi que
   no hay que hacer una instalacion de dependencias  ni nada.*/
   const path = require('path');//Nos permite saber en donde esta ubicado nuesto proyecto.

/* Se añade el recurso-plugin a nuestro proyecto*/
/* Se hace el llamado al recurso que instalamos  
   Se añade el plugin a nuestro documento-proyecto*/
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* Se hace el llamado al recurso que instalamos  
   Se añade el plugin a nuestro documento-proyecto*/
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

   /* Creacion de un modulo que se va a exportar con un objeto, con la configuracion
      deseada */
   module.exports = {
     //Creacion de un objeto, en donde le vamos a añadir todas
     //las configuraciones, las cuales son:

     entry: "./src/index.js", //Nos va permitir decir cual es (enn donde esta) el punto de entrada de nuestra aplicacion
     //Se establece cual es el elemento inicial de nuestra aplicacion
     //Output permite indicar hacia donde vamos a enviar lo que va a preparar
     //WebPack, en este caso podemos establecer un nombre de carpeta, asi como
     //un nombre de archivo entre otras caracteristicas que podemos ir añadiendo
     output: {
       //En este objeto vamos a añadir los elementos internos para trabajar
       //Nos permite decir donde va a vivir-estar el proyecto una vez este preparado.

       //El metodo resolve nos va a permitir saver en donde se encuentra nuestro
       //proyecto para poderlo utilizar
       //Despues le podemos asignar el nombre que nosotros deseemos pero lo recomndado
       //es asignar el nombre de 'dist' porque adentro es donde va la compilacion del proyecto
       path: path.resolve(__dirname, "dist"), //Nos permite indicar/decir donde va a vivir-estar el proyecto una vez este preparado.
       //__dirname permite saber en donde me encuentro
       //despues se indica la carpeta que se va a utilizar, enn esta carpeta es
       //donde va a vivir nuestro proyecto una vez este preparado

       //Asignacion de un nombre al resultante que en este caso puede ser
       //filename: 'main.js' por el momento despues se puede asignarle otro nombre
       filename: "bundle.js",

       publicPath: "./", //Se indica que se va a autilizar la raiz /
     },

     //Se indica que se ejecute la aplicacion en modo desarrollo
     mode: "development",

     //Ahora se le debe indicar con que extenciones se va a trabajar en
     //este proyecto
     resolve: {
       //objeto para indicar las extensiones que se van a utilizar

       //En un arreglo se va a pasar las extensiones que vamos a utilizar
       extensions: [".js", ".jsx"], //De esta forma permitira reconocer los dos elementos son dichas extensiones sin
       //ningun problema

       //Creacion de alias para diferentes elementos-carpetas para asi tener un facil acceso
       //y agilizar el codigo a implementar
       alias: {//Se crea un objeto para poder añadir cada uno de los elementos como una referencia
         "@components": path.resolve(__dirname, "src/components/"),//@components va a llamar a una estructura
                                                                  //que previamente emos utilizado que esn este caso
                                                                  //es path.resolve()  la cual va a ir de __dirname de donde 
                                                                  //se encuentra esta carpeta y luego va a buscar sobre src/components/ 
         "@containers": path.resolve(__dirname, "src/containers/"),
         '@pages': path.resolve(__dirname, 'src/pages/'),
         '@routes': path.resolve(__dirname, 'src/routes/'),
         '@styles': path.resolve(__dirname, 'src/styles/'),
         '@icons': path.resolve(__dirname, 'src/assets/icons/'),
         '@logos': path.resolve(__dirname, 'src/assets/logos/'),
       }
     },

     /* MODULO PARA AÑADIR LA CONFIGURACION DE Babel */
     module: {
       //Se establece un objeto para el modulo{}
       //Se establecen las reglas para como vamos a trabajar con diferentes
       //tipos de archivos o elementos dentro del proyecto, se establesen
       //dentro de un arreglo [] y dentro del arreglo establsemos un objeto {}
       rules: [
         //Se identifica los archivos js y jsx para poderlos trabajar con lo que va a ser nuestro recurso
         {
           test: /\.(js|jsx)$/, //test permite saber que tipos de extenciones se van a utilizar
           //en este caso de JavaScript que es la extencion .js y JavaScript con HTML que es .jsx

           exclude: /node_modules/, //Permite indicar que no se debe utilizar nada de lo que este
           //dentro de la carpeta de node_modules
           use: {
             //Se pasa internamente lo que es el loader que se va a utilizar
             //en el cual se le debe indicar que va a utilizar el lodader de babel
             //babel-loader
             loader: "babel-loader",
           },
         },
         /* Creacion de una regla para poder trabajar directamente con HTML */
         {
           test: /\.html$/, //Logica para poder reconocer los archivos html
           use: [
             {
               loader: "html-loader", //Se especifican los loaders que se van a utilizar, en este caso se especifica el
               //loader que se intalo anterior mente
             },
           ],
         },

         /* Se crea una  regla para poder implementar el style-loader, css-loader 
          y  sass-loaderen nuestro proyecto */
         {
           test: /\.(css|scss)$/, //Permite ayudar a identificar la extension de sass .s
           //o la extencion de css
           //Esta estructura permite identificar si un archivo es de CSS
           //o es de Sass
           use: [
             //se crea un arreglo para contener los elementos que vamos a usar
             "style-loader",
             "css-loader",
             "sass-loader",
           ],
         },

         /* Se crea una regla para poder implementar las imagenes en nuestro proyecto */
         {
           test: /\.(png|svg|jpg|gif)$/, //test: Permite trabajar con diferentes extensiones
           type: "asset", //Se asigna un tipo el cual va a ser de asset
         },
       ],
     },
     /* SE AÑADE LA SECCION DE PLUGINS */
     plugins: [
       //Se crea un arreglo e interna mente se deben añadir los plugins que estamos utilizando
       new HtmlWebpackPlugin({
         //Se crea un plugin que es el que agregamos al inicio del archivo
         //e intenamente se debe crear un objeto {} en donde se van a tener las configuraciones
         //que se va a añadir a lo que viene siendo el plugin que estamos urilizando los cuales son:
         inject: true, //1. inject el cual permite hacer la insercion de los elementos
         template: "./public/index.html", //2. template indica la ruta en donde se encuentra el template
         //del proyecto que en este caso es en el archivo index.html
         filename: "./index.html", //3. Permite indicar en donde se va a realizar-almacenar el resultado de la preparacion
         // de HTML que se encuentra en el template ./public/index.html
       }),

       /* Se crea-agrega un nuevo plugin para MiniCssExtractPlugin y poder ser utilizado en el proyecto */
       new MiniCssExtractPlugin({
         filename: "[name].css", //Le asignamos un nombre al archivo resultante
       }),
     ],

     /* Creacion de una nueva instancia para trabajar con el servidor local webpack-dev-server */
     devServer: {
       //Se pasa un objeto que internamente va a tener una configuracion especifica
       static: path.join(__dirname, "dist"), //Se pasa la carpeta en la que se generan todos niestros archivos
       compress: true,
       historyApiFallback: true, //Permite obtener una historia de lo que esta sucediendo en el navegador
       port: 3006, //Se adigna el puerto que queremos utilizar para nuestro servidor local
       open: true,
     },
   };