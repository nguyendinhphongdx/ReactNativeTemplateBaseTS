import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NameScreen } from '../config';
import LocationScreen from '../screens/Location';
import OnboardingScreen from '../screens/OnBoarding/OnboardingScreen';
import AuthOTPScreen from '../screens/OTP';
import AppStack from './AppStack';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name={NameScreen.OnboardingScreen}
        component={OnboardingScreen}
      />
       <Stack.Screen
        name={NameScreen.AuthOTPScreen}
        component={AuthOTPScreen}
      />
       <Stack.Screen
        name={NameScreen.LocationScreen}
        component={LocationScreen}
      />
      <Stack.Screen
        name={NameScreen.StacksScreen.AppStack}
        component={AppStack}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
