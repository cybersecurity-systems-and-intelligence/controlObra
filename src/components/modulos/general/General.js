// se importan las librerias
import { useContext, useEffect } from 'react'

// se importan los componentes
import BarraModulos from '../../layout/BarraModulos'
import MenuModulos from '../../layout/MenuModulos'
import DatosCliente from './datosCliente/DatosCliente';
import ObrasCreadas from './obrasCreadas/ObrasCreadas'
import ContratosObras from './contratos/ContratosObras'

// Se importan los estilos
import { styleBi } from '../../../styles/bi/stylesBi'

// se importan los context
import barraContext from '../../../context/barras/barraContext'
import obrasContext from '../../../context/obras/obrasContext'
import alertaContext from '../../../context/alertas/alertaContext'
import datosClienteContext from '../../../context/general/datosCliente/datosClienteContext'

// se crea y exporta el componente
export default function General() {

  const classes = styleBi() 

  // se extrae la informacion del context barra
  const barrasContext = useContext(barraContext)
  const { numeroMenu } = barrasContext

  // Extraer los valores del context de alerta
  const alertasContext = useContext(alertaContext)
  const { alerta, mostrarAlerta } = alertasContext

  // Extraer la informacion de obras
  const obrassContext = useContext(obrasContext)
  const { mensaje, cargarObras, cargarContratos } = obrassContext

  const datosClientesContext = useContext(datosClienteContext)
  const { datosPersonales } = datosClientesContext
  
  useEffect(() => {
    cargarObras()
    cargarContratos()
  }, [])

  useEffect(() => {
    console.log(mensaje);
    if(mensaje){
      alert('hola')
      mostrarAlerta(mensaje.msg, 'alerta alerta-error')
    }
  }, [mensaje])
  
  useEffect(() => {
    cargarObras()
    cargarContratos()
  }, [datosPersonales])

  const paginas = () => {
    switch(numeroMenu){
      case 0:
        return <DatosCliente/>
      case 1:
        return <ObrasCreadas/>
      case 2:
        return <ContratosObras/>
    }
  }

  return (
    <div className={classes.root} align="center">
      { alerta ? ( <div className={`alerta alerta-error`}>{ alerta.msg }</div> ) : null }
      <BarraModulos/>
      <MenuModulos/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {
          paginas()
        }
      </main>
      
    </div>
  );
}