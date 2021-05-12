import { useReducer } from 'react'
import anticipoObraContext from './anticipoObraContext'
import anticipoObraReducer from './anticipoObraReducer'

import api from '../../../libs/api'

import {
    CONSULTAR_INFORMACION,
    CONSULTAR_ERROR,
    SUBMIT_FACTURA,
    ERROR_REGISTRO_FACTURA,
    SELECC_OBRA_ANTICIPO,
    SELECT_CLAVE,
    SELECT_CONCEPTO
} from '../../../types'


const  AnticipoObraState = props => {

    const initialState = {
        informacion: {
            folioFiscal: '',
            receptor: '',
            rfc: '',
            fecha: '',
            total: '',
            subtotal: '',
            moneda: '',
            conceptos: []
        },
        obraSeleccionada: [],
        conceptoSeleccionado: '',
        mensaje_anticipo_obra: null
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(anticipoObraReducer, initialState)

    // Serie de funciones

    // Mostrar barra
    const consultarInformacion = async (formData) => {

        try {
            const res = await api.convertirXml(formData)      
            if(res.data !== undefined) {                     
                dispatch({
                    type: CONSULTAR_INFORMACION,
                    payload: res.data
                })
            }else{
                const alerta = {
                    msg: 'Debe ingresar un archivo xml con la estructura correcta',
                    categoria: 'alerta alerta-error'
                }
                dispatch({
                    type: CONSULTAR_ERROR,
                    payload: alerta
                })
            }
        } catch(error){
            const alerta = {
                msg: 'Debe ingresar un archivo xml con la estructura correcta',
                categoria: 'alerta alerta-error'
            }

            dispatch({
                type: CONSULTAR_ERROR,
                payload: alerta
            })
        }
        
    }

    // guardar factura
    const guardarFactura = async() => {
        try{
            const objeto = {
                total: state.informacion.total,
                subtotal: state.informacion.subtotal,
                moneda: state.informacion.moneda,
                fecha: state.informacion.fecha,
                folioFiscal: state.informacion.folioFiscal,
                receptor: {
                    rfc: state.informacion.rfc,
                    nombre: state.informacion.receptor
                },
                conceptos: state.informacion.conceptos
            }
            const res = await api.registrarFactura(objeto)
            dispatch({
                type: SUBMIT_FACTURA,
                payload: res.data
            })

        } catch(error) {
            const alerta = {
                msg: error.response.data.Error,
                categoria: 'alerta alerta-error',
                rand: Math.random()
            }

            dispatch({
                type: ERROR_REGISTRO_FACTURA,
                payload: alerta
            })
        }
    }

    const seleccionarObra = obra => {
        dispatch({
            type: SELECC_OBRA_ANTICIPO,
            payload: obra
        })
    }

    const seleccionClave = (obraSelect) => {
        dispatch({
            type: SELECT_CLAVE,
            payload: obraSelect
        })
    }

    const seleccionConcepto = (clave) => {
        dispatch({
            type: SELECT_CONCEPTO,
            payload: clave
        })
    }
        
    return (
        <anticipoObraContext.Provider
            value={{
                informacion: state.informacion,
                mensaje_anticipo_obra: state.mensaje_anticipo_obra,
                obraSeleccionada: state.obraSeleccionada,
                conceptoSeleccionado: state.conceptoSeleccionado,
                consultarInformacion,
                guardarFactura,
                seleccionarObra,
                seleccionClave,
                seleccionConcepto
            }}
        >
            { props.children }
        </anticipoObraContext.Provider>
    )
}

export default  AnticipoObraState