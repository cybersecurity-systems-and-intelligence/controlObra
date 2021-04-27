import {
    CARGAR_OBRAS,
    CARGAR_CONTRATOS,
    ERROR_CARGAR_OBRAS
} from '../../types'

export default (state, action) => {
    switch(action.type){     
        case CARGAR_OBRAS:
            return {
                ...state,
                obrasContrato: [...action.payload.filter(v => v.contrato_obra === false)],
                obrasCreadas: action.payload,
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
                obrasContrato: [],
                obrasCreadas: [],
                mensaje: action.payload               
            }
        default:
            return state
    }
}