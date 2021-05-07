
import { Fragment, useContext, useEffect,forwardRef } from 'react';
import { Box} from '@material-ui/core';
import { Grid, InputLabel, FormControl } from '@material-ui/core';
import { BootstrapInput } from '../../../../styles/bi/stylesBi'
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';

// se importan los context
import nuevosItemsContext from '../../../../context/controlObra/nuevosItems/nuevosItemsContext'
import modalContext from '../../../../context/modal/modalContext'
import alertaContext from '../../../../context/alertas/alertaContext'

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

const Formulario = () => {
    // se extrae la informacion del item
    const nuevosItemssContext = useContext(nuevosItemsContext)
    const { clave, descripcion, unidad, items, handleChangeDatos, agregarItems, submitItems } = nuevosItemssContext

    // se extrae la informacion del context de modal
  const modalsContext = useContext(modalContext)
  const { peticion, estadoModal } = modalsContext

  const alertasContext = useContext(alertaContext)
const { mostrarAlerta } = alertasContext

  const submitItemsForm = e => {
      e.preventDefault()

      if(items.length === 0){
        mostrarAlerta('Agrega al menos un item', 'alerta alerta-error')
        return
      }

      estadoModal(true)
  }

  const agregarATabla = () => {
    if (clave.trim() === '' || descripcion.trim() === '' || unidad.trim() === ''){
        mostrarAlerta('Agrega todos los datos', 'alerta alerta-error')
        return
    }
    agregarItems()
  }

  useEffect(() => {
    if(peticion){
        submitItems()
    }
  }, [peticion])
  
    return (
        <Fragment>
        <Box style={{margin:25}}>
            <form noValidate autoComplete="off">
                <Box>
                    <Grid container spacing={3} justify="center">
                        <Grid  item xs={12} sm={6} md={4} lg={3}>
                            <FormControl>
                                <InputLabel shrink htmlFor="bootstrap-input">
                                    <b style={{fontSize:20, color:'#388CBD'}}>Clave</b>
                                </InputLabel>
                                <BootstrapInput
                                    style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}
                                    label="Clave"
                                    required
                                    variant="outlined"
                                    name='clave'
                                    value={clave}
                                    onChange={e => handleChangeDatos(e)}
                                />
                </FormControl>
            </Grid>

            <Grid  item xs={12} sm={6} md={4} lg={3}>
                <FormControl>
                <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Descripción</b>
                </InputLabel>
                <BootstrapInput
                    style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}
                    label="Descripción"
                    required
                    variant="outlined"
                    name='descripcion'
                    value={descripcion}
                    onChange={e => handleChangeDatos(e)}
                />
                </FormControl>
            </Grid>

            <Grid  item xs={12} sm={6} md={4} lg={3}>
                <FormControl>
                <InputLabel shrink htmlFor="bootstrap-input">
                    <b style={{fontSize:20, color:'#388CBD'}}>Unidad</b>
                </InputLabel>
                <BootstrapInput
                    style={{fontSize:100, color:'#73ADD1', fontWeight:'bold'}}
                    label="Unidad"
                    required
                    variant="outlined"
                    name='unidad'
                    value={unidad}
                    onChange={e => handleChangeDatos(e)}
                />
                </FormControl>
                </Grid>
                </Grid>
                <Button style={{margin:25}} variant="contained" color="Primary" onClick={agregarATabla}> AGREGAR </Button>
                </Box>
                </form>
            </Box>

            <MaterialTable
                style={{background: '#EAF9F7',  marginTop:5, marginBottom:5, border: "2px solid #ccc", textAlign: 'center'}}
                title="DATOS GUARDADOS:"
                icons={tableIcons}
                columns={[
                    {
                        title: 'Clave',
                        field: 'clave',
                        cellStyle: {
                            background: '#eeffff',
                            color: '#01465C',
                            width:'18%',
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 700,
                            border: "1px solid #ccc",
                        },
                    },

                    {
                        title: 'Descripción',
                        field: 'descripcion',
                        cellStyle: {
                            background: '#ffff',
                            color: '#000',
                            width:'50%',
                            textAlign: 'center', 
                            fontSize: 16,
                            fontWeight: 700,
                            border: "1px solid #ccc",
                        },
                    },

                    {
                        title: 'Unidad',
                        field: 'unidad',
                        cellStyle: {
                            background: '#ffff',
                            color: '#000',
                            width:'50%',
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 700,
                            border: "1px solid #ccc",
                        },
                    },
                ]}
                options={{
                    headerStyle: {
                        border: "1px solid #ccc",
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        color: '#000',
                        textAlign: 'center'
                    }}}
                data={items}
                />
                <form
                    onSubmit={submitItemsForm}
                >
                <Button type='submit' style={{margin:25}} variant="contained" color="Primary" onClick={agregarATabla}> GUARDAR </Button>
                </form>
        </Fragment>
    );
}
export default Formulario;