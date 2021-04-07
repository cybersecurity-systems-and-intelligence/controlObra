import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Modulos from './components/rutas/Modulos'
import Bi from './components/modulos/bi/BI'

// se importan los state
import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'
import BarraState from './context/barras/barraState'
import CargaFacturaState from './context/cargaFacturas/cargaFacturaState'

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
          <CargaFacturaState>
            <Router>
              <Switch>
                <RutaPrivadaLogin exact path='/' component={Login} />
                <Route  path='/nueva-cuenta' component={NuevaCuenta} />
                <RutaPrivada path='/modulos' component={Modulos} /> 
                <RutaPrivada path='/BI' component={Bi} />  
                <Route component={PageNotFound}/>       
              </Switch>
            </Router>
          </CargaFacturaState>
        </BarraState>
      </AuthState>
    </AlertaState>
  );
}

export default App;
