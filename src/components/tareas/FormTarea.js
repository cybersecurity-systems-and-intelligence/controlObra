import { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {

    // Extraer si un proyexto esta activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto,  } = proyectosContext

    // Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext)
    const { agregarTarea, errortarea, validarTarea, obtenerTareas } = tareasContext

    // state del formulario
    const [ tarea, guardarTarea ] = useState({
        nombre: '',
    })

    // Extraer el nombre del proyecto
    const { nombre } = tarea

    if (!proyecto) return null
    
    // Array destructuring para extraer el proyecto actual
    const [ proyectoactual ] = proyecto

    // Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    // Ejecturar el submit del formulario
    const handleSubmit = e => {
        e.preventDefault()

        // Validar
        if ( nombre.trim() === ''){
            validarTarea()
            return
        }        

        // Agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoactual.id
        tarea.estado = false
        agregarTarea(tarea)        

        // Reiniciar el formulario
        guardarTarea({
            nombre: '',
        })
        obtenerTareas(proyectoactual.id)
    }

    return (
        <div className='formulario'>
            <form
                onSubmit={handleSubmit}
            >
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre Tarea...'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                    
                </div>
                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Agregar Tarea'
                    />
                </div>
            </form>
            {
                errortarea
                ?
                <p className='mensaje error'>El nombre de la tarea es obligatorio</p>
                : 
                null
            }
        </div>
    );
}
 
export default FormTarea;