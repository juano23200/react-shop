/*  imr  permite crear el import de React y de esta forma no 
se tiene que escribir todo el texto, lo genera automáticamente. */
import React from 'react';

/* Se importa-traen los estilos para poderlos utilizar */
import '../styles/Login.scss';

/* Slr + tab ->| permite crear un componente de tipo Styles */
const Login = () => {
	return (
		<div className="login">
			<div className="form-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

					<h1 className="title">Create a new password</h1>
					<p className="subtitle">Enter a new passwrd for yue account</p>

					<form action="/" className="form">
						<label for="password" className="label">Password</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" />

							<label for="new-password" className="label">Password</label>
							<input type="password" id="new-password" placeholder="*********" className="input input-password" />

								<input type="submit" value="Confirm" className="primary-button login-button" />
      </form>
    </div>
  </div>
	);
}

export default Login;