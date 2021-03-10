// se importan las librerias
import React, { useContext } from 'react';

// se importan los context
import authContext from '../../context/autenticacion/authContext'

// se crea el componente
const Barra = () => {

    // Extraer la informacion de autenticacion
    const authsContext = useContext(authContext)
    const { usuario, cerrarSesion } = authsContext    
    

    return (
        <header className='app-header'>
            { usuario ? <p className='nombre-usuario'>Hola <span>{ usuario.nombre }</span></p> : null }            

            <nav className='nav-principal'>
                <button
                    className="btn btn-blank cerrar-sesion"
                    style={{ color: 'white'}}
                    onClick={() => cerrarSesion()}
                >
                    Cerrar Sesión
                </button>
            </nav>
        </header>
    );
}
 
export default Barra;