// se importan las librerias y hooks
import { useContext, Fragment, useState } from 'react';
import MaterialTable from 'material-table';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
                    {   title: 'Cantidad',
                        field: 'Cantidad',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'10%',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 20
                        },
                    },
                    {   title: 'Clave Unidad',
                        field: 'ClaveUnidad',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'10%',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 20,
                        },
                    },
                    {   title: 'Descripcion',
                        field: 'Descripcion',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'100%',
                            border: "1px solid #ccc",
                            fontSize: 11,
                            textAlign: 'justify'
                        },
                    },
                    {   title: 'Valor Unitario',
                        field: 'ValorUnitario',
                        type: 'numeric',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'10%',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 15
                        },
                    },
                    {   title: 'Importe',
                        field: 'Importe',
                        type: 'numeric',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'10%',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 15 },
                    },
                    {   title: 'Clave seleccionada',
                        field: 'claveSelect',
                        type: 'numeric',
                        cellStyle: {
                            backgroundColor: '#fff',
                            color: '#000',
                            width:'10%',
                            border: "1px solid #ccc",
                            textAlign: 'center',
                            fontSize: 15 },
                    },
                ]}
                data={conceptos}
                actions={[
                    {
                        icon: ArrowForwardIosIcon,
                        tooltip: 'Ver obra',
                        onClick: (event, rowData) =>  handleConcepto(rowData.NoIdentificacion)
                    },
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
            />
            <ModalClaves
                estado={estado}
                guardarEstado={guardarEstado}
            />
        </Fragment>
    );
}