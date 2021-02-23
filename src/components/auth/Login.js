import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';

const Login = () => {

    // State para iniciar sesion
    const [ usuario, guardarUsuario ] = useState({
        email: '',
        password: ''
    })

    const { email, password } = usuario

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
        

        // Pasarlo al action
    }


    return ( 
        <div className='form-usuario'>
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