import { Fragment, useContext } from 'react';
import { Box} from '@material-ui/core';
import { Grid, InputLabel, FormControl } from '@material-ui/core';
import { BootstrapInput } from '../../../../../../styles/bi/stylesBi'


// Se importan los estilos
import { styleDatos } from '../../../../../../styles/bi/stylesBi'
import { styleTitle } from '../../../../../../styles/bi/stylesBi'

// se importan los context
import contratosObrasContext from '../../../../../../context/general/contratosObras/contratosObrasContext'


const DatosBancarios = () => {
    const css = styleDatos()
    const title = styleTitle()

    const contratosObrassContext = useContext(contratosObrasContext)
    const { contratoSeleccionado } = contratosObrassContext

    const { datos_cliente } = contratoSeleccionado
    const { datos_bancarios } = datos_cliente
    const { numeroClave, cuenta, razonSocial } = datos_bancarios

    return (
        <Fragment>
            <h3 className={title.title}>DATOS BANCARIOS CLIENTE</h3>
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
                        disabled={true}
                        label="Numero de clave"
                        required
                        variant="outlined"
                        name='numeroClave'
                        value={numeroClave}
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
                            label="Cuenta"
                            required
                            variant="outlined"
                            name='cuenta'
                            disabled={true}
                            value={cuenta}
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
                    label="Razon social"
                    required
                    variant="outlined"
                    name='razonSocial'
                    disabled={true}
                    value={razonSocial}
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