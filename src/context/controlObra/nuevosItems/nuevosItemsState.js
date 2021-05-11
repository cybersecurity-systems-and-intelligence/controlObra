import { useReducer } from 'react'
import nuevosItemsContext from './nuevosItemsContext'
import nuevosItemsReducer from './nuevosItemsReducer'

import api from '../../../libs/api'

import {
    HANDLE_CHANGE,
    AGREGAR_ITEMS,
    SUBMIT_ITEMS,
    ERROR
} from '../../../types/index'


const  NuevosItemsState = props => {

    const initialState = {
        clave: '',
        descripcion: '',
        unidad: '',
        items: [],
        mensaje_nuevos_items: null,
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(nuevosItemsReducer, initialState)

    // Serie de funciones

    // 
    const handleChangeDatos = e => {
        dispatch({
            type: HANDLE_CHANGE,
            payload: e
        })
    }     

    const agregarItems = () => {
        const objeto = {
            clave: state.clave, 
            descripcion: state.descripcion,
            unidad: state.unidad
        }
        console.log(objeto);
        dispatch({
            type: AGREGAR_ITEMS,
            payload: objeto
        })
    }

    const submitItems = async () => {       
        try{

            const resp = await api.registroItems(state.items)

            const alerta = {
                msg: 'Se ha guardado la información',
                categoria: 'alerta alerta-ok',
                rand: Math.random()
            }            
                   
            dispatch({
                type: SUBMIT_ITEMS,
                payload: alerta,
            })                       

        }catch{

            const alerta = {
                msg: 'No se ha guardado la información ya que algunos items pueden ya estar registrados',
                categoria: 'alerta alerta-error',
                rand: Math.random()
            }
            
            dispatch({
                type: ERROR,
                payload: alerta
            })
        }
    }
    

    return (
        <nuevosItemsContext.Provider
            value={{
                clave: state.clave,
                descripcion: state.descripcion,
                unidad: state.unidad,
                items: state.items,
                mensaje_nuevos_items: state.mensaje_nuevos_items,
                handleChangeDatos,
                agregarItems,
                submitItems
            }}
        >
            { props.children }
        </nuevosItemsContext.Provider>
    )
}

export default  NuevosItemsState