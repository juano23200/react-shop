/*  imr  permite crear el import de React y de esta forma no 
se tiene que escribir todo el texto, lo genera automáticamente. */
/* traer-importar nuestro {useState} y con eso vamos a trabajar 
lo que vendría siendo esta lógica que vamos a tener en este componente */
import React, { useState, useContext } from 'react';

/* Se importa-traen los estilos para poderlos utilizar */
import '@styles/Header.scss';

/* Se importa-trae el menu para poderlo utilizar */
import Menu from '@components/Menu';

/* Se importa-trae el container MyOrder para poderlo utilizar */
import MyOrder from '../containers/MyOrder';

/* Se importan algunos archivos de iconos e imagenes para ser utilizados-implementados dentro del proyecto */
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';

/* Se importa-llama-trae la  AppContext para poder implementarla-utilizarla*/
import AppContext from '../context/AppContext';

import shoppingCart from '@icons/icon_shopping_cart.svg';

/* Slr + tab ->| permite crear un componente de tipo Styles */
const Header = () => {

/* Implementacion de un useState para cuando suceda una accion, un cambio de
   estado de un componente, como por ejemplo cuando se le da un click a un boton */
	const [toggle, setToggle] = useState(false);//Dentro de los paréntesis del useState() se le debe pasar un valor booleano true o false para indicar que el 
                                               //Toggle se muestre o no se muestre hasta que se le de click sobre el boton

    /* Creacion de una constante para la
       Implementacion de un useState para cuando suceda una accion, un cambio de
       estado de un componente, como por ejemplo cuando se le da un click a un boton */                                           
    const [toggleOrders, setToggleOrders] = useState(false);//Dentro de los paréntesis del useState() se le debe pasar un valor booleano true o false para indicar que el 
                                                            //toggleOrders se muestre o no se muestre hasta que se le de click sobre el boton
    
    /* Se crea una constante la cuan va a tener el estado {state} de useContext( ) 
       para poder revisarlo que este ahí, y dentro de los paréntesis al hacer 
       el llamado al Hook useContext se le pasa como parámetro la AppContext */
    const { state } = useContext(AppContext);

/* Creacion de la funcion handleToogle para cuando se le de click a un boton 
   Permite cambiar de estado cuando ocurra una accion, en este caso dar click
   sobre un boton */
	const handleToggle = () => {
		setToggle(!toggle);//Cambia el contenido del estado, si esta en false se cambia a true
	}

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => setToggleOrders(!toggleOrders)}
					>
                    <img src={shoppingCart} alt="shopping cart" />
                    <div>{state.cart.length > 8 ? `+`+state.cart.length : state.cart.length || 0}</div>
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>
    );
}

export default Header;
