
// se importan las librerias
import { useContext } from 'react'
import {Button, Dialog, DialogActions, DialogTitle, makeStyles, createMuiTheme} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

// se importan los componentes
import DetallesObra from './DetallesObra'
import TablaPartidas from './TablaPartidas'

// se importa los context
import obrasCreadasContext from '../../../../../context/general/obrasCreadas/obrasCreadasContext'

const useStyles = makeStyles({
  md:{
    background:'#f1f8e9',
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px',
  }
})
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b3d233',
    },
    secondary: {
      main: '#d32f2f',
    },
  },
});

// se crea y se exporta el componente
export default function Modal() {
  
  const css = useStyles()  

  const obrasCreadassContext = useContext(obrasCreadasContext)
  const { cambiarOpcion } = obrasCreadassContext

  

  return (
    <div >      
      <DetallesObra/>
      <TablaPartidas/>
      <button onClick={e => cambiarOpcion(0)}>Atras</button>
    </div>
  );
}