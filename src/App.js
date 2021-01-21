import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Chat from './components/chat/Chat';
import NotFound from './components/NotFound/Notfound';

import { Provider } from 'react-redux';
import store from './redux/store';

import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';

import './App.scss';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <ProtectedRoutes exact path="/" component={Chat} />
            <Route path="/login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
