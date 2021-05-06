// se importan las librerias
import React, { Fragment, useContext, useEffect } from 'react';
import {
    Fade,
    CssBaseline,
    Typography,
    Paper
} from '@material-ui/core/';


// se importan los componentes
import imagenes from '../../../../img/asets/imagenes';
import Formulario from './Formulario'

// se importan los estlos
import { styleRegistroObra } from '../../../../styles/bi/stylesBi'

// se importan los context
import nuevosItemsContext from '../../../../context/controlObra/nuevosItems/nuevosItemsContext'
import alertaContext from '../../../../context/alertas/alertaContext'

// se crea y exporta el componente
export default function NuevosItems() {
    const classes = styleRegistroObra();

    const nuevosItemssContext = useContext(nuevosItemsContext)
    const { mensaje } = nuevosItemssContext

    const alertasContext = useContext(alertaContext)
    const { mostrarAlerta } = alertasContext

    useEffect(() => {
        if(mensaje){
          mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
    }, [mensaje])


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
                            <h5>Nuevos Items<hr className={classes.hr}/></h5>
                        </Typography>
                        <br/>            
                        <Formulario/>        
                    </Paper>
                </Fade>
                
            </main>
        </Fragment>
    );
}
