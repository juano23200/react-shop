/* importar los elementos que vamos a usar como en este caso es el Hook 
   de React {useEffect} como también el Hook useState {useState} */
import React from 'react';
import ProductItem from '@components/ProductItem';
/* Se importa-llama los Hooks para poder ser utilizados */
import useGetProducts from '../hooks/useGetProducts';
import '@styles/ProductList.scss';


/* crear una constante la cual se va a llamar API 
y le vamos a signar el recurso de la URL obtenida */
const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

	const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
			{products.map(product => (
					<ProductItem product={product} key={product.id} />
			))}
			</div>
		</section>
	);
}

export default ProductList;
