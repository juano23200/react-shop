/*  imr  permite crear el import de React y de esta forma no 
se tiene que escribir todo el texto, lo genera automáticamente. */
//import React from 'react';

/*Permite importar el archivo para poderlo utilizar dentro del proyecto */
//import Header from '../components/Header';

/* Slr + tab ->| permite crear un componente de tipo Styles */
//const Home = () => {
//	return (

//		<Header />

//	);
//}

//export default Home;

import React from 'react';
import ProductList from '../containers/ProductList';

const Home = () => {
	return (
		<>
			<ProductList />
		</>
	);
}

export default Home;