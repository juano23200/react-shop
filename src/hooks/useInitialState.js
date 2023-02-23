/* Se importa el Hook useState que trae por defecto React */
import { useState } from "react";

/* Se crea un valor llamado initialState el cual va a contener un objeto { }
   el cual tiene un elemento cart al cual se le va a asignar-pasar un arreglo [ ]
   
   Con esto ya tendiamos nuestro initialState de nuestro Aplicativo*/
const initialState = {
	cart: [],
}

const useInitialState = () => {
    //Se llama varios valores claves como el estado-state, tambien se va a tener
    //un setState para actualizarlo 
    //Se hace el llamado al Hook useState al cual se le pasa un valor inicial
	const [state, setState] = useState(initialState);

    /* Creacion de la funcion para poder cambiar o agregar valores a este elemento  */
	/* addToCart permitira pasar un producto y con ese producto hacer algo*/
    const addToCart = (payload) => {//Dentro de los parentesis ( ) se pasa el valor que se va a recibir
		/* setState permite realizar de forma interna indicar que se mantenga el estado se
           tiene actualmente  ...state */
        setState({
			...state,//Permite mantener el estado que se tiene actualmente
                     //mantiene la informacion que se tiene actualmente 
			cart: [...state.cart, payload]//...state.cart permite que se mantenga lo que ya existe dentro de cart
                                          //payload Permite agregar lo que este dentro de payload lo cual
                                          //es un nuevo producto
		});
	};

    /* Creacion de la funcion para poder remover o quitar valores a este elemento  */
	const removeFromCart = (indexValue) => {//Dentro de los parentesis ( ) se pasa el valor que se va a recibir
		/* setState permite realizar de forma interna indicar que se mantenga el estado se
           tiene actualmente  ...state */
        setState({
			...state,//Permite mantener el estado que se tiene actualmente
                     //Permite mantener lo que esta en el estado
                     //mantiene la informacion que se tiene actualmente 
            /* Ahora se dice que sobre cart: se quiere hacer algo, que es donde estoy trabajnado  
               se quiere hacer algo; en este caso se quiere hacer un filtro que nos permita  
               encontar el item y eliminarlo, por el item-producto que se esta recibiendo por el
               payload.id 

               Se aplica un filtro-filter que es un metodo de JavaScript y dentro de ese filter()
               se debe aplicar esa logica,la cual es del los items que se estan recibiendo, se va a buscar
               algo por lo tanto se debe buscar que el item.id que sea diferente !== de payload.id
               y de esta forma se esta llamando la logica para quitar uno de los elementos, entonces de esta forma
               se va a eliminar el valor
            */
			//cart: state.cart.filter(items => items.id !== payload.id),

            cart: state.cart.filter((product,index) => index !== indexValue),

		});
	}

    /* Return permite enviar la informacion que se tiene previamente en el setState({ }) */
	return {
		state,//Se envia el estado
		addToCart,//Se envia la funcion que se acaba de crear 
        removeFromCart//Se envia la funcion que se acaba de crear
	}
}

export default useInitialState;