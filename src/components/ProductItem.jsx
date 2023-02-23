//Se importa-llama el Hook useContext que trae por defecto React para poderlo utilizar
import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
//Se importa-llama AppContext para poderlo utilizar
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

/* dentro de los paréntesis pasarle como parámetro el producto el cual 
   es enviado desde el archivo /src/hooks/useGetProducts.js para que así 
   se puede iterar por cada uno de los valores */
const ProductItem = ({ product }) => {

	//Se hace el llamado del estado o podemos traer solo el  addToCart que ya
	//se habia agregado obviamente de lo que era useContext()
	const { addToCart } = useContext(AppContext);//Se pasa como parametro el AppContext
	                                             //permite hacer el enlace-el contexto con
												 //addToCart 


	const handleClick = item => {//En esta funcion se recibe un producto-product el cual se debe
		                    //renombrar-cambiar con el nombre de item para que no haya ningun problema
		addToCart(item);//Se hace e lloamado a addToCart y se le pasa el valor que queremos
		                //o el valor que vamos a obtener
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;