import {
    MOSTRAR_BARRA,
    OCULTAR_BARRA
} from '../../types'

export default (state, action) => {
    switch(action.type){
        case MOSTRAR_BARRA:
            return {
                barra: true
            }
        case OCULTAR_BARRA:
            return {
                barra: false
            }
        default:
            return state
    }
}