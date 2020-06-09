import React from 'react';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import './App.css';
import Home from './components/index';
import Graficos from './components/Graficos';
import Body from './components/Body';
import Data from './components/Data';
import Contacto from './components/Contacto'


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/data"><Body></Body><Data></Data></Route>
          <Route path="/graficos"><Body></Body><Graficos></Graficos></Route>
          <Route path="/contacto"><Body></Body><Contacto></Contacto></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
