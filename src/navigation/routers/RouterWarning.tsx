import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NameScreen } from '../../config';
import WarningScreen from '../../screens/Warning';

const Stack = createNativeStackNavigator();

const WarningStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={NameScreen.WarningScreen}
          component={WarningScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };
  export default WarningStack;