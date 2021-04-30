import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Modulos from './components/rutas/Modulos'
import General from './components/modulos/general/General'
import ControlObra from './components/modulos/controlObra/ControlObra'
import Contabilidad from './components/modulos/contabilidad/Contabilidad'

// se importan los state
import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'
import BarraState from './context/barras/barraState'
import ModalState from './context/modal/modalState'
import ObrasState from './context/obras/obrasState'

// modulo CONTROL DE OBRA
import RegistroObraState from './context/controlObra/registroObra/registroObraState'

// modulo CONTABILIDAD
import AnticipoObraState from './context/contabilidad/anticipoObra/anticipoObraState'

// modulo GENERAL
import DatosClienteState from './context/general/datosCliente/datosClienteState'
import ObrasCreadasState from './context/general/obrasCreadas/obrasCreadasState'
import ContratosObrasState from './context/general/contratosObras/contratosObrasState'

import tokenAuth from './config/token'
import RutaPrivada from './components/rutas/RutaPrivada'
import RutaPrivadaLogin from './components/rutas/RutaPrivadaLogin'
import PageNotFound from './components/rutas/PageNotFound'

// Revisar si tenemos un token
const token = JSON.parse(localStorage.getItem('accessToken'))
if ( token ) {
  tokenAuth(token)  
}


function App() {

  return (
    <AlertaState>
      <AuthState>
        <BarraState>
          <RegistroObraState>
            <ObrasState>
              <AnticipoObraState>
                <DatosClienteState>
                  <ObrasCreadasState>
                    <ContratosObrasState>
                      <ModalState>
                        <Router>
                          <Switch>
                            <RutaPrivadaLogin exact path='/' component={Login} />
                            <Route  path='/nueva-cuenta' component={NuevaCuenta} />
                            <RutaPrivada path='/modulos' component={Modulos} /> 
                            <RutaPrivada path='/GENERAL' component={General} />  
                            <RutaPrivada path='/CONTROLOBRA' component={ControlObra}/>
                            <RutaPrivada path='/CONTABILIDAD' component={Contabilidad}/>
                            <Route component={PageNotFound}/>       
                          </Switch>
                        </Router>
                      </ModalState>
                    </ContratosObrasState>
                  </ObrasCreadasState>
                </DatosClienteState>
              </AnticipoObraState>
            </ObrasState>
          </RegistroObraState>
        </BarraState>
      </AuthState>
    </AlertaState>
  );
}

export default App;
