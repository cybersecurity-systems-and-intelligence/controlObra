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
    return (
<Fragment>
<h3 className={title.title}>DATOS FISCALES</h3>
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
                    name='nombreEmpresa'  disabled={true} />
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>RFC</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}  name='rfc'  disabled={true}/>
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Direccion Fiscal</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}  name='direccionFiscal'  disabled={true}/>
                </FormControl>
            </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Direccion Oficina</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}  name='direccionOficina' disabled={true}/>
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Calle Referencia 1</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}  name='calleReferencia1' disabled={true}/>
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Calle Referencia 2</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}  name='calleReferencia2' disabled={true}/>
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
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}  name='cp' disabled={true}/>
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Colonia</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}  name='colonia' disabled={true}/>
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Ciudad</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}  name='ciudad' disabled={true} />
                </FormControl>
              </Grid>

            <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Estado</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}  name='estado' disabled={true}/>
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