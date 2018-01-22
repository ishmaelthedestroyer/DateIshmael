import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './pages/Login';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene
          key='login'
          component={Login}
          title='Login'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
