import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {Switch} from 'react-router';
import Home from './screens/Home/Home'
import Settings from './screens/Settings/Settings'
import './styles.scss'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route path="*" render={() => <Redirect to="/" push />} />
    </Switch>
  </Router>
)
  
  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);