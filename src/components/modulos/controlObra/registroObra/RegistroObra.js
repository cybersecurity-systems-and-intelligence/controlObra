// se importan las librerias
import React, { Fragment, useContext, useEffect } from 'react';
import {
    Fade,
    CssBaseline,
    Typography,
    Paper
} from '@material-ui/core/';


// se importan los componentes
import Modal from '../../Modal'
import imagenes from '../../../../img/asets/imagenes';


// se importan los estlos
import { styleRegistroObra } from '../../../../styles/bi/stylesBi'
import ProgresBar from './ProgresBar'

// se importan los state
import alertaContext from '../../../../context/alertas/alertaContext'
import modalContext from '../../../../context/modal/modalContext'
import registroObraContext from '../../../../context/controlObra/registroObra/registroObraContext'

// se crea y exporta el componente
export default function RegistroObra() {
    const classes = styleRegistroObra();

    // se extrae la informacion del context
    const alertasContext = useContext(alertaContext)
    const { alerta } = alertasContext

    const modalsContext = useContext(modalContext)
    const { peticion } = modalsContext

    const registroObrasContext = useContext(registroObraContext)
    const { submitObra } = registroObrasContext

    useEffect(() => {
        if(peticion){
            submitObra()
        }
    }, [peticion])

    return (
        <Fragment>
            <CssBaseline />
            <main className={classes.layout}>
            { alerta ? ( <div className={alerta.categoria}>{ alerta.msg }</div> ) : null }
                <Fade in={true}>
                    <Paper className={classes.paper}>
                    <div>
                        <img style={{width: 200}} src={imagenes.imgjpg} alt='PALA' />
                    </div>
                        <Typography variant="h4" align="center" component='div'>
                            <h5>REGISTRAR OBRA<hr className={classes.hr}/></h5>
                        </Typography>
                        <br/>
                        <ProgresBar/>
                    </Paper>
                </Fade>
            </main>
            <Modal />
        </Fragment>
    );
}
