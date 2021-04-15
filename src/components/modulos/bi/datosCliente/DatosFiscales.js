// se importan las librerias
import { Fragment } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Grid, Box, InputLabel, FormControl } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// se importan los estlos
import { NuevaObraStyle, BootstrapInput} from '../../../../styles/bi/stylesBi'

// se importan los context

const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#2286c3',
      },
    },
  });


 


export default function DatosFiscales() {

  const classes = NuevaObraStyle();

 

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
                  <BootstrapInput name='nombreObra' />
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Monto total</b>
                  </InputLabel>
                  <BootstrapInput name='montoTotal'/>
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Numero de contrato</b>
                  </InputLabel>
                  <BootstrapInput name='numeroContrato' />
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
                  <BootstrapInput name='nombreObra'/>
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Monto total</b>
                  </InputLabel>
                  <BootstrapInput name='montoTotal' />
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Numero de contrato</b>
                  </InputLabel>
                  <BootstrapInput name='numeroContrato' />
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