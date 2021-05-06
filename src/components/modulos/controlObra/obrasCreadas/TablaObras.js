// se importan las librerias y hooks
import { Fragment, useContext } from 'react';
import { createMuiTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// se importa los estilos
import { tableIcons } from '../../../../styles/bi/stylesBi'

// se importan los componentes
import FiltroObras from './FiltroObras'

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
    const { cambiarOpcion, obrasFiltro, seleccionarObra } = obrasCreadassContext

    const handleObra = (folio) => {
        const obraselect = obrasCreadas.find(e => e.folio_obra === folio)
        seleccionarObra(obraselect)
        cambiarOpcion(1)
    }

    return (
        <Fragment>
            <FiltroObras/>
            <MaterialTable
                style={{background: '#E3F2FD',  marginTop:5, marginBottom:5, border: "2px solid #ccc", borderRadius: 25}}
                icons={tableIcons}
                title={<h3>CONCEPTOS</h3>}

                options={{
                    headerStyle: {
                        backgroundColor: "#82b1ff",
                        color: "#ccc",
                        border: "1px solid #000",
                        textAlign: 'center',
                        fontSize: 18
                    }
                }}

                columns={[
                    {   title: 'Folio',
                        field: 'folio_obra',
                        cellStyle: {
                            background: 'linear-gradient(#eeffff,#bbdefb)',
                            color: '#01465C',
                            width:'18%',
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 700,
                            border: "1px solid #ccc",
                        },
                    },
                    {   title: 'Nombre',
                        field: 'nombre_obra',
                        cellStyle: {
                            background: 'linear-gradient(#eeffff,#bbdefb)',
                            color: '#01465C',
                            width:'50%',
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 700,
                            border: "1px solid #ccc",
                        },
                    },
                    {   title: 'Total',
                        field: 'monto_total_obra',
                        cellStyle: {
                            background: 'linear-gradient(#eeffff,#bbdefb)',
                            color: '#01465C',
                            width:'18%',
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 700,
                            border: "1px solid #ccc",
                        },
                    },
                    {   title: 'Contrato',
                        field: 'contrato_obra',
                        //type: 'boolean',
                        render: rowData => rowData.contrato_obra ?  <div ><ThumbUpIcon style={{color:'#B1D839', fontSize: 35}}/></div> : <div ><ThumbDownIcon style={{color:'#FF5317', fontSize: 35}}/></div>,
                        cellStyle: {
                            background: '#ffff',
                            color: '#01465C',
                            width:'auto',
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 700,
                            border: "1px solid #ccc",
                        },
                    },
                    {   title: 'Vigente',
                        field: 'estado_obra',
                        //type: 'boolean',
                        render: rowData => rowData.estado_obra ?<div ><ThumbUpIcon style={{color:'#B1D839', fontSize: 35}}/></div> : <div ><ThumbDownIcon style={{color:'#FF5317', fontSize: 35}}/></div>,
                        cellStyle: {
                            background: '#fff',
                            color: '#01465C',
                            width:'auto',
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 700,
                            border: "1px solid #ccc",
                        },
                    }
                ]}
                data={obrasFiltro}
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
        </Fragment>
    );
}

export default TablaObras;