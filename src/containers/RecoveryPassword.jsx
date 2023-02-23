/*  imr  permite crear el import de React y de esta forma no 
se tiene que escribir todo el texto, lo genera automáticamente. */
import React from 'react';

/* Se importa-traen los estilos para poderlos utilizar */
import '../styles/RecoveryPassword.scss';

/* Slr + tab ->| permite crear un componente de tipo Styles */
const RecoveryPassword = () => {
	return (
		<div className="login">
			<div className="form-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src="./icons/email.svg" alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default RecoveryPassword;