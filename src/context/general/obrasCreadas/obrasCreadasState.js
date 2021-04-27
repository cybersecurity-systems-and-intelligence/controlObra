import { useReducer } from 'react'
import obrasCreadasContext from './obrasCreadasContext'
import obrasCreadasReducer from './obrasCreadasReducer'

// se importan los metodos
import api from '../../../libs/api'

import {  
    CAMBIAR_OPCION,
    SELECCIONAR_OBRA,
    FILTRO_OBRAS
} from '../../../types/index'


const ObrasCreadasState = props => {

    const initialState = {
        opcion: 0,
        obraSeleccionada: {},
        obrasFiltro: []
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

    const filtrarObras = (tipo, array) => {

        let filtroArray = []
        if (tipo === 'todos'){            
            filtroArray = [...array]
        }else if ( tipo === 'contrato'){
            filtroArray = [...array.filter(v => v.contrato_obra === true)]
        }else if (tipo === 'vigentes'){
            filtroArray = [...array.filter(v => v.estado_obra === true)]
        }

        dispatch({
            type: FILTRO_OBRAS,
            payload: filtroArray
        })
    }
   
        
    return (
        <obrasCreadasContext.Provider
            value={{
                opcion: state.opcion,
                obraSeleccionada: state.obraSeleccionada,
                obrasFiltro: state.obrasFiltro,
                cambiarOpcion,
                seleccionarObra,
                filtrarObras
            }}
        >
            { props.children }
        </obrasCreadasContext.Provider>
    )
}

export default ObrasCreadasState