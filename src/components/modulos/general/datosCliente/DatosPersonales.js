// se importan las librerias
import { Fragment, useContext } from 'react';
import { Box, TextField, withStyles } from '@material-ui/core';
import { Grid, InputLabel, FormControl } from '@material-ui/core';
import { BootstrapInput } from '../../../../styles/bi/stylesBi'
// se importan los estlos
import { styleDatos } from '../../../../styles/bi/stylesBi'


// se importan los context
import datosClienteContext from '../../../../context/general/datosCliente/datosClienteContext'


const DatosPersonales = ({ estado }) => {

    const css = styleDatos()

    // se extrae la informacion del context
    const datosClientesContext = useContext(datosClienteContext)
    const { datosPersonales, guardarDatosPersonales } = datosClientesContext

    const handleDatos = (e) => {
      guardarDatosPersonales(e.target.name, e.target.value)
    }

    return (
        <Fragment>

          <Box className={css.box}>
            <form className={css.root} noValidate autoComplete="off">
              <Box>
                <Grid container spacing={3} justify="center">
                  <Grid  item xs={12} sm={16} md={14} lg={3}>
                    <FormControl className={css.margin}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        <b style={{fontSize:20, color:'#388CBD'}}>Nombre</b>
                      </InputLabel>

                      <BootstrapInput
                        style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}
                        disabled={estado}
                        label="Nombre"
                        required
                        variant="outlined"
                        name='nombre'
                        value={datosPersonales.nombre}
                        onChange={handleDatos}
                      />
                    </FormControl>
                  </Grid>

                  <Grid  item xs={12} sm={6} md={4} lg={3}>
                    <FormControl className={css.margin}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        <b style={{fontSize:20, color:'#388CBD'}}>Correo electronico</b>
                      </InputLabel>

                      <BootstrapInput
                        style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}
                        disabled={estado}
                        label="Correo electronico"
                        required
                        variant="outlined"
                        name='correo'
                        value={datosPersonales.correo}
                        onChange={handleDatos}
                      />
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={3}>
                <FormControl className={css.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Telefono fijo</b>
                  </InputLabel>
                  <BootstrapInput
                  style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}
                  disabled={estado}
                  label="Telefono fijo"
                  required
                  variant="outlined"
                  name='telefonoFijo'
                  value={datosPersonales.telefonoFijo}
                  onChange={handleDatos}
                  />
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={3}>
                <FormControl className={css.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Telefono movil</b>
                  </InputLabel>
                  <BootstrapInput
                  style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}
                  disabled={estado}
                  label="Telefono movil"
                  required
                  variant="outlined"
                  name='telefonoMovil'
                  value={datosPersonales.telefonoMovil}
                  onChange={handleDatos}
                  />
                </FormControl>
              </Grid>
              </Grid>
              </Box>
                </form>
            </Box>
        </Fragment>
    );
}
export default DatosPersonales;