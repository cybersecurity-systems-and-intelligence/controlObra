import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form'
import { makeStyles, Grid, Card, styled, Fab, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { styleCargaFacturas, themeCargaFacturas, ButtonCargaFacturas } from '../../../../styles/bi/stylesBi'


import {tableIcons} from '../../../../styles/bi/stylesBi'
import MaterialTable from 'material-table';
import api from '../../../../libs/api'

// se crea y exporta el componente
export default function CargaFactura () {

    const css = styleCargaFacturas()

    const { register, handleSubmit } = useForm()

    const [nombrefichero, guardarNombreFichero] = useState(`Buscar fichero...`)
    const [rows, guardarRows] = useState([])

    const cambiarTexto = e => {
        guardarNombreFichero(e.target.files[0].name);
    }


    const onSubmitCarga = async (data) => {
        try{
            const formData = new FormData()

            formData.append("file", data.file[0])
            console.log(formData);
            if(data.file[0].type !=='application/vnd.ms-excel'){
                alert('formato incorrecto')
                return
            }

            const res = await api.consultarItems(formData)
            console.log(res);
            if(res.data.length > 0) {
                console.log(res.data);
                guardarRows(res.data)
                return
            }else{
                alert('Debe ingresar un archivo csv con la estructura correcta' )
                return
            }
        }catch(err){
            alert('Debe ingresar un archivo csv con la estructura correcta' )
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
            <MaterialTable
            style={{background: '#E3F2FD',  marginTop: '5%', marginBottom:  '5%', border: "2px solid #ccc", borderRadius: 25,}}
            icons={tableIcons}
            title={<h3>PARTIDAS</h3>}
            options={{
                headerStyle: {
                    border: "1px solid #ccc",
                    textAlign: 'center'
                }
            }}
            columns={[
                {   title: 'Partida',
                    field: 'partida',
                    defaultGroupOrder: 0,
                    cellStyle: {
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        color: '#000',
                        width:'100%',
                    },
                },
                {   title: 'Clave',
                    field: 'clave',
                    cellStyle: {
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        color: '#000',
                        width:'10%',
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 12,
                        fontWeight: 700
                    },
                },
                {   title: 'Descripcion',
                    field: 'descripcion',
                    type: 'text',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'100%',
                        border: "1px solid #ccc",
                        textAlign: 'justify',
                        fontSize: 16
                    },
                },
                {   title: 'Unidad',
                    field: 'unidad',
                    type: 'numeric',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'9%',
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 18,

                    },
                },
                {   title: 'Requeridos',
                    field: 'requeridos',
                    type: 'numeric',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'9%',
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 18,
                        fontWeight: 600
                    },
                },
            ]}
            data={rows}
        />
        </Fragment>
    );
}

