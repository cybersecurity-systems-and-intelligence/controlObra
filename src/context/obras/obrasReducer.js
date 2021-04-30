import {
    CARGAR_OBRAS,
    CARGAR_CONTRATOS,
    ERROR_CARGAR_OBRAS,
    ERROR_CARGAR_CONTRATOS
} from '../../types'

export default (state, action) => {
    switch(action.type){     
        case CARGAR_OBRAS:
            return {
                ...state,
                obrasContrato: [...action.payload.filter(v => v.contrato_obra === false)],
                obrasCreadas: action.payload,
                obrasActivas: [...action.payload.filter(v => v.estado_obra === true)],
                mensaje: null
            }
        case CARGAR_CONTRATOS:
            return {
                ...state,
                contratosObras: action.payload
            }
        case ERROR_CARGAR_OBRAS:
            return {
                ...state,
                obrasCreadas: [],
                mensaje: action.payload               
            }
        case ERROR_CARGAR_CONTRATOS:
            return {
                ...state,
                contratosObras: [],
                mensaje: action.payload               
            }
        default:
            return state
    }
}