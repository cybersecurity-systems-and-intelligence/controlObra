// se importan las librerias
import { useContext } from 'react'

// se importan los componentes
import BarraModulos from '../../layout/BarraModulos'
import MenuModulos from '../../layout/MenuModulos'
import DatosCliente from '../bi/datosCliente/DatosCliente';


// Se importan los estilos
import { styleBi } from '../../../styles/bi/stylesBi'

// se importan los context
import barraContext from '../../../context/barras/barraContext'


// se crea y exporta el componente
export default function BI() {

  const classes = styleBi() 

  // se extrae la informacion del context barra
  const barrasContext = useContext(barraContext)
  const { numeroMenu, color } = barrasContext

  const paginas = () => {
    switch(numeroMenu){
      case 0:
        return <DatosCliente/>
    }
  }

  return (
    <div className={classes.root} align="center">
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