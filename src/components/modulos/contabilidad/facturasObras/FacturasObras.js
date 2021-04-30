// se importan las librerias
import React, { Fragment, useContext, useEffect } from 'react';
import {
    Fade,
    CssBaseline,
    Typography,
    Paper
} from '@material-ui/core/';
import imagenes from '../../../../img/asets/imagenes';

// se importan los componentes


// se importan los estlos
import { styleRegistroObra } from '../../../../styles/bi/stylesBi'

// se importan los context


// se crea y exporta el componente
export default function ContratosObras() {
    const classes = styleRegistroObra();

    // se extrae la informacion del context


    const paginas = () => {
        switch(0){
            case 0:
                return '1'
            case 1:
                return '2'
            default:
                return 'Error desconocido'
        }
    }

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
                            <h5>FACTURAS<hr className={classes.hr}/></h5>
                        </Typography>
                        <br/>
                        {
                            paginas()
                        }
                    </Paper>
                </Fade>
            </main>            
        </Fragment>
    );
}
