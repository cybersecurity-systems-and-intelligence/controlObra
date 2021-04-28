import { useReducer } from 'react'
import contratosObrasContext from './contratosObrasContext'
import contratosObrasReducer from './contratosObrasReducer'

// se importan los metodos
import api from '../../../libs/api'

import {
    CAMBIAR_OPCION_CONTRATO
} from '../../../types/index'


const ContratosObrasState = props => {

    const initialState = {
        opcion: 0,       
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(contratosObrasReducer, initialState)

    // Serie de funciones    
    const cambiarOpcion = opcion => {
        dispatch({
            type: CAMBIAR_OPCION_CONTRATO,
            payload: opcion
        })
    }    
   
        
    return (
        <contratosObrasContext.Provider
            value={{
                opcion: state.opcion,
                cambiarOpcion
            }}
        >
            { props.children }
        </contratosObrasContext.Provider>
    )
}

export default ContratosObrasState