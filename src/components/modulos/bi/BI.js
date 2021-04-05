// se importan los componentes
import RegistroObra from './registroObra/RegistroObra'
import BarraModulos from '../../layout/BarraModulos'
import MenuModulos from '../../layout/MenuModulos'


// Se importan los estilos
import { styleBi } from '../../../styles/bi/stylesBi'


// se crea y exporta el componente
export default function BI() {
  
  const classes = styleBi() 

  return (
    <div className={classes.root} align="center">
      
      <BarraModulos/>
      <MenuModulos/>
      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <RegistroObra/>
      </main>
    </div>
  );
}