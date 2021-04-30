import { Fragment } from 'react';

// se importan los componentes
import DatosPrincipales from './DatosPrincipales'
import TablaPartidas from './TablaPartidas'

const DatosObra = () => {
    return (
        <Fragment>
            <DatosPrincipales/>
            <TablaPartidas/>
        </Fragment>
    );
}
 
export default DatosObra;