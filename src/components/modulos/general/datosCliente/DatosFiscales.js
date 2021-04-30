// se importan las librerias
import { Fragment, useContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Grid, Box, InputLabel, FormControl } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// se importan los estlos
import { NuevaObraStyle, BootstrapInput} from '../../../../styles/bi/stylesBi'

// se importan los context
import datosClienteContext from '../../../../context/general/datosCliente/datosClienteContext'

const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#2286c3',
      },
    },
  });


 


export default function DatosFiscales({ estado }) {

  const classes = NuevaObraStyle();

  // se extrae la informacion del context
  const datosClientesContext = useContext(datosClienteContext)
  const { datosFiscales, guardarDatosFiscales } = datosClientesContext

  const handleDatos = (e) => {
    guardarDatosFiscales(e.target.name, e.target.value)
  }

return (
  <Fragment>
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
                  disabled={estado} name='nombreEmpresa' value={datosFiscales.nombreEmpresa} onChange={handleDatos} />
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>RFC</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} disabled={estado} name='rfc' value={datosFiscales.rfc} onChange={handleDatos}/>
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Direccion Fiscal</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} disabled={estado} name='direccionFiscal' value={datosFiscales.direccionFiscal} onChange={handleDatos}/>
                </FormControl>
            </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Direccion Oficina</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} disabled={estado} name='direccionOficina' value={datosFiscales.direccionOficina} onChange={handleDatos}/>
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Calle Referencia 1</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} disabled={estado} name='calleReferencia1' value={datosFiscales.calleReferencia1} onChange={handleDatos}/>
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Calle Referencia 2</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} disabled={estado} name='calleReferencia2' value={datosFiscales.calleReferencia2} onChange={handleDatos}/>
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
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} disabled={estado} name='cp' value={datosFiscales.cp} onChange={handleDatos}/>
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Colonia</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} disabled={estado} name='colonia' value={datosFiscales.colonia} onChange={handleDatos}/>
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Ciudad</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} disabled={estado} name='ciudad' value={datosFiscales.ciudad} onChange={handleDatos}/>
                </FormControl>
              </Grid>

            <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Estado</b>
                  </InputLabel>
                  <BootstrapInput style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}} disabled={estado} name='estado' value={datosFiscales.estado} onChange={handleDatos}/>
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