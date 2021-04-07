// Se importan las librerias
import { useState, useContext } from 'react';
import { 
    Box,
    Drawer,
    IconButton,
} from '@material-ui/core';
import { CancelPresentation } from '@material-ui/icons';

import clsx from 'clsx';


// se importan los componentes
import ListItemsBi from '../modulos/bi/ListItemsBi';

// se importan los context
import barraContext from '../../context/barras/barraContext'
import authContext from '../../context/autenticacion/authContext'

// Se importan los estilos
import { styleBi } from '../../styles/bi/stylesBi'

// se crea y exporta el componente
export default function MenuModulos() {

    const classes = styleBi()

    // Extraer la informacion de la barra
    const barrasContext = useContext(barraContext)
    const { barra, ocultarBarra, modulo } = barrasContext


    const menuModulo = () => {
        switch(modulo){
            case 'BI':
                return <ListItemsBi/>
        }
    }

    return (
        <Box style={{background:'#202444'}}>
        <Drawer
            variant="permanent"
            classes={{
            paper: clsx(classes.drawerPaper, !barra && classes.drawerPaperClose),
            }}
            open={barra}
            
        >
            <div style={{background:'#202444'}} >
                <IconButton onClick={ocultarBarra} className={classes.toolbarIcon}>
                    <CancelPresentation fontSize="large"/>
                </IconButton>

            </div>
            {
                menuModulo()
            }
    </Drawer>
    </Box>
    );
}