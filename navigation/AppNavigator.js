import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import SigninScreen from './../screens/auth/SigninScreen';
import SignUpScreen from '../screens/auth/SignupScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';

export default createSwitchNavigator({

  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
});