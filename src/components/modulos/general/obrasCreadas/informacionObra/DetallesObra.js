// se importan las librerias y hooks
import { useContext } from 'react';
import {  Fragment  } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Grid, Box, InputLabel, FormControl, InputAdornment } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

// se importa los estilos
import { NuevaObraStyle, BootstrapInput} from '../../../../../styles/bi/stylesBi'

// se importan los context
import obrasCreadasContext from '../../../../../context/general/obrasCreadas/obrasCreadasContext'

const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#2286c3',
      },
    },
  });

export default function DetallesObra() {
    const classes = NuevaObraStyle();

    const obrasCreadassContext = useContext(obrasCreadasContext)
    const { obraSeleccionada } = obrasCreadassContext

    const { estado_obra, contrato_obra, folio_obra, nombre_obra, monto_total_obra, numero_contrato_obra, fecha_contrato_obra, fecha_inicio_obra, fecha_fin_obra, ubicacion_obra } = obraSeleccionada

    return (
        <Fragment>
          <Box className={classes.box}>
            <ThemeProvider theme={theme}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Box >
                <Grid container spacing={3}>
                    <Grid  item xs>
                    <h1>Contrato: { contrato_obra ? <div style={{ width: '50px', height:'50px' ,background: 'green'}}/> : <div style={{ width: '50px', height:'50px' ,background: 'red'}}/> }</h1>
                    </Grid>
      
                    <Grid  item xs>                      
                        <h1>Activa: { estado_obra ? <div style={{ width: '50px', height:'50px' ,background: 'green'}}/> : <div style={{ width: '50px', height:'50px' ,background: 'red'}}/> }</h1>
                    </Grid>                    
                  </Grid>
                <Grid container spacing={3}>
                    <Grid  item xs>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b>Folio</b>
                        </InputLabel>
                        <BootstrapInput disabled={true} name='nombreObra' value={folio_obra} />
                      </FormControl>
                    </Grid>
      
                    <Grid  item xs>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b>Ubicacion</b>
                        </InputLabel>
                        <BootstrapInput disabled={true} startAdornment={<InputAdornment position="start"><b>$</b></InputAdornment>} name='montoTotal' value={ubicacion_obra}/>
                      </FormControl>
                    </Grid>                    
                  </Grid>
                
                  <Grid container spacing={3}>
                    <Grid  item xs>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b>Nombre de la obra</b>
                        </InputLabel>
                        <BootstrapInput disabled={true} name='nombreObra' value={nombre_obra} />
                      </FormControl>
                    </Grid>
      
                    <Grid  item xs>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b>Monto total</b>
                        </InputLabel>
                        <BootstrapInput disabled={true} startAdornment={<InputAdornment position="start"><b>$</b></InputAdornment>} name='montoTotal' value={monto_total_obra}/>
                      </FormControl>
                    </Grid>
      
                    <Grid  item xs>
                      <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input">
                          <b>Numero de contrato</b>
                        </InputLabel>
                        <BootstrapInput disabled={true} name='numeroContrato' value={numero_contrato_obra} />
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
                            value={fecha_contrato_obra}
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
                            value={fecha_inicio_obra}
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
                            value={fecha_fin_obra}
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