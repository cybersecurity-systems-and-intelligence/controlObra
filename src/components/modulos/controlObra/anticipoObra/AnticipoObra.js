// se importan las librerias
import { Fragment, useContext, useEffect } from 'react';
import {
    Fade,
    CssBaseline,
    Typography,
    Paper
} from '@material-ui/core/';
import moduleName from 'module';

// se importan los componentes
import LecturaXML from './LecturaXML'
import imagenes from '../../../../img/asets/imagenes';
import Modal from '../../Modal'
import PogresBarAnticipo from './PogresBarAnticipo'


// se importan los estlos
import { styleRegistroObra } from '../../../../styles/bi/stylesBi'

// se importan los context
import anticipoObraContext from '../../../../context/contabilidad/anticipoObra/anticipoObraContext'
import alertaContext from '../../../../context/alertas/alertaContext'


// se crea y exporta el componente
export default function AnticipoObra() {
    const classes = styleRegistroObra();

    // Extraer los valores del context de la factura
    const anticipoObrasContext = useContext(anticipoObraContext)
    const { mensaje_anticipo_obra } = anticipoObrasContext

    // Extraer los valores del context de alerta
    const alertasContext = useContext(alertaContext)
    const { mostrarAlerta } = alertasContext

    useEffect(() => {

        // si el mensaje es distinto a null se mostrará
        if(mensaje_anticipo_obra){           
            mostrarAlerta(mensaje_anticipo_obra.msg, mensaje_anticipo_obra.categoria)
        }
    }, [mensaje_anticipo_obra])

    return (
        <Fragment>
            <CssBaseline />
            <main className={classes.layout}>                
                <Fade in={true}>
                    <Paper className={classes.paper}>
                    <div>
                        <img style={{width: 200}} src={imagenes.imgjpg} alt='PALA' />
                    </div>
                        <Typography variant="h4" align="center" component='div'>
                            <h5>ANTICIPO DE OBRA<hr className={classes.hr}/></h5>
                        </Typography>
                        <br/>
                        <PogresBarAnticipo/>
                    </Paper>
                </Fade>
            </main>
            <Modal/>
        </Fragment>
    );
}
 