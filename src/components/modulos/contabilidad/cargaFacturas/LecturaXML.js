
// se importan las librerias y hooks
import { Fragment, useContext } from 'react';

// se importan los componentes
import DatosGenerales from './DatosGenerales'
import TablaConceptos from './TablaConceptos'
import CargarArchivo from './CargarArchivo'

// se importan los context
import cargaFacturaContext from '../../../../context/contabilidad/cargaFacturas/cargaFacturaContext'
import alertaContext from '../../../../context/alertas/alertaContext'

// se crea y exporta el componente
export default function LecturaXML () {

    // se extrae la informacion de cargaFacturaContext
    const cargaFacturasContext = useContext(cargaFacturaContext)
    const { guardarFactura, informacion } = cargaFacturasContext

    const alertasContext = useContext(alertaContext)
    const { mostrarAlerta } = alertasContext

    const handleSubmit = e => {
        e.preventDefault()
        if(informacion.folioFiscal === ''){
            mostrarAlerta('Carga una factura con formato XML', 'alerta-error')
            return
        }
        guardarFactura()
    }

    return (
        <Fragment>            
            <CargarArchivo/>
            <DatosGenerales/>
            <br/>
            <TablaConceptos/>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type='submit'
                    value='Registrar'
                />
            </form>
        </Fragment>
        
    );
}

