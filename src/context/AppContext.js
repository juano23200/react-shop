/* un import de React, después se va a crear una constante que se va a llamar 
   AppContext y lo que se va a hacer es asignarle un React.createContext 
   al cual dentro de los paréntesis ( ) se le va a pasar un objeto 
   vacío ( { } ); después se debe exportar lo que vendría siendo AppContext */

import React from 'react';

const AppContext = React.createContext({});//Se pasa como parametro un objeto vacio ( { })

export default AppContext;
