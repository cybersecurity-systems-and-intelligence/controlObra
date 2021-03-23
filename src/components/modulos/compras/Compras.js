// Se importan las librerias
import { useState } from 'react';
import { 
    CssBaseline,
    Drawer,
    AppBar,
    Toolbar, 
    Typography,
    IconButton,
    Badge
} from '@material-ui/core';
import { Menu, ChevronLeft, ExitToApp } from '@material-ui/icons';
import clsx from 'clsx';

// se importan los componentes
import ListItems from './ListItems';
import Barra from '../../layout/Barra'

// Se importan los estilos
import { styleCompras } from '../../../styles/compras/stylesCompras'

// se crea y exporta el componente
export default function Compras() {
  
  const classes = styleCompras() 
  
  const [ open, setOpen ] = useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root} align="center">
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <Menu />
          </IconButton>
        
          
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        {
          <ListItems/>
        }
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
      </main>
    </div>
  );
}