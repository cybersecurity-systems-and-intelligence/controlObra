import {   
    ESTADO_MODAL,
    REALIZAR_PETICION,
    CANCELAR_PETICION
} from '../../types'

export default (state, action) => {
    switch(action.type){   
        case ESTADO_MODAL:
            return {
                ...state,
                estado: action.payload
            }
        case REALIZAR_PETICION:
            return {
                ...state,
                estado: false,
                peticion: action.payload
            }
        case CANCELAR_PETICION:
            return {
                ...state,
                peticion: null
            }
        default:
            return state
    }
}