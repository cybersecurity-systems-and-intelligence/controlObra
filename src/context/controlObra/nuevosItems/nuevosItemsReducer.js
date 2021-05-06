import {
    HANDLE_CHANGE,
    AGREGAR_ITEMS,
    SUBMIT_ITEMS,
    ERROR
} from '../../../types'

export default (state, action) => {
    switch(action.type){
        case HANDLE_CHANGE:
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value
            }
        case AGREGAR_ITEMS:
            return {
                ...state,
                clave: '',
                descripcion: '',
                unidad: '',
                items: [...state.items, action.payload]
            }
        case SUBMIT_ITEMS:
            return {
                ...state,
                clave: '',
                descripcion: '',
                unidad: '',
                items: [],
                mensaje: action.payload
            }
        case ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state
    }
}