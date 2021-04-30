// se importan las librerias
import { Fragment, useContext } from 'react';
import { Box} from '@material-ui/core';
import { Grid, InputLabel, FormControl } from '@material-ui/core';
import { BootstrapInput } from '../../../../styles/bi/stylesBi'


// Se importan los estilos
import { styleDatos } from '../../../../styles/bi/stylesBi'

// se importan los context
import datosClienteContext from '../../../../context/general/datosCliente/datosClienteContext'

const DatosBancarios = ({ estado }) => {

    const css = styleDatos()

    // se extrae la informacion del context
    const datosClientesContext = useContext(datosClienteContext)
    const { datosBancarios, guardarDatosBancarios } = datosClientesContext

    const handleDatos = (e) => {
      guardarDatosBancarios(e.target.name, e.target.value)
    }


    return (
        <Fragment>
            <Box className={css.box}>
            <form className={css.root} noValidate autoComplete="off">
              <Box>
                <Grid container spacing={16} justify="flex-start">
                  <Grid  item xs={12} sm={6} md={4} lg={4}>
                    <FormControl className={css.margin}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        <b style={{fontSize:20, color:'#388CBD'}}>Numero de clave </b>
                      </InputLabel>

                      <BootstrapInput
                        style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}
                        name='nombreEmpresa'
                        disabled={estado}
                        label="Numero de clave"
                        required
                        variant="outlined"
                        name='numeroClave'
                        value={datosBancarios.numeroClave}
                        onChange={handleDatos}
                      />
                    </FormControl>
                  </Grid>

                  <Grid  item xs={12} sm={6} md={4} lg={4}>
                    <FormControl className={css.margin}>
                      <InputLabel shrink htmlFor="bootstrap-input">
                        <b style={{fontSize:20, color:'#388CBD'}}>Cuenta</b>
                      </InputLabel>

                      <BootstrapInput 
                        style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}
                        disabled={estado}
                        label="Cuenta"
                        required
                        variant="outlined"
                        name='cuenta'
                        value={datosBancarios.cuenta}
                        onChange={handleDatos}
                      />
                </FormControl>
              </Grid>

              <Grid  item xs={12} sm={6} md={4} lg={4}>
                <FormControl className={css.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Razon social</b>
                  </InputLabel>
                  <BootstrapInput
                  style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}
                    disabled={estado}
                    label="Razon social"
                    required
                    variant="outlined"
                    name='razonSocial'
                    value={datosBancarios.razonSocial}
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
export default DatosBancarios;