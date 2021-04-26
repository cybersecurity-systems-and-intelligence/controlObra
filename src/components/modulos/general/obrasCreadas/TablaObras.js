// se importan las librerias y hooks
import { useContext } from 'react';
import { createMuiTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// se importa los estilos
import { tableIcons } from '../../../../styles/bi/stylesBi'

// se importan los context
import obrasContext from '../../../../context/obras/obrasContext'
import obrasCreadasContext from '../../../../context/general/obrasCreadas/obrasCreadasContext'

const theme = createMuiTheme({
    palette: {
    secondary: {
        main: '#c5cae9',
        },
    },
})


const TablaObras = ({ estadoModal }) => {

    // se extrae la informacion del context
    const obrassContext = useContext(obrasContext)
    const { obrasCreadas } = obrassContext

    const obrasCreadassContext = useContext(obrasCreadasContext)
    const { cambiarOpcion, seleccionarObra } = obrasCreadassContext

    const handleObra = (folio) => {
        const obraselect = obrasCreadas.find(e => e.folio_obra === folio)
        seleccionarObra(obraselect)
        cambiarOpcion(1)
    }

    return (
        <MaterialTable
            style={{background: '#E3F2FD',  marginTop:5, marginBottom:5, border: "2px solid #ccc", borderRadius: 25}}
            icons={tableIcons}
            title={<h3>CONCEPTOS</h3>}

            options={{
                headerStyle: {
                    backgroundColor: "#82b1ff",
                    color: "#FFF",
                    border: "1px solid #000",
                    textAlign: 'center',
                    fontSize: 18
                }
            }}

            columns={[
                {   title: 'Folio',
                    field: 'folio_obra',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'10%',
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 20
                    },
                },
                {   title: 'Nombre',
                    field: 'nombre_obra',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'10%',
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 20,
                    },
                },
                {   title: 'Total',
                    field: 'monto_total_obra',
                    cellStyle: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width:'100%',
                        border: "1px solid #ccc",
                        fontSize: 11,
                        textAlign: 'justify'
                    },
                },
                {   title: 'Contrato',
                    field: 'contrato_obra',
                    //type: 'boolean',
                    render: rowData => rowData.contrato_obra ? <div style={{ width: '100px', height: '100px' ,background: 'green'}}/> : <div style={{ width: '100px', height: '100px' ,background: 'red'}}/>,
                    cellStyle: {
                        //backgroundColor: rowData => rowData.contrato_obra ? '#fff' : '#000',
                        color: '#000',
                        width:'10%',
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 15
                    },
                },
                {   title: 'Vigente',
                    field: 'estado_obra',
                    //type: 'boolean',
                    render: rowData => rowData.estado_obra ? <div style={{ width: '100px', height: '100px' ,background: 'green'}}/> : <div style={{ width: '100px', height: '100px' ,background: 'red'}}/>,
                    cellStyle: {
                        //backgroundColor: rowData => rowData.contrato_obra ? '#fff' : '#000',
                        color: '#000',
                        width:'10%',
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 15
                    },
                }
            ]}
            data={obrasCreadas}
            actions={[
                {
                    icon: ArrowForwardIosIcon,
                    tooltip: 'Ver obra',
                    onClick: (event, rowData) => handleObra(rowData.folio_obra)
                },                    
            ]}
            options={{
                actionsColumnIndex: -1
            }}
           
        />
    );
}

export default TablaObras;