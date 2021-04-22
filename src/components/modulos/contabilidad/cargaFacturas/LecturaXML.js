
// se importan las librerias y hooks
import { Fragment, useContext } from 'react';

// se importan los componentes
import DatosGenerales from './DatosGenerales'
import TablaConceptos from './TablaConceptos'
import CargarArchivo from './CargarArchivo'

// se importan los context
import cargaFacturaContext from '../../../../context/contabilidad/cargaFacturas/cargaFacturaContext'

// se crea y exporta el componente
export default function LecturaXML () {

    // se extrae la informacion de cargaFacturaContext
    const cargaFacturasContext = useContext(cargaFacturaContext)
    const { guardarFactura, informacion } = cargaFacturasContext

    const handleSubmit = e => {
        e.preventDefault()
        if(informacion.folioFiscal === ''){
            alert('error')
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

