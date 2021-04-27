// se importan las librerias y hooks
import { Fragment, useContext } from 'react';
import { createMuiTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// se importa los estilos
import { tableIcons } from '../../../../styles/bi/stylesBi'

// se importan los componentes
import FiltroContratos from './FiltroContratos'

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
    const { contratosObras, obrasCreadas } = obrassContext

    const obrasCreadassContext = useContext(obrasCreadasContext)
    const { cambiarOpcion, obrasFiltro, seleccionarObra } = obrasCreadassContext

    const handleObra = (folio) => {
        const obraselect = obrasCreadas.find(e => e.folio_obra === folio)
        seleccionarObra(obraselect)
        cambiarOpcion(1)
    }

    return (
        <Fragment>
            <FiltroContratos/>
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
                    {   title: 'Folio Obra',
                        field: 'folioObra',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'10%',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 20
                        },
                    },
                    {   title: 'Folio Contrato',
                        field: 'folio_contrato',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'10%',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 20,
                        },
                    }
                ]}
                data={contratosObras}
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