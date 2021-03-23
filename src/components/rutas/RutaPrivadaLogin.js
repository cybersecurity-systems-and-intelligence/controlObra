// se importan las librerias
import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'

// se importan los context
import authContext from '../../context/autenticacion/authContext'

//importar los componentes
import PageNotFound from '../../components/rutas/PageNotFound'

// se crea el componente
const RutaPrivadaLogin = ( { component: Component, ...props } ) => {

    // Extraer la informacion de autenticacion
    const authsContext = useContext(authContext)
    const { autenticado, usuarioAutenticado } = authsContext
    
    // Se autentica al usuario
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('accessToken'))
        if(token){
            usuarioAutenticado()
        }        
    }, [])

    return (
        <Route {...props} render={props => autenticado ? (            
            <Redirect to='/modulos'/>
        ) : (
            <Component {...props}/>
        ) } />
    );
}
 
export default RutaPrivadaLogin;