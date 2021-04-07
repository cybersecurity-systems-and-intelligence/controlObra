import { Fragment, useState, useEffect, useContext } from 'react';

import { styleCargaFacturas } from '../../../../styles/bi/stylesBi'

import api from '../../../../libs/api'
import DatosGenerales from './DatosGenerales'
import TablaConceptos from './TablaConceptos'
import CargarArchivo from './CargarArchivo'

// se crea y exporta el componente
export default function LecturaXML () {

    

    return (
        <Fragment>            
            <CargarArchivo/>
            <DatosGenerales/>
            <br/>
            <TablaConceptos/>
        </Fragment>
        
    );
}

