/* importar-traer el Hook useContext que ya biene por defecto en la librería React 
   para poderlo implementar y asi poder hacer la conexion de la aplicacion con el context */
import React, { useContext } from 'react';

/* Se hace el llamado al archivo-context AppContext y poder utilizarla */
import AppContext from '../context/AppContext';

import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png'

const OrderItem = (props) => {

	/* Se crea un aconstante para obtener el producto y el indexvalue de las props 
	 las cuales se recibieron como paraametro en la funcion  const OrderItem = (props)*/
	const { product, indexValue } = props;

	/* Se creea una constante para traer el { removeFromCart } que es la funcion que vamos a utilizar
	   y  en este caso utilizamos nuestro useContext que es donde utilizamos AppContext y con
	   esto ya se esta trayendo la fincion { removeFromCart } a este componente
	   y de esta forma no hay necesidad de pasarlo por ninguno de los elementos padres de este 
	   componente*/
	const { removeFromCart } = React.useContext(AppContext);


	/* Función para realizar la eliminación del producto que queremos del carrito de compras */
	const handleRemove = (index) => {
		removeFromCart(index);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick={() => handleRemove(indexValue)} />
		</div>
	);
}

export default OrderItem;
