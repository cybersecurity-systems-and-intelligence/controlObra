import { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Proyecto from './Proyecto'

import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoProyectos = () => {

    // Extraer proyectos
    const proyectosContext = useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos()
    }, [])

    // revisar si proyectos tiene contenidos
    if ( proyectos.length === 0 ) return null        

    return (
        <ul className='listado-proyectos'>
            <TransitionGroup>
                {
                    proyectos.map(proyecto => (
                        <CSSTransition
                            key={proyecto.id}
                            timeout={200}
                            classNames="proyecto"
                        >
                            <Proyecto
                                proyecto={proyecto}
                            />
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </ul>
    );
}
 
export default ListadoProyectos;