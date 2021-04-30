// se importan las librerias
import { useContext, useEffect } from 'react'

// se importan los componentes
import CargaFacturas from './anticipoObra/CargaFacturas'
import BarraModulos from '../../layout/BarraModulos'
import MenuModulos from '../../layout/MenuModulos'
import DatosCliente from '../general/datosCliente/DatosCliente';


// Se importan los estilos
import { styleBi } from '../../../styles/bi/stylesBi'

// se importan los context
import barraContext from '../../../context/barras/barraContext'
import alertaContext from '../../../context/alertas/alertaContext'
import obrasContext from '../../../context/obras/obrasContext'

// se crea y exporta el componente
export default function Contabilidad() {

  const classes = styleBi() 

  // se extrae la informacion del context barra
  const barrasContext = useContext(barraContext)
  const { numeroMenu } = barrasContext

  const alertasContext = useContext(alertaContext)
  const { alerta, mostrarAlerta } = alertasContext

  const obrassContext = useContext(obrasContext)
  const { mensaje, cargarObras } = obrassContext

  useEffect(() => {
    cargarObras()
  }, [])

  useEffect(() => {
    if(mensaje){
      mostrarAlerta(mensaje.msg, 'alerta alerta-error')
    }
  }, [mensaje])

  const paginas = () => {
    switch(numeroMenu){
      case 0:
        return <CargaFacturas/>
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