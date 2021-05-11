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
import nuevosItemsContext from '../../../context/controlObra/nuevosItems/nuevosItemsContext'
import registroObraContext from '../../../context/controlObra/registroObra/registroObraContext'

// se crea y exporta el componente
export default function ControlObra() {

  const classes = styleBi() 

  // se extrae la informacion del context barra
  const barrasContext = useContext(barraContext)
  const { numeroMenu } = barrasContext

  const obrassContext = useContext(obrasContext)
  const { cargarObras } = obrassContext

  const alertasContext = useContext(alertaContext)
  const { alerta, mostrarAlerta } = alertasContext

  const nuevosItemssContext = useContext(nuevosItemsContext)
  const { mensaje_nuevos_items } = nuevosItemssContext

  const registroObrasContext = useContext(registroObraContext)
  const { mensaje_registro_obra } = registroObrasContext

  useEffect(() => {
    cargarObras()
  }, [])

  useEffect(() => {
    if(mensaje_nuevos_items){
      mostrarAlerta(mensaje_nuevos_items.msg, mensaje_nuevos_items.categoria)
    }
  }, [mensaje_nuevos_items])

  useEffect(() => {
    // si el mensaje es distinto a null se mostrará
    if(mensaje_registro_obra){
        mostrarAlerta(mensaje_registro_obra.msg, mensaje_registro_obra.categoria)
    }
  }, [mensaje_registro_obra])

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