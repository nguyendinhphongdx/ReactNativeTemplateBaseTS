import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NameScreen } from '../../config';
import WarningScreen from '../../screens/Warning';
import InfoWarningScreen from '../../screens/Warning/info';

const Stack = createNativeStackNavigator();

const WarningStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={NameScreen.WarningScreen}
          component={WarningScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NameScreen.InfoWarningScreen}
          component={InfoWarningScreen}
          options={({route}) => ({
            title: route.params?.title,
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    );
  };
  export default WarningStack;