import { useReducer } from 'react'
import barraContext from './barraContext'
import barraReducer from './barraReducer'

import {
    MOSTRAR_BARRA,
    OCULTAR_BARRA
} from '../../types/index'


const BarraState = props => {

    const initialState = {
        barra: false,
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(barraReducer, initialState)

    // Serie de funciones

    // Mostrar barra
    const mostrarBarra = () => {
        dispatch({
            type: MOSTRAR_BARRA
        })
    }

    // Ocultar barra
    const ocultarBarra = () => {
        dispatch({
            type: OCULTAR_BARRA
        })
    }
        
    return (
        <barraContext.Provider
            value={{
                barra: state.barra,
                otra: state.otra,
                mostrarBarra,
                ocultarBarra
            }}
        >
            { props.children }
        </barraContext.Provider>
    )
}

export default BarraState