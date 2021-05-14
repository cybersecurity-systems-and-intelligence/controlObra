// se importan las librerias y hooks
import { useContext } from 'react';
import { createMuiTheme } from '@material-ui/core';
import MaterialTable from 'material-table';

// se importa los estilos
import { tableIcons } from '../../../../../styles/bi/stylesBi'

// se importan los context
import obrasCreadasContext from '../../../../../context/general/obrasCreadas/obrasCreadasContext'

const theme = createMuiTheme({
    palette: {
    secondary: {
        main: '#c5cae9',
        },
    },
})

const TablaPartidas = () => {

    // se extrae la informacion del context
    const obrasCreadassContext = useContext(obrasCreadasContext)
    const { obraSeleccionada } = obrasCreadassContext

    const { partidas_obra } = obraSeleccionada

    return (
        <MaterialTable
            style={{background: 'linear-gradient(#ffff,#e6ffff)',  marginTop: theme.spacing(5), marginBottom: theme.spacing(5), border: "2px solid #ccc", borderRadius: 25,}}
            icons={tableIcons}
            title={<h3>PARTIDAS</h3>}
            options={{
                pageSize: 5,
                headerStyle: {
                    background: 'linear-gradient(#eeffff,#bbdefb)',
                    color: "#01465C",
                    border: "1px solid #ccc",
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight:600,
                    width: '100%'
                },
            }}
            columns={[
                {   title: 'Partida',
                    field: 'partida',
                    defaultGroupOrder: 0,
                    cellStyle: {
                        background: 'linear-gradient(#ffff,#e6ffff)',
                        color: '#000',
                    },
                },
                {   title: 'Clave',
                    field: 'clave',
                    cellStyle: {
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        color: '#000',
                        width:'25%',
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 700,
                        border: "1px solid #ccc",
                    },
                },
                {   title: 'Descripcion',
                    field: 'descripcion',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'100%',
                        textAlign: 'justify',
                        fontSize: 20,
                        border: "1px solid #ccc"
                    },
                },
                {   title: 'Unidad',
                    field: 'unidad',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'9%',
                        textAlign: 'center',
                        fontSize: 20,
                        border: "1px solid #ccc"
                    },
                },
                {   title: 'Requeridos',
                    field: 'cantidad',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'9%',
                        textAlign: 'center',
                        fontSize: 20,
                        border: "1px solid #ccc"
                    },
                },
                {   title: 'Precio unitario',
                    field: 'precioUnitario',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'9%',
                        textAlign: 'center',
                        fontSize: 20,
                        border: "1px solid #ccc"
                    },
                },
                {   title: 'Total',
                    field: 'total',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'9%',
                        textAlign: 'center',
                        fontSize: 20,
                        border: "1px solid #ccc"
                    },
                },
            ]}
            data={partidas_obra}
        />
    );
}

export default TablaPartidas;