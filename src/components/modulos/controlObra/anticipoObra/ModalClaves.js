
// se importan las librerias
import { useState, useContext } from 'react'
import {Button, Dialog, DialogActions, DialogTitle, makeStyles, createMuiTheme} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import MaterialTable from 'material-table';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// se importan los estilos
import { tableIcons } from '../../../../styles/bi/stylesBi'

// se importa los context
import anticipoObraContext from '../../../../context/contabilidad/anticipoObra/anticipoObraContext'
import alertaContext from '../../../../context/alertas/alertaContext'

// se crea y se exporta el componente
export default function ModalClaves({ estado, guardarEstado }) {


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
    <div>
        <Dialog
        open={estado}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <div >
        <MaterialTable
                style={{background: '#E3F2FD'}}
                icons={tableIcons}
                title={<h3>CONCEPTOS</h3>}

                columns={[
                    {   title: 'Clave',
                        field: 'clave',
                        cellStyle: {
                            background: 'linear-gradient(#eeffff,#bbdefb)',
                            color: '#000',
                            width:'20%',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 15
                        },
                    },
                    {   title: 'Descripcion',
                        field: 'descripcion',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'50%',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 15,
                        },
                    },
                    {   title: 'Unidad',
                        field: 'unidad',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'5%',
                            border: "1px solid #ccc",
                            fontSize: 20,
                            textAlign: 'center'
                        },
                    },
                ]}
                data={partidas_obra}
                actions={[
                    {
                        icon: props => <Button size="small" variant="contained" color="primary" >Seleccionar</Button>,
                        tooltip:  <Typography>SELECCIONAR</Typography>,
                        onClick: (event, rowData) => selectClave(rowData.clave)
                    },
                ]}
                options={{
                    actionsColumnIndex: -1,
                    headerStyle: {
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        color: "#000",
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 15,
                        fontWeight: 600
                                },

                    actionsCellStyle:{
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        width:'2%',
                    }
                }}
            localization={{
                header: {
                    actions: 'Seleccionar'
                },
            }}
            />
        </div>
      </Dialog>
    </div>
  );
}