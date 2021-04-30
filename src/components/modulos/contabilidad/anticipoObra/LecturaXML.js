
// se importan las librerias y hooks
import { Fragment, useContext, useEffect } from 'react';

// se importan los componentes
import DatosGenerales from './DatosGenerales'
import TablaConceptos from './TablaConceptos'
import CargarArchivo from './CargarArchivo'

// se importan los context
import anticipoObraContext from '../../../../context/contabilidad/anticipoObra/anticipoObraContext'
import alertaContext from '../../../../context/alertas/alertaContext'
import modalContext from '../../../../context/modal/modalContext'

// se crea y exporta el componente
export default function LecturaXML () {

    // se extrae la informacion de cargaFacturaContext
    const anticipoObrasContext = useContext(anticipoObraContext)
    const { guardarFactura, informacion } = anticipoObrasContext

    const alertasContext = useContext(alertaContext)
    const { mostrarAlerta } = alertasContext

    const modalsContext = useContext(modalContext)
    const { peticion, estadoModal } = modalsContext

    // useEffect(() => {
    //     guardarFactura()
    // }, [peticion])

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     if(informacion.folioFiscal === ''){
    //         mostrarAlerta('Carga una factura con formato XML', 'alerta-error')
    //         return
    //     }
    //     estadoModal(true)
    // }

    return (
        <Fragment>            
            <CargarArchivo/>
            <DatosGenerales/>
            <br/>
            <TablaConceptos/>
            {/* <form
                onSubmit={handleSubmit}
            >
                <input
                    type='submit'
                    value='Registrar'
                />
            </form> */}
        </Fragment>
        
    );
}

