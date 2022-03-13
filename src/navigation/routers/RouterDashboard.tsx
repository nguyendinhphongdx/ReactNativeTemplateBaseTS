import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NameScreen} from '../../config';
import DashBoardScreen from '../../screens/Dashboard';
import NotFoundError from '../../screens/NotFound';
const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen
        name={NameScreen.DashBoardScreen}
        component={DashBoardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NameScreen.NotFoundScreen}
        component={NotFoundError}
        options={({route}) => ({
          title: route.params?.title,
          headerShown: false,
        })}
      />
      {/* <Stack.Screen
        name={NameScreen.DetailNetworkScreen}
        component={DetailNetworkScreen}
        options={({route}) => ({
          headerShown: false,
          title: route.params?.title,
        })}
      />
      <Stack.Screen
        name={NameScreen.HostingScreen}
        component={HostingScreen}
        options={({route}) => ({
          title: route.params?.title,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={NameScreen.ApplicationScreen}
        component={ApplicationScreen}
        options={({route}) => ({
          title: route.params?.title,
          headerShown: false,
        })}
      /> */}
      {/* <Stack.Screen
        name={NameScreen.EndpointScreen}
        component={EndpointScreen}
        options={({route}) => ({
          title: route.params?.title,
          headerShown: false,
        })}
      /> */}
    </Stack.Navigator>
  );
};
export default DashboardStack;
