// se importan las librerias
import { useState, useContext, useEffect } from 'react';
import { makeStyles, Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';

// se importan los componentes
import Copyright from '../../../layout/Copyright';
import LecturaXML from './LecturaXML'
import ObrasActivas from './ObrasActivas'
import Resumen from './Resumen'

// se importan los context
import alertaContext from '../../../../context/alertas/alertaContext'
import modalContext from '../../../../context/modal/modalContext'
import anticipoObraContext from '../../../../context/contabilidad/anticipoObra/anticipoObraContext'

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
  return [ 'Seleccionar obra', 'Elegir factura', 'Revision de datos' ];
}



export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [ activeStep, setActiveStep ] = useState(0);
  const steps = getSteps();

  // Extraer los valores del context de alerta
  const alertasContext = useContext(alertaContext)
  const { mostrarAlerta } = alertasContext

  // se extrae la informacion del context de modal
  const modalsContext = useContext(modalContext)
  const { peticion, estadoModal, cancelarPeticion } = modalsContext

  const anticipoObrasContext = useContext(anticipoObraContext)
  const { mensaje_anticipo_obra, obraSeleccionada, informacion, guardarFactura } = anticipoObrasContext


  useEffect(() => {
    if(peticion){
      guardarFactura()
      setActiveStep(0);  
      cancelarPeticion()      
    }
  }, [peticion])

  useEffect(() => {
    if(mensaje_anticipo_obra){
      setActiveStep(1);   
    }
  }, [mensaje_anticipo_obra])

  const handleNext = () => {

    if (activeStep === 0 && obraSeleccionada.folio_obra === undefined) {
      mostrarAlerta('Selecciona una obra', 'alerta-error')
      return
    }

    if (activeStep === 1 && informacion.folioFiscal === '') {
      mostrarAlerta('Debe ingresar un archivo xml con la estructura correcta', 'alerta alerta-error')
      return
    }
    
    if(activeStep === 2){
      estadoModal(true)
      return
    }

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
        return <ObrasActivas/>
      case 1:
        return <LecturaXML/>
      case 2:
        return <Resumen/>
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
            <Typography className={classes.instructions}>Todos los pasos completados</Typography>
            <Button onClick={handleReset}>Volver al inicio</Button>
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
                Atras
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
              </Button>
            </div>
          </div>
        )}
      </div>
      <Copyright/>
    </div>
    
  );
}