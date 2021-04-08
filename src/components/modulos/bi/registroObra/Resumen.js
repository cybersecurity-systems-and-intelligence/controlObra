import React from 'react';
import {  Fragment, useState  } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Grid, Box } from '@material-ui/core';
import { NuevaObraStyle, BootstrapInput} from '../../../../styles/bi/stylesBi'

import { KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {tableIcons} from '../../../../styles/bi/stylesBi'
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import MaterialTable from 'material-table';

// se importan los componentes
import TablaPartidas from './TablaPartidas'
import NuevaObra from './NuevaObra'


const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#2286c3',
      },
    },
  });


 


export default function Resumen() {

  const classes = NuevaObraStyle();
  const [rows, guardarRows] = useState([])
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-01-01T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

return (
<Fragment>
    <NuevaObra/>
    <TablaPartidas/>
  </Fragment>
    );
}