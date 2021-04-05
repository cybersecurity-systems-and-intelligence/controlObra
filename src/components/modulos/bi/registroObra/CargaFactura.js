// se importan las librerias
import MaterialTable from 'material-table';
import { tableIcons } from '../../../../styles/bi/stylesBi'

// se crea y exporta el componente
export default function CargaFactura () {
    return (
        <MaterialTable        
            icons={tableIcons}
            title="Partidas"
            columns={[
                { title: 'Partida', field: 'partida', defaultGroupOrder: 0 },
                { title: 'Clave', field: 'clave' },
                { title: 'Descripcion', field: 'descripcion', type: 'numeric' },
                { title: 'Unidad', field: 'unidad', type: 'numeric' },
                { title: 'Requeridos', field: 'requeridos', type: 'numeric' },
            ]}
            data={[
                { partida: 'Herramienta', clave: '20201', descripcion: 'tornillos', unidad: 'pz', requeridos: '2' },
                { partida: 'Herramienta', clave: '20201', descripcion: 'tornillos', unidad: 'pz', requeridos: '2' },
                { partida: 'Mano de Obra', clave: '20201', descripcion: 'tornillos', unidad: 'pz', requeridos: '2' },
                { partida: 'Mano de Obra', clave: '20201', descripcion: 'tornillos', unidad: 'pz', requeridos: '2' },
                { partida: 'Material', clave: '20201', descripcion: 'tornillos', unidad: 'pz', requeridos: '2' },
            ]}
        />
    );
}

