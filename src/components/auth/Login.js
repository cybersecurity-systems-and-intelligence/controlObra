import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'

import alertaContext from '../../context/alertas/alertaContext'
import authContext from '../../context/autenticacion/authContext'

const Login = props => {

    // Extraer los valores del context
    const alertasContext = useContext(alertaContext)
    const { alerta, mostrarAlerta } = alertasContext

    const authsContext = useContext(authContext)
    const { mensaje, autenticado, iniciarSesion } = authsContext

    // State para iniciar sesion
    const [ usuario, guardarUsuario ] = useState({
        email: '',
        password: ''
    })

    const { email, password } = usuario

    // En caso de que el password o usuario sean incorrectos
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos')
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)     
        }

    }, [mensaje, autenticado, props.history])


    const handleChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesion
    const handleSubmit = e => {
        e.preventDefault()

        // Validar que no haya campos vacios
        if ( email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
            return
        }

        // Pasarlo al action
        iniciarSesion(usuario)
    }


    return ( 
        <div className='form-usuario'>
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{ alerta.msg }</div> ) : null }
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar Sesión</h1>
                
                <form
                    onSubmit={handleSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu Password'
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Iniciar Sesion'
                        />
                    </div>
                </form>
                
                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>Crear cuenta</Link>
                              
            </div>
        </div>
     );
}
 
export default Login;