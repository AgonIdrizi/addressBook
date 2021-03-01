import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container/Container';
import { UsersProvider } from './contexts/usersContext';
import Routes from './components/Routes/Routes';
import './styles.scss';

const App = () => (
  <Router>
    <UsersProvider>
      <Container>
        <Routes />
      </Container>
    </UsersProvider>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
