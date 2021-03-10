import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Modulos from './components/rutas/Modulos'

import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'
import tokenAuth from './config/token'
import RutaPrivada from './components/rutas/RutaPrivada'

// Revisar si tenemos un token
const token = localStorage.getItem('token')
if ( token ) {
  tokenAuth(token)  
}


function App() {

  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route  path='/nueva-cuenta' component={NuevaCuenta}/>
            <RutaPrivada path='/modulos' component={Modulos}/>          
          </Switch>
        </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;
