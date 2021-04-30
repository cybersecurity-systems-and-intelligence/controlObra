import React from 'react';
import { Fragment, useContext } from 'react';
import { Box, TextField, withStyles } from '@material-ui/core';
import { Grid, InputLabel, FormControl, createMuiTheme } from '@material-ui/core';
import { BootstrapInput } from '../../../../../../styles/bi/stylesBi'
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

// se importan los estlos
import { NuevaObraStyle } from '../../../../../../styles/bi/stylesBi'
import { styleTitle } from '../../../../../../styles/bi/stylesBi'

// se importan los context
import contratosObrasContext from '../../../../../../context/general/contratosObras/contratosObrasContext'

const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#2286c3',
      },
    },
  });

const DatosFiscales = () => {
    const classes = NuevaObraStyle();
    const title = styleTitle()

    const contratosObrassContext = useContext(contratosObrasContext)
    const { contratoSeleccionado } = contratosObrassContext

    const { datos_cliente } = contratoSeleccionado
    const { datos_fiscales } = datos_cliente
    const {
      nombreEmpresa,
      rfc,
      direccionFiscal,
      direccionOficina,
      calleReferencia1,
      calleReferencia2,
      cp,
      colonia,
      ciudad,
      estado
    } = datos_fiscales

    return (
      <Fragment>
      <h3 className={title.title}>DATOS FISCALES CLIENTE</h3>
          <Box className={classes.box}>
            <ThemeProvider theme={theme}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Box>
                  <Grid container spacing={16} justify="flex-start">
                    <Grid  item xs={12} sm={6} md={4} lg={4}>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b style={{fontSize:20, color:'#388CBD'}}>Empresa | Persona Fisica</b>
                        </InputLabel>
                        <BootstrapInput
                        style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}
                          name='nombreEmpresa'  disabled={true} value={nombreEmpresa} />
                      </FormControl>
                    </Grid>

                    <Grid  item xs={12} sm={6} md={4} lg={4}>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b style={{fontSize:20, color:'#388CBD'}}>RFC</b>
                        </InputLabel>
                        <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}  name='rfc'  disabled={true} value={rfc}/>
                      </FormControl>
                    </Grid>

                    <Grid  item xs={12} sm={6} md={4} lg={4}>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b style={{fontSize:20, color:'#388CBD'}}>Direccion Fiscal</b>
                        </InputLabel>
                        <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} value={direccionFiscal} name='direccionFiscal'  disabled={true}/>
                      </FormControl>
                  </Grid>

                    <Grid  item xs={12} sm={6} md={4} lg={4}>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b style={{fontSize:20, color:'#388CBD'}}>Direccion Oficina</b>
                        </InputLabel>
                        <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} value={direccionOficina} name='direccionOficina' disabled={true}/>
                      </FormControl>
                    </Grid>

                    <Grid  item xs={12} sm={6} md={4} lg={4}>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b style={{fontSize:20, color:'#388CBD'}}>Calle Referencia 1</b>
                        </InputLabel>
                        <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} value={calleReferencia1} name='calleReferencia1' disabled={true}/>
                      </FormControl>
                    </Grid>

                    <Grid  item xs={12} sm={6} md={4} lg={4}>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b style={{fontSize:20, color:'#388CBD'}}>Calle Referencia 2</b>
                        </InputLabel>
                        <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} value={calleReferencia2} name='calleReferencia2' disabled={true}/>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>


                <Box>
                <Grid container spacing={16} justify="flex-start">

                  <Grid  item xs={12} sm={6} md={4} lg={4}>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b style={{fontSize:20, color:'#388CBD'}}>Codigo Postal</b>
                        </InputLabel>
                        <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} value={cp} name='cp' disabled={true}/>
                      </FormControl>
                    </Grid>

                    <Grid  item xs={12} sm={6} md={4} lg={4}>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b style={{fontSize:20, color:'#388CBD'}}>Colonia</b>
                        </InputLabel>
                        <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} value={colonia} name='colonia' disabled={true}/>
                      </FormControl>
                    </Grid>

                    <Grid  item xs={12} sm={6} md={4} lg={4}>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b style={{fontSize:20, color:'#388CBD'}}>Ciudad</b>
                        </InputLabel>
                        <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} value={ciudad} name='ciudad' disabled={true} />
                      </FormControl>
                    </Grid>

                  <Grid  item xs={12} sm={6} md={4} lg={4}>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b style={{fontSize:20, color:'#388CBD'}}>Estado</b>
                        </InputLabel>
                        <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} value={estado} name='estado' disabled={true}/>
                      </FormControl>
                    </Grid>
                    </Grid>
                </Box>
              </MuiPickersUtilsProvider>
            </ThemeProvider>
          </Box>
        </Fragment>
    )}

export default DatosFiscales;