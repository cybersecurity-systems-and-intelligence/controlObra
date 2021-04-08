// se importan las librerias
import React, { Fragment, useContext, useEffect } from 'react';
import {
    Fade,
    CssBaseline,
    Typography,
    Paper
} from '@material-ui/core/';

// se importan los componentes
import LecturaXML from './LecturaXML'

// se importan los estlos
import { styleRegistroObra } from '../../../../styles/bi/stylesBi'

// se importan los context
import cargaFacturaContext from '../../../../context/cargaFacturas/cargaFacturaContext'
import alertaContext from '../../../../context/alertas/alertaContext'

// se crea y exporta el componente
export default function CargaFacturas() {
    const classes = styleRegistroObra();

    // Extraer los valores del context de la factura
    const cargaFacturasContext = useContext(cargaFacturaContext)
    const { mensaje } = cargaFacturasContext

    // Extraer los valores del context de alerta
    const alertasContext = useContext(alertaContext)
    const { alerta, mostrarAlerta } = alertasContext

    useEffect(() => {

        if(mensaje){
            console.log(mensaje);
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
    }, [mensaje])

    return (
        <Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                { alerta ? ( <div className={alerta.categoria}>{ alerta.msg }</div> ) : null }
                <Fade in={true}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" align="center" component='div'>
                            <h5>Carga de Facturas<hr className={classes.hr}/></h5>
                        </Typography>
                        <br/>
                        <LecturaXML/>
                    </Paper>
                </Fade>
            </main>
        </Fragment>
    );
}
 