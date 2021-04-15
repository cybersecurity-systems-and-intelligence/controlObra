import React, { useState, useContext } from 'react';
import {  Fragment  } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Grid, Box } from '@material-ui/core';
import { NuevaObraStyle, BootstrapInput} from '../../../../styles/bi/stylesBi'

import { KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';

// se importan los context
import registroObraContext from '../../../../context/controlObra/registroObra/registroObraContext'

const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#2286c3',
      },
    },
  });


 


export default function NuevaObra() {

  const classes = NuevaObraStyle();

  const registroObrasContext = useContext(registroObraContext)
  const { 
    nombreObra,
    montoTotal,
    numeroContrato,
    fechaContrato,
    fechaInicio,
    fechaFin,
    estadoInput,
    handleChangeDatos,
    handleChangeFechas
  } = registroObrasContext

  const handleDateChange = (name, value) => {    
    handleChangeFechas(name, value)
  };

  const handleChange = e => {
    handleChangeDatos(e)
  }

return (
  <Fragment>
    <Box className={classes.box}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Box >
            <Grid container spacing={3}>
              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Nombre de la obra</b>
                  </InputLabel>
                  <BootstrapInput disabled={estadoInput} name='nombreObra' onChange={handleChange} value={nombreObra} />
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Monto total</b>
                  </InputLabel>
                  <BootstrapInput disabled={estadoInput} name='montoTotal' onChange={handleChange} value={montoTotal}/>
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Numero de contrato</b>
                  </InputLabel>
                  <BootstrapInput disabled={estadoInput} name='numeroContrato' onChange={handleChange} value={numeroContrato} />
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Grid container spacing={3}>
            <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Nombre de la obra</b>
                  </InputLabel>
                  <BootstrapInput disabled={estadoInput} name='nombreObra' onChange={handleChange} value={nombreObra} />
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Monto total</b>
                  </InputLabel>
                  <BootstrapInput disabled={estadoInput} name='montoTotal' onChange={handleChange} value={montoTotal}/>
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Numero de contrato</b>
                  </InputLabel>
                  <BootstrapInput disabled={estadoInput} name='numeroContrato' onChange={handleChange} value={numeroContrato} />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Box>
  </Fragment>
        );
}