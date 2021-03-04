import { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Tarea = ({ tarea }) => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext

    // Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext)
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea } = tareasContext


    // Extraer el prouyecto
    const [ proyectoActual ] = proyecto

    // Funcion que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const handleEliminar = () => {
        eliminarTarea(tarea.id)
        obtenerTareas(proyectoActual.id)
    }

    const handleEstado = () => {
        console.log('ddd');
       
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
                            onClick={() => console.log('jp;a')}
                        >Completos</button>
                    )
                    :
                    (
                        <button
                            type='button'
                            className='incompleto'
                        >Incompleto</button>
                    )
                }
            </div>

            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'                  
                >Editar</button>

                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </li>
    );
}
 
export default Tarea;