/*  imr  permite crear el import de React y de esta forma no 
se tiene que escribir todo el texto, lo genera automáticamente. */
import React from 'react';

/* Se importa el componente /src/components/Header.jsx para poderlo utilizar  */
import Header from '../components/Header';

/* Slr + tab ->| permite crear un componente de tipo Styles */
/* Componente el cual va a recibir diferentes componentes hijos(children)
   los cuales van a vivir dentro de nuestro proyecto de una forma ordenada */
const Layout = ({ children }) => {
    return (
        <div className="Layout">
            <Header />
            {children}
        </div>
    );
}

export default Layout;
