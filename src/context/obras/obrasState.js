import { useReducer } from 'react'
import obrasContext from './obrasContext'
import obrasReducer from './obrasReducer'

import api from '../../libs/api'

import {
    CARGAR_OBRAS,
    CARGAR_CONTRATOS,
    ERROR_CARGAR_OBRAS,
    ERROR_CARGAR_CONTRATOS
} from '../../types/index'


const ObrasState = props => {

    const initialState = {
        obrasContrato: [],
        obrasCreadas: [],
        contratosObras: [],
        mensaje: null
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(obrasReducer, initialState)

    // Serie de funciones
    const cargarObras = async () => {
        try {
            const obras = await api.cargarObras()            
           
            dispatch({
                type: CARGAR_OBRAS,
                payload: obras.data
            })

        } catch {
            const alerta = {
                msg: 'Hubo un error al cargar las obras',
                categoria: 'alerta alerta-error',
                rand: Math.random()
            }
            dispatch({
                type: ERROR_CARGAR_OBRAS,
                payload: alerta
            })
        }
    }

    const cargarContratos = async () => {
        try {
            const contratos = await api.cargarContratos()     
            console.log(contratos.data);      
            dispatch({
                type: CARGAR_CONTRATOS,
                payload: contratos.data
            })

        } catch {
            const alerta = {
                msg: 'Hubo un error al cargar los contratos',
                categoria: 'alerta alerta-error'
            }
            dispatch({
                type: ERROR_CARGAR_CONTRATOS,
                payload: alerta
            })
        }
    }
        
    return (
        <obrasContext.Provider
            value={{
                obrasContrato: state.obrasContrato,
                obrasCreadas: state.obrasCreadas,
                contratosObras: state.contratosObras,
                mensaje: state.mensaje,
                cargarObras,
                cargarContratos
            }}
        >
            { props.children }
        </obrasContext.Provider>
    )
}

export default ObrasState