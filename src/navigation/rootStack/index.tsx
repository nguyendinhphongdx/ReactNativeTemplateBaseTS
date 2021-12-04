import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screens/splash';
import SignInScreen from '../../screens/signIn';
import SignUpScreen from '../../screens/signUp';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}: any) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
