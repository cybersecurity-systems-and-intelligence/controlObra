// se importan las librerias
import React, { Fragment } from 'react';
import {
    Fade,
    CssBaseline,
    Typography,
    Paper
} from '@material-ui/core/';

// se importan los componentes
import CargaFactura from './CargaFactura'

// se importan los estlos
import { styleRegistroObra } from '../../../../styles/bi/stylesBi'

// se crea y exporta el componente
export default function RegistroObra() {
    const classes = styleRegistroObra();

    return (
        <Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Fade in={true}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" align="center" component='div'>
                            <h5>Registrar Obra<hr className={classes.hr}/></h5>
                        </Typography>
                        <br/>                    
                        <CargaFactura/>                        
                    </Paper>
                </Fade>
            </main>
        </Fragment>
    );
}
 