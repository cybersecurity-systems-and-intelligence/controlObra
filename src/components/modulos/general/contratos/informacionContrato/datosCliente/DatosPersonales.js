import { Fragment, useContext } from 'react';
import { Box, TextField, withStyles } from '@material-ui/core';
import { Grid, InputLabel, FormControl } from '@material-ui/core';
import { BootstrapInput } from '../../../../../../styles/bi/stylesBi'
// se importan los estlos
import { styleDatos } from '../../../../../../styles/bi/stylesBi'
import { styleTitle } from '../../../../../../styles/bi/stylesBi'

// se importan los context
import contratosObrasContext from '../../../../../../context/general/contratosObras/contratosObrasContext'

const DatosPersonales = () => {

    const css = styleDatos()
    const title = styleTitle()

    const contratosObrassContext = useContext(contratosObrasContext)
    const { contratoSeleccionado } = contratosObrassContext

    const { datos_cliente } = contratoSeleccionado
    const { datos_personales } = datos_cliente
    const { correo, nombre, telefonoFijo, telefonoMovil } = datos_personales

    return (
        <Fragment>
        <h3 className={title.title}>DATOS PERSONALES CLIENTE</h3>
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
                                label="Nombre"
                                required
                                variant="outlined"
                                name='nombre'
                                disabled={true}
                                value={nombre}
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
                                label="Correo electronico"
                                required
                                variant="outlined"
                                name='correo'
                                disabled={true}
                                value={correo}
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
                          label="Telefono fijo"
                          required
                          variant="outlined"
                          name='telefonoFijo'
                          disabled={true}
                          value={telefonoFijo}
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
                          label="Telefono movil"
                          required
                          variant="outlined"
                          name='telefonoMovil'
                          disabled={true}
                          value={telefonoMovil}
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