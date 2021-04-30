// se importan las librerias
import React, { Fragment, useContext, useEffect } from 'react';
import {
    Fade,
    CssBaseline,
    Typography,
    Paper
} from '@material-ui/core/';


// se importan los componentes
import InformacionContrato from './informacionContrato/InformacionContrato'
import imagenes from '../../../../img/asets/imagenes';
import TablaContratos from './TablaContratos'

// se importan los estlos
import { styleRegistroObra } from '../../../../styles/bi/stylesBi'

// se importan los context
import obrasCreadasContext from '../../../../context/general/obrasCreadas/obrasCreadasContext'
import obrasContext from '../../../../context/obras/obrasContext'

// se crea y exporta el componente
export default function ContratosObras() {
    const classes = styleRegistroObra();

    // se extrae la informacion del context
    const obrasCreadassContext = useContext(obrasCreadasContext)
    const { opcion, filtrarObras } = obrasCreadassContext

    const obrassContext = useContext(obrasContext)
    const { obrasCreadas } = obrassContext

    useEffect(() => {
        filtrarObras('todos', obrasCreadas)
    }, [])

    const paginas = () => {
        switch(opcion){
            case 0:
                return <TablaContratos/>
            case 1:
                return <InformacionContrato/>
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
                            <h5>CONTRATOS<hr className={classes.hr}/></h5>
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
