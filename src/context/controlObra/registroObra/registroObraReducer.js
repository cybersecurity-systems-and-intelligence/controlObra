import {
    INFO_GENERAL,
    ERROR_REGISTRO_OBRA,
    HANDLE_CHANGE,
    HANDLE_CHANGE_FECHA,
    CARGAR_CONCEPTOS,
    CAMBIAR_ESTADO
} from '../../../types'

export default (state, action) => {
    switch(action.type){
        case INFO_GENERAL:
            return {
                ...state,
                nombreObra: action.payload.nombreObra,
                montoTotal: action.payload.montoTotal,
                numeroContrato: action.payload.numeroContrato,
                fechaContrato: action.payload.fechaContrato,
                fechaInicio: action.payload.fechaInicio,
                fechaFin: action.payload.fechaFin,
                mensaje: null
            }
        case ERROR_REGISTRO_OBRA:
            return {
                ...state,
                mensaje: action.payload
            }
        case HANDLE_CHANGE:
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value
            }
        case HANDLE_CHANGE_FECHA:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case CARGAR_CONCEPTOS:
            return {
                ...state,
                mensaje: null,
                partidas: action.payload
            }
        case CAMBIAR_ESTADO:
            return {
                ...state,
                estadoInput: action.payload
            }
        default:
            return state
    }
}