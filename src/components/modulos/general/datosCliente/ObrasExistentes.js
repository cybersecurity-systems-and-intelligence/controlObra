import { Fragment, forwardRef, useContext } from 'react';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { styleTitle } from '../../../../../src/styles/bi/stylesBi'
// se importan los context
import obrasContext from '../../../../context/obras/obrasContext'
import datosClienteContext from '../../../../context/general/datosCliente/datosClienteContext'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const ObrasExistentes = () => {
    const css = styleTitle()

    // extraer la informacion de la obra
    const obrassContext = useContext(obrasContext)
    const { obrasContrato } = obrassContext

    const datosClientesContext = useContext(datosClienteContext)
    const { obraSeleccionada, seleccionarObra } = datosClientesContext

    const handleObra = (folio) => {
        const obraselect = obrasContrato.find(e => e.folio_obra === folio)
        seleccionarObra(obraselect)
    }

    return (
        <Fragment>
            <h3 className={css.title} > OBRA SELECCIONADA: 
                    { obraSeleccionada.folio_obra ? obraSeleccionada.folio_obra : null} </h3>
            <MaterialTable
                style={{background: '#EAF9F7',  marginTop:5, marginBottom:5, border: "2px solid #ccc"}}
                icons={tableIcons}
                title="Selecciona una obra"
                columns={[
                    {
                        title: 'Folio',
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

                    {
                        title: 'Nombre',
                        field: 'nombre_obra',
                        cellStyle: {
                            background: 'linear-gradient(#eeffff,#bbdefb)',
                            color: '#01465C',
                            width:'50s%',
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 700,
                            border: "1px solid #ccc",
                        },
                    },

                    {
                        title: 'Direccion',
                        field: 'ubicacion_obra',
                        cellStyle: {
                            background: 'linear-gradient(#eeffff,#bbdefb)',
                            color: '#01465C',
                            width:'50s%',
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 700,
                            border: "1px solid #ccc",
                        },
                    },
                ]}
                data={obrasContrato}
                actions={[
                    {
                        icon: ArrowForwardIosIcon,
                        tooltip: 'Save User',
                        onClick: (event, rowData) => handleObra(rowData.folio_obra),
                    },
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                />
        </Fragment>
    );
}

export default ObrasExistentes;