import React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import SplashScreen from '../../screens/splash';
import SignInScreen from '../../screens/signIn';
import SignUpScreen from '../../screens/signUp';
import {ConstantScreen} from '../../config/constant';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}: any) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureDirection: 'horizontal',
      cardStyle: {backgroundColor: 'transparent'},
      cardOverlayEnabled: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <RootStack.Screen
      name={ConstantScreen.SPLASHSCREEN}
      component={SplashScreen}
    />
    <RootStack.Screen
      name={ConstantScreen.SIGNINSCREEN}
      component={SignInScreen}
    />
    <RootStack.Screen
      name={ConstantScreen.SIGNUPSCREEN}
      component={SignUpScreen}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
