// se importan las librerias
import React, { Fragment, useContext } from 'react';
import {
    Fade,
    CssBaseline,
    Typography,
    Paper
} from '@material-ui/core/';

// se importan los estlos
import { styleRegistroObra } from '../../../../styles/bi/stylesBi'
import ProgresBar from './ProgresBar'

// se importan los state
import alertaContext from '../../../../context/alertas/alertaContext'

// se crea y exporta el componente
export default function RegistroObra() {
    const classes = styleRegistroObra();

    // se extrae la informacion del context
    const alertasContext = useContext(alertaContext)
    const { alerta } = alertasContext

    return (
        <Fragment>
            <CssBaseline />
            <main className={classes.layout}>
            { alerta ? ( <div className={alerta.categoria}>{ alerta.msg }</div> ) : null }
                <Fade in={true}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" align="center" component='div'>
                            <h5>Registrar Obra<hr className={classes.hr}/></h5>
                        </Typography>
                        <br/>
                        <ProgresBar/>
                    </Paper>
                </Fade>
            </main>
        </Fragment>
    );
}
