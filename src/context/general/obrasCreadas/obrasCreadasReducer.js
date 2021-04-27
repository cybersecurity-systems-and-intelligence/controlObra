import {   
    CAMBIAR_OPCION,
    SELECCIONAR_OBRA,
    FILTRO_OBRAS
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
        case FILTRO_OBRAS:
            return {
                ...state,
                obrasFiltro: action.payload
            }
        default:
            return state
    }
}