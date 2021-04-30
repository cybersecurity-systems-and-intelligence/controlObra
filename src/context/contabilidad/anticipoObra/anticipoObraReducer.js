import {
    CONSULTAR_INFORMACION,
    CONSULTAR_ERROR,
    SUBMIT_FACTURA,
    ERROR_REGISTRO_FACTURA,
    SELECC_OBRA_ANTICIPO
} from '../../../types'

export default (state, action) => {
    switch(action.type){
        case CONSULTAR_INFORMACION:
            return {
                ...state,
                informacion: {
                    folioFiscal: action.payload.folioFiscal,
                    receptor: action.payload.receptor.nombre,
                    rfc: action.payload.receptor.rfc,
                    fecha: action.payload.fecha,
                    total: action.payload.total,
                    subtotal: action.payload.subtotal,
                    moneda: action.payload.moneda,
                    conceptos: action.payload.conceptos
                },
                mensaje: null
            }
        case CONSULTAR_ERROR:
            return {
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
                mensaje: action.payload
            }
        case SUBMIT_FACTURA:
            return {
                ...state,
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
        case ERROR_REGISTRO_FACTURA:
            return {
                ...state,
                mensaje: action.payload
            }
        case SELECC_OBRA_ANTICIPO:
            return {
                ...state,
                obraSeleccionada: action.payload
            }
        default:
            return state
    }
}