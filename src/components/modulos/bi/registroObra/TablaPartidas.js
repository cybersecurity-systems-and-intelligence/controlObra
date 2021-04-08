import { useContext } from 'react';
import {tableIcons} from '../../../../styles/bi/stylesBi'
import { createMuiTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
// se importan los state
import registroObraContext from '../../../../context/registroObra/registroObraContext'

const theme = createMuiTheme({
    palette: {
    secondary: {
        main: '#c5cae9',
        },
    },
})

const TablaPartidas = () => {

    // se extrae la informacion del context
    const registroObrasContext = useContext(registroObraContext)
    const { partidas } = registroObrasContext

    return (
        <MaterialTable
            style={{background: '#E3F2FD',  marginTop: theme.spacing(5), marginBottom: theme.spacing(5), border: "2px solid #ccc", borderRadius: 25,}}
            icons={tableIcons}
            title={<h3>PARTIDAS</h3>}          
            columns={[
                {   title: 'Partida',
                    field: 'partida',
                    defaultGroupOrder: 0,
                    cellStyle: {
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        color: '#000',
                        width:'100%',
                        left: '25%'
                    },
                },
                {   title: 'Clave',
                    field: 'clave',
                    cellStyle: {
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        color: '#000',
                        width:'15%'
                    },
                },
                {   title: 'Descripcion',
                    field: 'descripcion',
                    type: 'text',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'100%'
                    },
                },
                {   title: 'Unidad',
                    field: 'unidad',
                    type: 'numeric',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'9%'
                    },
                },
                {   title: 'Requeridos',
                    field: 'requeridos',
                    type: 'numeric',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'9%'
                    },
                },
            ]}
            data={partidas}
        />
    );
}
 
export default TablaPartidas;