import {   
    CAMBIAR_OPCION,
    SELECCIONAR_OBRA
} from '../../../types'

export default (state, action) => {
    switch(action.type){       
        case CAMBIAR_OPCION:
            return {
                ...state,
                opcion: action.payload
            }
        case SELECCIONAR_OBRA:
            return {
                ...state,
                obraSeleccionada: action.payload
            }
        default:
            return state
    }
}