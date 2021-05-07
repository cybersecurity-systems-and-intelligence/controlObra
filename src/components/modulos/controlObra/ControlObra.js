// se importan las librerias
import { useContext, useEffect } from 'react'

// se importan los componentes
import RegistroObra from './registroObra/RegistroObra'
import ObrasCreadas from './obrasCreadas/ObrasCreadas'
import BarraModulos from '../../layout/BarraModulos'
import MenuModulos from '../../layout/MenuModulos'
import NuevosItems from './nuevosItems/NuevosItems'
import AnticipoObra from './anticipoObra/AnticipoObra'
import Modal from '../Modal'

// Se importan los estilos
import { styleBi } from '../../../styles/bi/stylesBi'

// se importan los context
import barraContext from '../../../context/barras/barraContext'
import obrasContext from '../../../context/obras/obrasContext'
import alertaContext from '../../../context/alertas/alertaContext'

// se crea y exporta el componente
export default function ControlObra() {

  const classes = styleBi() 

  // se extrae la informacion del context barra
  const barrasContext = useContext(barraContext)
  const { numeroMenu } = barrasContext

  const obrassContext = useContext(obrasContext)
  const { cargarObras } = obrassContext

  const alertasContext = useContext(alertaContext)
  const { alerta } = alertasContext

  useEffect(() => {
    cargarObras()
  }, [])

  const paginas = () => {
    switch(numeroMenu){
      case 0:
        return <RegistroObra/>
      case 1:
        return <ObrasCreadas/>
      case 2:
        return <NuevosItems/>
      case 3:
        return <AnticipoObra/>
      default:
        return 'Error desconocido'
    }
  }

  return (
    <div className={classes.root} align="center">
      { alerta ? ( <div className={alerta.categoria}>{ alerta.msg }</div> ) : null }
      <BarraModulos/>
      <MenuModulos/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {
          paginas()
        }
      </main>
      <Modal/>
    </div>
  );
}