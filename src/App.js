import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import SignIn from './pages/SignIn';
import Home from './pages/home';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ProfileProvider from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
      <Router>
        <Switch>
          <PublicRoute path="/signin">
            <SignIn />
          </PublicRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProfileProvider>
  );
}

export default App;
