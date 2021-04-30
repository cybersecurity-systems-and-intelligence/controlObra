import { Fragment } from 'react';

// se importan los componentes
import DatosPersonales from './DatosPersonales'
import DatosFiscales from './DatosFiscales'
import DatosBancarios from './DatosBancarios'
import { styleTitle } from '../../../../../src/styles/bi/stylesBi'
const Resumen = () => {

    const css = styleTitle()

    return (
        <Fragment>
            <h3 className={css.title} >DATOS PERSONALES</h3>
                <DatosPersonales estado={true}/>
            <h3 className={css.title} >DATOS FISCALES</h3>
                <DatosFiscales estado={true}/>
            <h3 className={css.title} >DATOS BANCARIOS</h3>
                <DatosBancarios estado={true}/>
        </Fragment>
    );
}
 
export default Resumen