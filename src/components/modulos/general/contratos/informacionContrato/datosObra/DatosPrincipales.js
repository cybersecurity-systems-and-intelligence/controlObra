import React from 'react';
import {  Fragment, useContext  } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Grid, Box, InputLabel, FormControl, InputAdornment } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

// se importa los estilos
import { NuevaObraStyle, BootstrapInput, styleTitle} from '../../../../../../styles/bi/stylesBi'

// se importan los context
import contratosObrasContext from '../../../../../../context/general/contratosObras/contratosObrasContext'

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#2286c3',
            },
        },
    });

const DatosPrincipales = () => {
    const classes = NuevaObraStyle();
    const title = styleTitle()

    const contratosObrassContext = useContext(contratosObrasContext)
    const { contratoSeleccionado } = contratosObrassContext

    const { obraSeleccionada } = contratoSeleccionado
    const { folio, ubicacion, monto_total, numero_contrato, nombre, fecha_contrato, fecha_inicio, fecha_fin } = obraSeleccionada

    return (
        <Fragment>
            <h3 className={title.title}>DATOS PRINCIPALES OBRA</h3>
            <Box className={classes.box}>
                <ThemeProvider theme={theme}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Box>
                            <Grid container spacing={3}>
                                <Grid  item xs>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            <b>Folio</b>
                                        </InputLabel>
                                        <BootstrapInput
                                            disabled={true}
                                            name='folio'
                                            value={folio}
                                            />
                                    </FormControl>
                                </Grid>

                                <Grid  item xs>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            <b>Ubicacion</b>
                                        </InputLabel>
                                        <BootstrapInput
                                            disabled={true}                                   
                                            name='ubicacion'
                                            value={ubicacion}
                                            />
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid container spacing={3}>
                                <Grid  item xs>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            <b>Nombre de la obra</b>
                                        </InputLabel>
                                        <BootstrapInput
                                            disabled={true}
                                            name='nombreObra'
                                            value={nombre}
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid  item xs>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            <b>Monto total</b>
                                        </InputLabel>
                                        <BootstrapInput
                                            disabled={true}
                                            startAdornment={<InputAdornment position="start"><b>$</b></InputAdornment>}
                                            name='montoTotal'
                                            value={monto_total}
                                            />
                                    </FormControl>
                                </Grid>

                                <Grid  item xs>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            <b>Numero de contrato</b>
                                        </InputLabel>
                                        <BootstrapInput
                                            disabled={true}
                                            name='numeroContrato'
                                            value={numero_contrato}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box>
                            <Grid container spacing={3}>
                                <Grid  item xs>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            <b>Fecha de contrato</b>
                                        </InputLabel>
                                        <KeyboardDatePicker
                                            disabled={true}
                                            margin="normal"
                                            color="secondary"
                                            name='fechaContrato'
                                            format="MM/dd/yyyy"
                                            value={fecha_contrato}
                                            KeyboardButtonProps={{'aria-label': 'change date',}}
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid  item xs>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            <b>Inicio de obra</b>
                                        </InputLabel>
                                        <KeyboardDatePicker
                                            disabled={true}
                                            margin="normal"
                                            color="secondary"
                                            name='fechaInicio'
                                            format="MM/dd/yyyy"
                                            value={fecha_inicio}
                                            KeyboardButtonProps={{'aria-label': 'change date',}}
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid  item xs>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            <b>Fin de obra</b>
                                        </InputLabel>
                                        <KeyboardDatePicker
                                            disabled={true}
                                            margin="normal"
                                            color="secondary"
                                            name='fechaFin'
                                            format="MM/dd/yyyy"
                                            value={fecha_fin}
                                            KeyboardButtonProps={{'aria-label': 'change date',}}
                                        />
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
export default DatosPrincipales;