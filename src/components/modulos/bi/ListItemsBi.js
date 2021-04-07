import { useContext } from 'react';
import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core/';
import { Person, ListAlt } from '@material-ui/icons';

// se importan los context
import barraContext from '../../../context/barras/barraContext'

const ListItemsAdmin = ( { } ) => {

  // se extrae la informacion del context barra
  const barrasContext = useContext(barraContext)
  const { cambiarMenu } = barrasContext

  return (
    <List style={{background:'#202444',color:'#fff'}}>
    <div style={{background:'#202444'}}>
      <ListItem 
        button
        onClick={() => cambiarMenu(0)}
      >
        <ListItemIcon  style={{color:'#fff'}}>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItem>          
      <ListItem
        button
        onClick={() => cambiarMenu(1)}
      >
        <ListItemIcon style={{color:'#fff'}}>
          <ListAlt />
        </ListItemIcon>
        <ListItemText primary="Obras Creadas" />
      </ListItem>    
    </div>
    </List>
  )
}

export default ListItemsAdmin
