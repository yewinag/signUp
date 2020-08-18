/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux';

import Home from './src/scenes/Home';
import SignUp from './src/scenes/SignUp';
import OtpConfirm from './src/scenes/OtpConfirm';
import SignUpHook from './src/scenes/SingUpHook';

const App = () => {
  return (
    <Router>
    <Stack key="root">
      <Scene key="home" component={Home} title="You're Welcome" hideNavBar={true}/>
      <Scene key="signup" component={SignUp} title="Sign Up" />      
      <Scene key="singuphook" component={SignUpHook} title="Sign Up" />
      <Scene key="otp" component={OtpConfirm} title="Otp Confirmation" />
    </Stack>
  </Router>
  );
};

export default App;
