import React from 'react'; //Se obtiene digitando el comando imr
/* 
   Se importan los recursos que vamos a traer del módulo de React-router-dom, 
   dentro de las llaves {} vamos a traer una serie de elementos que son clave 
   para nuestro proyecto como son:  rouse-router - para poder identificar la 
   navegación que vamos a estar haciendo (hacia adelante o hacia atrás dentro 
  de nuestra página), vamos a traer también switch que nos va a permitir 
  tener una estructura de control para cada una de las rutas que vamos a tener;
  la ruta que vamos a estar trabajando con route y de esta forma crear el 
  valor que nos va a permitir a nosotros identificar en donde estoy, hacia 
  donde me voy a mover y en donde quiere estar el usuario; en este caso es cada
  una de las secciones que está eligiendo navega */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../containers/Layout';//Se importa el archivo Layout para poderlo utilizar
import Login from '../pages/Login';//Se importa el archivo Layout para poderlo utilizar
import RecoveryPassword from '../containers/RecoveryPassword';//Se importa el archivo el cual tiene los estilos para poderlos implenetar en el proyecto
import Home from '../pages/Home';//Se importa el archivo Home para poderlo utilizar
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';//Se importa el archivo NotFound para poderlo utilizar
import AppContext from '../context/AppContext';//Se importa el archivo-elemento AppContext para poderlo utilizar
import useInitialState from '../hooks/useInitialState';//Se importa-llama al Hook useInitialState para poderlo implementar-utilizar
import '../styles/global.css';//Se importa el archivo el cual tiene los estilos para poderlos implenetar en el proyecto

/* Creamos una cosntante a la cual le vamos a asignar una funcion flecha - arow function 
   En la cual solo vamos a enviar una etiqueta <h1> </h1> con un mensaje*/
const App = () => {//Se obtiene con el comando srl

    /* Permite asignar a la constante initialState lo que se retorna al ser el llamado
       al Custome Hook  useInitialState() en este caso lo que retorna es state y addToCart */
    const initialState = useInitialState();

    return (

        /* BrowserRouter - va a encapsular toda nuestra aplicacion para saber que ahi
           va a vivir toda nuestra estructura la cual vamos a trabajar, una vez encapsulamos
           todo en BrowserRouter, ahora a llegado el momento que se haga un switch para poder
           encapsular el <Layout> </Layout> el cual contiene las diferentes componentes y 
           asi poder elegir el indicado por el usuario y no se muestren todos a la vez en una
           misma pagina web, en donde se utiliza la etiqueta <Route /> la cual permite decir
           como se va a trabajar en esa ruta asignada, en este caso va a recibir una serie de
           instrucciones internas para saber como se va a comportar, como lo es:

           1. exact => indica que va a buscar sobre esa ruta de forma exacta.
           2. path => indica la ruta donde se va a trabajar o vivir  cuando nosotros estemos
                       Buscando que ruta es la que tiene que buscar.
           3. element => Se debe pasar-indicar cual es el componente que en este caso queremos
                           que descubra-muestre-despliegue nuestra aplicacion
           
           en donde va a decir */
    
    /* Value= { } Permite indicar con que se va a inicializar y que va a compartir
       a todas nuestras aplicaciones en este caso a los elementos-componentes en particular*/
    <AppContext.Provider value={initialState}>
		<BrowserRouter>
		
        <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recovery-password" element={<RecoveryPassword />} />
					<Route path="/send-email" element={SendEmail} />
					<Route path="/new-password" element={NewPassword} />
					<Route path="/account" element={MyAccount} />
					<Route path="/signup" element={CreateAccount} />
					<Route path="/checkout" element={Checkout} />
					<Route path="/orders" element={Orders} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
        </Layout>
			
	   </BrowserRouter>
    </AppContext.Provider>
	);
}

/* Realizamos un export del componente App para poderlo utilizar  dentro del archivo index.js
   y asi poder tener nuestra aplicacion */
export default App;
