import { useContext, useState, useEffect } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {

    // Extraer si un proyexto esta activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto,  } = proyectosContext

    // Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext)
    const {
        tareaseleccionada,
        agregarTarea,
        errortarea,
        validarTarea,
        obtenerTareas,
        actualizarTarea,
        limpiarTarea
    } = tareasContext    

    // state del formulario
    const [ tarea, guardarTarea ] = useState({
        nombre: '',
    })

    // Extraer el nombre del proyecto
    const { nombre } = tarea

    // Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada])

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

        // Revisar si es edicion o si es nueva tarea
        if (tareaseleccionada){
            // Actualizar tarea existente
            actualizarTarea(tarea)
            // Elimina tareaseleccionada del state
            limpiarTarea()
        }else{
            // Agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoactual.id
            tarea.estado = false
            agregarTarea(tarea)                    
        }        

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
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
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