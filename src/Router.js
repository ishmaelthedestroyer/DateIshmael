import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth' hideNavBar initial>
          <Scene
            initial
            key='login'
            component={Login}
            title='Login'
          />

          <Scene
            key='signup'
            component={Signup}
            title='Signup'
          />
        </Scene>

        <Scene key='home'>
          <Scene
            initial
            key='home'
            component={Home}
            title='Home'
          />
       </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
