import { Fragment, useState, useContext } from 'react';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

// se importan los context
import obrasContext from '../../../../context/obras/obrasContext'
import obrasCreadasContext from '../../../../context/general/obrasCreadas/obrasCreadasContext'

const theme = createMuiTheme({
    palette: {
    secondary: {
        main: '#0d47a1',
        },
    },
})

const useStyles = makeStyles((theme) => ({
formControl: {
    margin: theme.spacing(3),
},
title:{

    background: 'linear-gradient(#eeffff,#bbdefb)',
                    width:'auto',
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    color:'#01465C',
                    border: "1px solid #ccc",
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
                    padding:'10px',
                    marginBottom: '15px'
  }
}));

export default function FiltroObras() {
    const classes = useStyles();
    const [ value, setValue ] = useState('todos');

    // se extrae el dinero del context
    const obrassContext = useContext(obrasContext)
    const { obrasCreadas } = obrassContext

    const obrasCreadassContext = useContext(obrasCreadasContext)
    const { filtrarObras } = obrasCreadassContext

    const handleRadioChange = (event) => {
        setValue(event.target.value)
        filtrarObras(event.target.value, obrasCreadas)
    };

    return (
        <Fragment>
            <ThemeProvider theme={theme}>
            <FormControl component="fieldset" className={classes.title} >
                <FormLabel component="legend">Filtros</FormLabel>
                <RadioGroup row aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange} color="secondary">
                    <FormControlLabel value="todos" control={<Radio />} label="Todos"  />
                    <FormControlLabel value="contrato" control={<Radio />} label="Contrato" />
                    <FormControlLabel value="vigentes" control={<Radio />} label="Vigentes" />
                </RadioGroup>
            </FormControl>
            </ThemeProvider>
        </Fragment>
    )
}