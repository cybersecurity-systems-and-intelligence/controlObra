import { Fragment } from 'react';

// se importan los componentes
import DatosCliente from './datosCliente/DatosCliente'
import DatosObra from './datosObra/DatosObra'

const InformacionContrato = () => {
    return (
        <Fragment>
            <DatosCliente/>
            <DatosObra/>
        </Fragment>
    );
}
 
export default InformacionContrato;