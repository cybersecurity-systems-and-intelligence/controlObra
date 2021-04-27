import { Fragment, useState, useContext } from 'react';

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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  }
}));

export default function FiltroContratos() {
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
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Filtros</FormLabel>
                <RadioGroup row aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                    <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                    <FormControlLabel value="contrato" control={<Radio />} label="Contrato" />
                    <FormControlLabel value="vigentes" control={<Radio />} label="Vigentes" />
                </RadioGroup>          
            </FormControl>
        </Fragment>
    )
}