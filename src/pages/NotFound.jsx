/*  imr  permite crear el import de React y de esta forma no 
se tiene que escribir todo el texto, lo genera automáticamente. */
import React from 'react';

/* Slr + tab ->| permite crear un componente de tipo Styles */
const NotFound = () => {
	return (
        <div>
            <h1 className="title-404">404</h1>
            <p className="text-404">Oops! Pagina no encontrada.</p>
            <a className="button-404" href="/">Regrese a la página inicial, es mejor.</a>
        </div>
	);
}

export default NotFound;