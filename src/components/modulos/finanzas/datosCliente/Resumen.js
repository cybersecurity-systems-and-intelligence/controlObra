import { Fragment } from 'react';

// se importan los componentes
import DatosPersonales from './DatosPersonales'
import DatosFiscales from './DatosFiscales'
import DatosBancarios from './DatosBancarios'

const Resumen = () => {
    return (
        <Fragment>
            <DatosPersonales estado={true}/>
            <DatosFiscales estado={true}/>
            <DatosBancarios estado={true}/>
        </Fragment>
    );
}
 
export default Resumen