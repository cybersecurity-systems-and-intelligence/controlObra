import { useReducer } from 'react'
import cargaFacturaContext from './cargaFacturaContext'
import cargaFacturaReducer from './cargaFacturaReducer'

import api from '../../../libs/api'

import {
    CONSULTAR_INFORMACION,
    CONSULTAR_ERROR,
    SUBMIT_FACTURA,
    ERROR_REGISTRO_FACTURA
} from '../../../types'


const  CargaFacturaState = props => {

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
        mensaje: null
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(cargaFacturaReducer, initialState)

    // Serie de funciones

    // Mostrar barra
    const consultarInformacion = async (formData) => {

        try {
            const res = await api.convertirXml(formData)

            console.log(res);
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
            console.log(objeto);
            const res = await api.registrarFactura(objeto)
            dispatch({
                type: SUBMIT_FACTURA,
                payload: res.data
            })

        } catch(error) {
            console.log(error.response.data.Error);
            const alerta = {
                msg: error.response.data.Error,
                categoria: 'alerta alerta-error'
            }

            dispatch({
                type: ERROR_REGISTRO_FACTURA,
                payload: alerta
            })
        }
    }
        
    return (
        <cargaFacturaContext.Provider
            value={{
                informacion: state.informacion,
                mensaje: state.mensaje,
                consultarInformacion,
                guardarFactura
            }}
        >
            { props.children }
        </cargaFacturaContext.Provider>
    )
}

export default  CargaFacturaState