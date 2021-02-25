import { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Tarea = ({ tarea }) => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext

    // Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext)
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext


    // Extraer el prouyecto
    const [ proyectoActual ] = proyecto

    // Funcion que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const handleEliminar = () => {
        eliminarTarea(tarea.id)
        obtenerTareas(proyectoActual.id)
    }

    // Funcion que modifica el estado de las tareas
    const handleEstado = tarea => {
        tarea.estado = tarea.estado ? false : true            
        
        cambiarEstadoTarea(tarea)
        obtenerTareas(proyectoActual.id)
    }

    // Agregar una tarea actual cuando el usuario desea editarla
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea)
    }

    return (
        <li className='tarea sombra'>
            <p>{ tarea.nombre }</p>

            <div className='estado'>
                {
                    tarea.estado
                    ?
                    (
                        <button
                            type='button'
                            className='completo'
                            onClick={() => handleEstado(tarea)}
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type='button'
                            className='incompleto'
                            onClick={() => handleEstado(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={() => seleccionarTarea(tarea)}                    
                >Editar</button>

                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={() => handleEliminar()}
                >Eliminar</button>
            </div>
        </li>
    );
}
 
export default Tarea;