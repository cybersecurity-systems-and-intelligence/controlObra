import {
    CAMBIAR_OPCION_CONTRATO
} from '../../../types'

export default (state, action) => {
    switch(action.type){       
        case CAMBIAR_OPCION_CONTRATO:
            return {
                ...state,
                opcion: action.payload
            }
        
        default:
            return state
    }
}