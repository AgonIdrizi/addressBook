import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container/Container';
import Routes from './utils/Routes';
import './styles.scss';

const App = () => (
  <Router>
    <Container>
      <Routes />
    </Container>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
