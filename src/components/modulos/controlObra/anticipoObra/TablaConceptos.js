// se importan las librerias y hooks
import { useContext, Fragment, useState } from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';

// se importan los estilos
import { tableIcons } from '../../../../styles/bi/stylesBi'

// se importan los context
import anticipoObraContext from '../../../../context/contabilidad/anticipoObra/anticipoObraContext'
import ModalClaves from './ModalClaves';

export default function TablaConceptos() {

    // Extraer los valores del context de la factura
    const anticipoObrasContext = useContext(anticipoObraContext)
    const { informacion, seleccionConcepto } = anticipoObrasContext

    const { conceptos } = informacion

    const [ estado, guardarEstado ] = useState(false)

    const handleConcepto = (clave) => {
        seleccionConcepto(clave)
        guardarEstado(true)
    };


    return (
        <Fragment>
            <MaterialTable
                style={{background: '#E3F2FD',  marginTop:5, marginBottom:5, border: "2px solid #ccc", borderRadius: 25}}
                icons={tableIcons}
                title={<h3>CONCEPTOS</h3>}

                columns={[
                    {   title: 'Clave Unidad',
                        field: 'ClaveUnidad',
                        cellStyle: {
                            background: 'linear-gradient(#eeffff,#bbdefb)',
                            color: '#01465C',
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 700,
                            border: "1px solid #ccc",
                        },
                    },
                    {
                        title: 'Cantidad',
                        field: 'Cantidad',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 20
                        },
                    },
                    {
                        title: 'Descripcion',
                        field: 'Descripcion',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'100%',
                            border: "1px solid #ccc",
                            fontSize: 15,
                            textAlign: 'justify'
                        },
                    },
                    {
                        title: 'Valor Unitario',
                        field: 'ValorUnitario',                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 15
                        },
                    },
                    {
                        title: 'Importe',
                        field: 'Importe',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 15
                        },
                    },
                    {
                        title: 'Clave seleccionada',
                        field: 'claveSelect',
                        cellStyle: {
                            background: '#e0f7fa',
                            color: '#01465C',
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 700,
                            border: "1px solid #ccc",
                        },
                    },
                ]}
                data={conceptos}
                actions={[
                    {
                        icon: props => <Button size="small" variant="contained" color="primary" >Seleccionar</Button>,
                        tooltip: 'Ver obra',
                        onClick: (event, rowData) =>  handleConcepto(rowData.NoIdentificacion)
                    },
                ]}
                options={{
                    actionsColumnIndex: -1,
                    headerStyle: {
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        color: "#01465C",
                        border: "1px solid #ccc",
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 600,
                    },

                    actionsCellStyle:{
                        background: 'linear-gradient(#eeffff,#bbdefb)',
                        width:'2%',
                    }
                }}
                localization={{
                    header: {
                        actions: 'Seleccionar clave'
                    },
                }}
            />
            <ModalClaves
                estado={estado}
                guardarEstado={guardarEstado}
            />
        </Fragment>
    );
}