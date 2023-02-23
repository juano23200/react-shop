
/* 1. importar los elementos que vamos a usar como en este caso es el Hook 
   de React {useEffect} como también el Hook useState {useState} */
import { useEffect, useState } from 'react';

/* 3. Se importa-llama el recurso para poderlo utilizar de esta forma ya
   podemos tener acceso a todos los metodos que nos puede dar axios*/
import axios from 'axios';

/* 2. Se crea la funcion la cual se va a exportar  */
const useGetProducts = (API) => {//Recibe como parámetro la API

    /* 4. Se trae toda la logica que se habia realizado en 
    el archivo /src/containers/ProductList.jsx */

	/*----- Proceso para llamar la informacion de la API -------*/
	//Se utiliza useState([]) para guardar la informacion que vamos 
	//a llamar, gracias al Hook useEffect en donde se tiene un elemento
	//llamado products y tambien se va a tener una funcion con la cual
	//se va a actualizar el recurso con el nombre de setProducts los cuales
	//vienen de = useState los cuales se van a inicializar con un arrego 
	//useState([ ])
	const [products, setProducts] = useState([]);

	/* Se crea la funcion useEffect la cual permite hacer el llamado
	   a la API y asi permitir transmitir la informacion contenida 
	   a nuestro componente, la cual contiene 2 elemntos:
	   1. Una funcion anonima en la cual se va a ejecutar nuestro codigo 
	   2. Un arreglo [] en donde vamos a tener diferentes elementos o valores
	      en los cuales va a estar escuchando sobre un cambio*/
	useEffect(async () => {
		const response = await axios(API);//await permite esperar a que suceda la conexion con la API
		setProducts(response.data);//Response.data es donde esta llegando la informacion 
	}, []);//Se pasa un arreglo vacio [ ] porque no vamos a escuchar sobre
	      //ningun elemento.;

	return products;
};

export default useGetProducts;