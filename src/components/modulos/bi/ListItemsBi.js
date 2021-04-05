import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core/';
import { Person, ListAlt } from '@material-ui/icons';


const ListItemsAdmin = ( { } ) => {

  const handleListItemClick = () => {
  }
  
  const handleListItemClick2 = () => {    
  }

  const handleListItemClick3 = () => {
  }

  return (
    <List>
    <div>
      <ListItem 
        button
        onClick={handleListItemClick}
      >
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItem>          
      <ListItem
        button
        onClick={handleListItemClick3}
      >
        <ListItemIcon>
          <ListAlt />
        </ListItemIcon>
        <ListItemText primary="Obras Creadas" />
      </ListItem>    
    </div>
    </List>
  )
}

export default ListItemsAdmin
