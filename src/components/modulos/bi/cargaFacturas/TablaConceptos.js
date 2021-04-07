import React, { useContext } from 'react';
import MaterialTable from 'material-table';

import { tableIcons } from '../../../../styles/bi/stylesBi'

// se importan los context
import cargaFacturaContext from '../../../../context/cargaFacturas/cargaFacturaContext'

export default function TablaConceptos() {

    // Extraer los valores del context de la factura
    const cargaFacturasContext = useContext(cargaFacturaContext)
    const { informacion } = cargaFacturasContext

    const { conceptos } = informacion


    return (
        <MaterialTable        
            icons={tableIcons}
            title="Partidas"
            columns={[
                { title: 'Cantidad', field: 'Cantidad' },
                { title: 'Clave Unidad', field: 'ClaveUnidad' },
                { title: 'Descripcion', field: 'Descripcion'},
                { title: 'Valor Unitario', field: 'ValorUnitario', type: 'numeric' },
                { title: 'Importe', field: 'Importe', type: 'numeric' },
            ]}
            data={conceptos}
        />
    );
}