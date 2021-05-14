
// se importan las librerias
import { useState, useContext } from 'react'
import {Button, Dialog, DialogActions, DialogTitle, makeStyles, createMuiTheme} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import MaterialTable from 'material-table';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// se importan los estilos
import { tableIcons } from '../../../../styles/bi/stylesBi'

// se importa los context
import anticipoObraContext from '../../../../context/contabilidad/anticipoObra/anticipoObraContext'
import alertaContext from '../../../../context/alertas/alertaContext'

const useStyles = makeStyles({
  md:{
    background:'#73ADD1',
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px',
  }
})
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#d32f2f',
    },
  },
});

// se crea y se exporta el componente
export default function ModalClaves({ estado, guardarEstado }) {
  
     const css = useStyles()

    // Extraer los valores del context de la factura
    const anticipoObrasContext = useContext(anticipoObraContext)
    const { informacion, obraSeleccionada, conceptoSeleccionado, seleccionConcepto, seleccionClave } = anticipoObrasContext

    const { conceptos } = informacion
    const { partidas_obra } = obraSeleccionada

    const alertasContext = useContext(alertaContext)
    const { mostrarAlerta } = alertasContext

    

    const handleClose = () => {
        guardarEstado(false);   
        seleccionConcepto('') 
    };

    const handleAcept = () => {
        guardarEstado(false)
        seleccionConcepto('')
    };
    const selectClave = (clave) => {
        let band = false
        const l = conceptos.map(value => {
            if(value.claveSelect !== clave){
                if(value.NoIdentificacion == conceptoSeleccionado){
                    return {
                        ...value,
                        claveSelect: clave
                    }
                }else{
                    return {
                        ...value,
                    }
                }
            }else{
                mostrarAlerta('la clave ya ha sido seleccionada', 'alerta alerta-error')
                band = true                
            }
        })
        if(band === false){
            const ob = {
                ...informacion,
                conceptos: l
            }
            seleccionClave(ob)
            handleAcept()
        }
        
        
    }

  return (

    
    <div >
      <Dialog
      
        open={estado}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" 
        className={css.md}>
          {`✋🏻 ¿Estas seguro que quieres continuar?`}
        </DialogTitle>
        <div>
        <MaterialTable
                style={{background: '#E3F2FD',  marginTop:5, marginBottom:5, border: "2px solid #ccc", borderRadius: 25}}
                icons={tableIcons}
                title={<h3>CONCEPTOS</h3>}

                options={{
                    headerStyle: {
                        backgroundColor: "#82b1ff",
                        color: "#FFF",
                        border: "1px solid #000",
                        textAlign: 'center',
                        fontSize: 18
                    }
                }}

                columns={[
                    {   title: 'Clave',
                        field: 'clave',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'10%',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 20
                        },
                    },
                    {   title: 'Descripcion',
                        field: 'descripcion',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'100%',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 20,
                        },
                    },
                    {   title: 'Unidad',
                        field: 'unidad',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'10%',
                            border: "1px solid #ccc",
                            fontSize: 11,
                            textAlign: 'justify'
                        },
                    },
                ]}
                data={partidas_obra}
                actions={[
                    {
                        icon: ArrowForwardIosIcon,
                        tooltip: 'Ver obra',
                        onClick: (event, rowData) => selectClave(rowData.clave)
                    },
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
            />
        </div>

        <ThemeProvider theme={theme}>
        <DialogActions >
          <Button onClick={handleClose} color="secondary" style={{fontSize:19,fontWeight:'bold'}}>
            Cancelar
          </Button>
          <Button onClick={handleAcept} color="primary" style={{fontSize:20, fontWeight:'bold'}} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}