import React from 'react';
import { Fragment, useContext } from 'react';
import { Box, TextField, withStyles } from '@material-ui/core';
import { Grid, InputLabel, FormControl } from '@material-ui/core';
import { BootstrapInput } from '../../../../../../styles/bi/stylesBi'
// se importan los estlos
import { styleDatos } from '../../../../../../styles/bi/stylesBi'
import { styleTitle } from '../../../../../../styles/bi/stylesBi'


const DatosPersonales = () => {

    const css = styleDatos()
    const title = styleTitle()
    return (
        <Fragment>
        <h3 className={title.title}>DATOS PERSONALES</h3>
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