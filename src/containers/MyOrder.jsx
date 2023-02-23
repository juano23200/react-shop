/* importar los elementos que vamos a usar como en este caso es el Hook 
   de React {useContext} como también el Hook useState {useState} */
import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';

/* Se importa-llama AppContex para poder ser utilizados */
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {

	/* Se trae lo que es el estado-state desde useContext y dentro de los parentesis se le pasa como parametro
	   el AppContext  
	   
	 Con esto ya tenemos el estado de lo que viene siendo nuestro componente sin necesidad
	 de estarlo enviando por multiples lados  */
	const { state } = useContext(AppContext);

	/* Creacion de la funcion para para acumular y agregar los valores que 
	   en este caso necesitamos y asi poder realizar la sumatosia de los pecios
	   de los productos y arojar un resultado total */
	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
			{state.cart.map((product,index) => (
		      <OrderItem 
			     indexValue={index}
			     key={index}
			     product={product} 
		       />
            ))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
