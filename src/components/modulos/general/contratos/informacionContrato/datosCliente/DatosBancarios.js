import React from 'react';
import { Fragment, useContext } from 'react';
import { Box} from '@material-ui/core';
import { Grid, InputLabel, FormControl } from '@material-ui/core';
import { BootstrapInput } from '../../../../../../styles/bi/stylesBi'


// Se importan los estilos
import { styleDatos } from '../../../../../../styles/bi/stylesBi'
import { styleTitle } from '../../../../../../styles/bi/stylesBi'


const DatosBancarios = () => {
    const css = styleDatos()
    const title = styleTitle()
    return (
        <Fragment>
            <h3 className={title.title}>DATOS BANCARIOS</h3>
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
                        disabled={true}
                        label="Numero de clave"
                        required
                        variant="outlined"
                        name='numeroClave'
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