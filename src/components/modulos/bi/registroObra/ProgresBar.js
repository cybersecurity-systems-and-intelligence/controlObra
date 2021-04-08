import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Resumen from '../../bi/registroObra/Resumen';


import CargaFactura from './CargaFactura'
import NuevaObra from './NuevaObra';

// se importan los state
import registroObraContext from '../../../../context/registroObra/registroObraContext'
import alertaContext from '../../../../context/alertas/alertaContext'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Nueva obra', 'Cargar cotización', 'Revision de datos'];
}



export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const registroObrasContext = useContext(registroObraContext)
  const { 
    nombreObra,
    montoTotal,
    numeroContrato,
    partidas,
    cambiarEstado
  } = registroObrasContext

  // Extraer los valores del context de alerta
  const alertasContext = useContext(alertaContext)
  const { mostrarAlerta } = alertasContext

  const handleNext = () => {
    if (activeStep === 0 && (nombreObra.trim() === '' || montoTotal.trim() === '' || numeroContrato.trim() === '')){
      mostrarAlerta('Debe de ingresar todos los campos', 'alerta alerta-error')
      return
    }
    if (activeStep === 1 && partidas.length === 0 ){
      mostrarAlerta('Debe ingresar un archivo csv con la estructura correcta', 'alerta alerta-error')
      return
    }
    if(activeStep === 0){
      cambiarEstado(true)
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if(activeStep === 1){
      cambiarEstado(false)
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <NuevaObra/>;
      case 1:
        return <CargaFactura/>;
      case 2:
        return <Resumen/>;
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}