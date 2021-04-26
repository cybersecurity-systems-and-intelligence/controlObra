import { useReducer } from 'react'
import obrasCreadasContext from './obrasCreadasContext'
import obrasCreadasReducer from './obrasCreadasReducer'

// se importan los metodos
import api from '../../../libs/api'

import {  
    CAMBIAR_OPCION,
    SELECCIONAR_OBRA
} from '../../../types/index'


const ObrasCreadasState = props => {

    const initialState = {
        opcion: 0,
        obraSeleccionada: {}
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(obrasCreadasReducer, initialState)

    // Serie de funciones    
    const cambiarOpcion = opcion => {
        dispatch({
            type: CAMBIAR_OPCION,
            payload: opcion
        })
    }
    
    const seleccionarObra = obra => {
        dispatch({
            type: SELECCIONAR_OBRA,
            payload: obra
        })
    }
   
        
    return (
        <obrasCreadasContext.Provider
            value={{
                opcion: state.opcion,
                obraSeleccionada: state.obraSeleccionada,
                cambiarOpcion,
                seleccionarObra
            }}
        >
            { props.children }
        </obrasCreadasContext.Provider>
    )
}

export default ObrasCreadasState