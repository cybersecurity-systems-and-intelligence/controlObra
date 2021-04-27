import { Fragment } from 'react';

// se importan los componentes
import DatosPrincipales from './DatosPrincipales'
import Partidas from './Partidas'

const DatosObra = () => {
    return (
        <Fragment>
            <DatosPrincipales/>
            <Partidas/>
        </Fragment>
    );
}
 
export default DatosObra;