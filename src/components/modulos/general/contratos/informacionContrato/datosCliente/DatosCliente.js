import { Fragment } from 'react';

// se importan los componentes
import DatosBancarios from './DatosBancarios'
import DatosFiscales from './DatosFiscales'
import DatosPersonales from './DatosPersonales'

const DatosCliente = () => {
    return (
        <Fragment>
            <DatosPersonales/>
            <DatosFiscales/>
            <DatosBancarios/>
        </Fragment>
    );
}
 
export default DatosCliente;