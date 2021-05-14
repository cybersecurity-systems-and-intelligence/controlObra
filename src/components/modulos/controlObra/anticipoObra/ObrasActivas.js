import { Fragment, forwardRef, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import React from 'react';


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
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';

// se importan los context
import obrasContext from '../../../../context/obras/obrasContext'
import anticipoObraContext from '../../../../context/contabilidad/anticipoObra/anticipoObraContext'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const tableIcons = {
    push: forwardRef((props, ref) => <FiberManualRecordTwoToneIcon {...props} ref={ref} />),
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

    const classes = useStyles();
    // extraer la informacion de la obra
    const obrassContext = useContext(obrasContext)
    const { obrasContrato } = obrassContext

    const anticipoObrasContext = useContext(anticipoObraContext)
    const { conceptoSeleccionado, obraSeleccionada, seleccionarObra } = anticipoObrasContext



    const handleObra = (folio) => {
        const obraselect = obrasContrato.find(e => e.folio_obra === folio)
        seleccionarObra(obraselect)
    }

    return (
        <Fragment>
            <MaterialTable
                style={{background: '#E3F2FD',  marginTop:5, marginBottom:5, border: "2px solid #ccc", borderRadius: 25}}
                icons={tableIcons}
                title="Selecciona una obra"
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

                    {
                        title: 'Nombre',
                        field: 'nombre_obra',
                        cellStyle: {
                            background: '#ffff',
                            color: '#01465C',
                            textAlign: 'center',
                            fontSize: 16,
                            border: "1px solid #ccc",
                        },
                    },

                    {
                        title: 'Direccion',
                        field: 'ubicacion_obra',
                        cellStyle: {
                            background: '#ffff',
                            color: '#01465C',
                            textAlign: 'center',
                            fontSize: 16,
                            border: "1px solid #ccc",
                        },
                    },

                    {
                        title: '',
                        field: 'itemselect',
                        cellStyle: {
                            backgroundColor: '#fff',
                            width:'2%',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                        },
                        render: rowData => rowData.folio_obra == obraSeleccionada.folio_obra ?  <div ><CheckBoxIcon style={{color:'#B1D839', fontSize: 23}}/></div> : <div ><CheckBoxOutlineBlankIcon style={{color:'#01465C', fontSize: 23}}/></div>,
                    },
                ]}
                data={obrasContrato}
                actions={[
                    {
                        icon: props => <Button size="small" variant="contained" color="primary" >Seleccionar</Button>,
                        tooltip: <Typography>SELECCIONAR FOLIO</Typography>,
                        onClick: (event, rowData) => handleObra(rowData.folio_obra),

                    },
                ]}
                options={{
                    actionsColumnIndex: -1,
                    headerStyle: {
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        color: "#01465C",
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 15,
                        fontWeight: 600
                    },

                        actionsCellStyle:{
                        width:'2%',
                        }
                }}

                localization={{
                    header: {
                        actions: 'Seleccionar obra'
                    },
                }}
            />
        </Fragment>
    );
}
 
export default ObrasExistentes;