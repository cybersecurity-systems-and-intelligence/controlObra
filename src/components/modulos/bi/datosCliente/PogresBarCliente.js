// se importan las librerias
import { useState, useContext } from 'react';
import { makeStyles, Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';

// se importan los componentes
import Copyright from '../../../layout/Copyright';
import DatosPersonales from './DatosPersonales';
import DatosFiscales from './DatosFiscales';
import DatosBancarios from './DatosBancarios';

// se importan los context
import alertaContext from '../../../../context/alertas/alertaContext'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    alignItems: 'center'
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
  return ['Datos personales', 'Datos fiscales','Datos bancarios','Revision de datos'];
}



export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  // Extraer los valores del context de alerta
  const alertasContext = useContext(alertaContext)
  const { mostrarAlerta } = alertasContext

  const handleNext = () => {    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {   
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <DatosPersonales/>;
      case 1:
        return <DatosFiscales/>;
      case 2:
        return <DatosBancarios/>;
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
      <Copyright/>
    </div>
    
  );
}