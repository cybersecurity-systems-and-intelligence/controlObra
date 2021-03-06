import { useContext } from 'react';
import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core/';
import { BorderColorTwoTone, AddCircleOutlineOutlined, AssignmentTurnedIn, Assignment } from '@material-ui/icons';
// se importan los context
import barraContext from '../../../context/barras/barraContext'
import registroObraContext from '../../../context/controlObra/registroObra/registroObraContext'

const ListControlObra = ( { } ) => {

  // se extrae la informacion del context barra
  const barrasContext = useContext(barraContext)
  const { cambiarMenu } = barrasContext

  // se extrae la informacion del context registroObra
  const registroObrasContext = useContext(registroObraContext)
  const { cambiarEstado } = registroObrasContext

  const registroObra = (opcion) => {
    cambiarMenu(opcion)
    cambiarEstado(false)
  }

  return (
    <List style={{background:'#202444',color:'#fff'}}>
    <div style={{background:'#202444'}}>
      <ListItem 
        button
        onClick={() => registroObra(0)}
      >
        <ListItemIcon  style={{color:'#fff'}}>
          <BorderColorTwoTone />
        </ListItemIcon>
        <ListItemText primary="Registrar obra" />
      </ListItem>
      <ListItem 
        button
        onClick={() => registroObra(1)}
      >
        <ListItemIcon  style={{color:'#fff'}}>
          <AssignmentTurnedIn />
        </ListItemIcon>
        <ListItemText primary="Obras creadas" />
      </ListItem>
      <ListItem 
        button
        onClick={() => registroObra(2)}
      >
        <ListItemIcon  style={{color:'#fff'}}>
          <AddCircleOutlineOutlined />
        </ListItemIcon>
        <ListItemText primary="Nuevos Items" />
      </ListItem>
      <ListItem 
        button
        onClick={() => registroObra(3)}
      >
        <ListItemIcon  style={{color:'#fff'}}>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Anticipo de obra" />
      </ListItem>
    </div>
    </List>
  )
}

export default ListControlObra
