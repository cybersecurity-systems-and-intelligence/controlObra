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
    <List style={{background:'#202444',color:'#fff'}}>
    <div style={{background:'#202444'}}>
      <ListItem 
        button
        onClick={handleListItemClick}
      >
        <ListItemIcon  style={{color:'#fff'}}>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItem>          
      <ListItem
        button
        onClick={handleListItemClick3}
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
