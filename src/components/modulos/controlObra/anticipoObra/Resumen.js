import { Fragment } from 'react';

// se importan los componentes
import DatosObra from './DatosObra'
import DatosGenerales from './DatosGenerales'
import TablaConceptos from './TablaConceptos'

const Resumen = () => {
    return (
        <Fragment>
            <DatosObra/>
            <DatosGenerales/>
            <TablaConceptos/>
        </Fragment>
    );
}
 
export default Resumen