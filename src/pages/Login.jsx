/* 1. importar los elementos que vamos a usar como en este caso es el Hook 
   de React {useRef}  y asi poderlo implementar*/
import React, { useRef } from 'react';
import '../styles/Login.scss';

/* Se debe importar el logo y se guarda en la variable logo para poderlo implementar */
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {

	/* 2. Se debe crear una referencia con un valor  */
	const form = useRef(null);//Se pasa un valor nulo(null) porque no lo estamos
	                          //inicializando con ningun elemento 

   /* 3. ---Creacion de la funcion para poder manejar el submit del 
            formulario <form> </form> </form> ------*/
	const handleSubmit = (event) => {//handleSubmit nos va a permitir enviar
		                             //la informacion del formulario
		event.preventDefault();//(event) permite prevenir a que no se ejecute la accion al momento
		                       //de darle clic sobre el boton (log in) y mande los valores
							   //por lo que viene siendo URL si no que continue con la logica
							   //que se tiene, la cual es mostrar resultados en consola para
							   //en este caso para la realizacionde la prueba de que si se esta
							   //almacenando la informacion en los <input> del formulario.
		/* FormData es parte de JavaScript, permite instancear todos los elementos
		   que se encuentran dentro de un formulario, y los va a capturar conforme
		   sean llenados y de esta forma cuando se le de un onSubmit los va a tener 
		   presentes y podemos hacer con ellos lo que nosotros necesitemos; tambien podemos
		   enviar todo el objeto que en este caso que se genera con formData a lo 
		   que vendria siendo el backend y de esta forma va de una forma mas segura 
		   y encriptada para que esta informacion no sea accesible para otras persosnas
		   o que en este caso alguien malisioso quiera inspeccionar como se esta transmitiendo
		   esta informacion*/
		const formData = new FormData(form.current);//form.curren es lo que esta trayendo
		                                            //lo que actualmente hace referencia
													//a este formulario
													//DE esta forma ya se estan trayendo los valore
													//cuando sea el caso que se le este dando un CLick
													//para enviar esta informacion, cuando se va a iniciar Sesion

	    /* Creacion de un objeto el cual nos va a permitir ver esta informacion
		   de como se la vamos a querer enviar la informacion a nuestro backend   */
		const data = {
			usename: formData.get('email'),//formData hace referencia hace referencia al formulario
			                               //del cual por medio del metodo get se va a obtener-traer
										   //lo que tiene el elemento <input> email
			password: formData.get('password')
		}
		//Permite mostrar en pantalla que la informacion si esta llegando de forma correcta
		//solo se muestra la informacion porque hasta ahora no se la vamos a enviar a un backend 
		//hasta el momento
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button
						onClick={handleSubmit}
						className="primary-button login-button">
						Log in
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button
					className="secondary-button signup-button"
				>
					Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;
