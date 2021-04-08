import { Fragment, useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { makeStyles, Grid, Card, styled, Fab, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { styleCargaFacturas, themeCargaFacturas, ButtonCargaFacturas } from '../../../../styles/bi/stylesBi'


import {tableIcons} from '../../../../styles/bi/stylesBi'
import MaterialTable from 'material-table';
import api from '../../../../libs/api'

// se importan los componentes
import TablaPartidas from './TablaPartidas'

// se importan los state
import registroObraContext from '../../../../context/registroObra/registroObraContext'
import alertaContext from '../../../../context/alertas/alertaContext'

const theme = createMuiTheme({
    palette: {
    secondary: {
        main: '#c5cae9',
        },
    },
})

const useStyles = makeStyles({
    ancho: {
        width: '100%'
    },
    cardIn: {
        width: "100%",
        background:"#f8fdff",
        paddingBottom: "10%",
        paddingLeft: "5%",
        paddingRight: "5%",
        boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
    }
})

const ButtonComponent = styled('button')({
    height: '40px',
    width: '100%',
    background: 'linear-gradient(#5e92f3, #1565c0)',
    color:'#fff',
    borderColor:'#64b5f6',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize:'15px',
    textAlign: 'center',
    marginTop: '8%',
    '&:hover': {
        background: '#64b5f6',
        color:'white'
    },
})
// se crea y exporta el componente
export default function CargaFactura () {

    const css = styleCargaFacturas()

    const { register, handleSubmit } = useForm()

    const [nombrefichero, guardarNombreFichero] = useState(`Buscar fichero...`)
    
    // se extrae la informacion del context
    const registroObrasContext = useContext(registroObraContext)
    const { mensaje, guardarPartidas } = registroObrasContext

    const alertasContext = useContext(alertaContext)
    const { mostrarAlerta } = alertasContext

    useEffect(() => {

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
    }, [mensaje])

    const cambiarTexto = e => {
        guardarNombreFichero(e.target.files[0].name);
    }


    const onSubmitCarga = async (data) => {

        try{
      
            const formData = new FormData()

            formData.append("file", data.file[0])

            if(data.file[0].type !=='application/vnd.ms-excel'){            
                mostrarAlerta('Debe ingresar un archivo csv con la estructura correcta', 'alerta alerta-error')
                return
            }
            guardarPartidas(formData)          
        } catch {
            mostrarAlerta('Debe ingresar un archivo csv con la estructura correcta', 'alerta alerta-error')
            return
        }                     
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmitCarga)}>
                <ThemeProvider theme={themeCargaFacturas}>
                    {/* <Grid container spacing={3}>
                        <Grid item xs={12} md={3}>
                            <InputBtnComponent ref={register} type="file" name="file" accept='.csv'/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ButtonComponent>Cargar</ButtonComponent>
                        </Grid>
                    </Grid>                */}
                    <Grid 
                        container
                        spacing={3}
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item xs={12} md={3}>
                            <Card className={css.cardIn}>
                            <h3>SELECCIONE UN FICHERO .CSV</h3>
                                <label>
                                    <input 
                                        ref={register} 
                                        type="file" 
                                        name="file" 
                                        accept=".csv"  
                                        onChange={cambiarTexto}
                                        style={{ display: "none" }}
                                    />
                                    <Fab
                                        color="secondary"
                                        size="large"
                                        component="span"
                                        aria-label="add"
                                        variant="extended"
                                    >
                                    {nombrefichero}
                                    </Fab>
                                </label>
                            </Card>
                        </Grid>
                    </Grid>  
                    <Grid item xs={6} md={3}>
                            <ButtonCargaFacturas>AÑADIR</ButtonCargaFacturas>
                        </Grid>
                </ThemeProvider>
            </form>

            <TablaPartidas/>
        </Fragment>
    );
}

