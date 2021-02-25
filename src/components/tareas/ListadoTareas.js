import { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Tarea from './Tarea'

import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const ListadoTareas = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext)
    const { proyecto, eliminarProyecto } = proyectosContext

    // Obtener las tareas del proyecto actual
    const tareasContext = useContext(tareaContext)
    const { tareasproyecto } = tareasContext
    
    if (!proyecto) return <h2>Selecciona un proyecto</h2>

    if (!tareasproyecto) return null      
    
    // Array destructuring para extraer el proyecto actual
    const [ proyectoactual ] = proyecto

    return (
        <Fragment>
            <h2>Proyecto: { proyectoactual.nombre }</h2>
            
            <ul className='listado-tareas'>
                {
                    tareasproyecto.length === 0 
                    ?
                    (<li className='tarea'>No hay tareas</li>)
                    :
                    <TransitionGroup>
                        {
                            tareasproyecto.map(tarea => (
                                <CSSTransition
                                    key={tarea.id}
                                    timeout={200}
                                    classNames="tarea"
                                >
                                    <Tarea
                                        tarea={tarea}
                                    />
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                    
                }
            </ul>
            <button
                type='button'
                className='btn btn-eliminar'
                onClick={() => eliminarProyecto(proyectoactual.id)}
            >Eliminar Protecto &times;</button>
        </Fragment>
    );
}
 
export default ListadoTareas;
