// se importan las librerias
import React, { Fragment, useContext } from 'react';
import {
    Fade,
    CssBaseline,
    Typography,
    Paper
} from '@material-ui/core/';


// se importan los componentes
import InformacionObra from './informacionObra/InformacionObra'
import imagenes from '../../../../img/asets/imagenes';
import TablaObras from './TablaObras'

// se importan los estlos
import { styleRegistroObra } from '../../../../styles/bi/stylesBi'

// se importan los context
import obrasCreadasContext from '../../../../context/general/obrasCreadas/obrasCreadasContext'

// se crea y exporta el componente
export default function Obras() {
    const classes = styleRegistroObra();

    // se extrae la informacion del context
    const obrasCreadassContext = useContext(obrasCreadasContext)
    const { opcion } = obrasCreadassContext

    const paginas = () => {
        switch(opcion){
            case 0:
                return <TablaObras/>
            case 1:
                return <InformacionObra/>
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
                            <h5>OBRAS<hr className={classes.hr}/></h5>
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
