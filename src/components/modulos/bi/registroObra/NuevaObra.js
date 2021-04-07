import React from 'react';
import {  Fragment  } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Grid, Box } from '@material-ui/core';
import { NuevaObraStyle, BootstrapInput} from '../../../../styles/bi/stylesBi'

import { KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';

const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#2286c3',
      },
    },
  });


 


export default function NuevaObra() {

  const classes = NuevaObraStyle();

  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-01-01T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
                  <BootstrapInput defaultValue="" id="bootstrap-input" />
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Monto total</b>
                  </InputLabel>
                  <BootstrapInput startAdornment={<InputAdornment position="start"><b>$</b></InputAdornment>} defaultValue="" id="bootstrap-input" />
                </FormControl>
              </Grid>

              <Grid  item xs>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <b>Numero de contrato</b>
                  </InputLabel>
                  <BootstrapInput defaultValue="" id="bootstrap-input" />
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
                      margin="normal"
                      color="secondary"
                      id="date-picker-dialog"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
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
                      margin="normal"
                      color="secondary"
                      id="date-picker-dialog"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
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
                      margin="normal"
                      color="secondary"
                      id="date-picker-dialog"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
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