import {
    CAMBIAR_OPCION_CONTRATO,
    SELECT_CONTRATO
} from '../../../types'

export default (state, action) => {
    switch(action.type){       
        case CAMBIAR_OPCION_CONTRATO:
            return {
                ...state,
                opcion: action.payload
            }
        case SELECT_CONTRATO:
            return {
                ...state,
                contratoSeleccionado: action.payload
            }
        default:
            return state
    }
}