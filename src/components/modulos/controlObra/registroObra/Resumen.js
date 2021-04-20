// se importan las librerias y hooks
import {  Fragment  } from 'react';

// se importan los componentes
import TablaPartidas from './TablaPartidas'
import NuevaObra from './NuevaObra'

export default function Resumen() {

  return (
    <Fragment>
      <NuevaObra estado={true}/>
      <TablaPartidas estado={true}/>
    </Fragment>
  );
}