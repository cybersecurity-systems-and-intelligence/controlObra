import React, { Fragment } from 'react';
import {Box,TextField} from '@material-ui/core';
import {withStyles,} from '@material-ui/core/styles';
import { styleDatos } from '../../../../styles/bi/stylesBi'


const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: '#1565c0',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: '#64b5f6',
        borderWidth: 1,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 5,
        padding: '4px !important', // override inline-style
      },
    },
  })(TextField);
  
const DatosPersonales = () => {

    const css = styleDatos()


    return (
        <Fragment>
            <Box className={css.box}>
                <form className={css.root} noValidate autoComplete="off">
                    <ValidationTextField
                        label="Nombre"
                        required
                        variant="outlined"
                        id="validation-outlined-input"
                    />
                    <ValidationTextField
                        label="Correo electronico"
                        required
                        variant="outlined"
                        id="validation-outlined-input"
                    />
                    <ValidationTextField
                        label="Telefono fijo"
                        required
                        variant="outlined"
                        id="validation-outlined-input"
                    />
                    <ValidationTextField
                        label="Telefono movil"
                        required
                        variant="outlined"
                        id="validation-outlined-input"
                    />
                     <ValidationTextField
                        label="Obra"
                        required
                        variant="outlined"
                        id="validation-outlined-input"
                    />
                </form>
            </Box>
        </Fragment>
    );
}
export default DatosPersonales;