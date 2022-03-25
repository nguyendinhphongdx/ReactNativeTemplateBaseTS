import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import {AntDesign, Ionicons, MaterialIcons} from '../assets/icons';
import CustomDrawer from '../components/CustomDrawer';
import {NameScreen} from '../config';
import ContactScreen from '../screens/Contact';
import NotFoundScreen from '../screens/NotFound';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();
const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        drawerType: 'slide',
      }}
      defaultScreenOptions={{
        sceneContainerStyle: {backgroundColor: 'transparent'},
        drawerActiveBackgroundColor: 'transparent',
        drawerInactiveBackgroundColor: 'transparent',
        drawerActiveTintColor: 'green',
        drawerInactiveTintColor: 'green',
      }}>
      {/* <Drawer.Screen name="defaultScreen">{() => <Screens />}</Drawer.Screen> */}
      <Drawer.Screen
        name={NameScreen.StacksScreen.TabBarBottom}
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="newspaper-outline" size={22} color={color} />
          ),
          title: NameScreen.DrawerScreen.NewsScreen,
        }}
      />
      <Drawer.Screen
        name={NameScreen.ContactScreen}
        component={ContactScreen}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="contacts" size={22} color={color} />
          ),
          title: NameScreen.DrawerScreen.ContactScreen,
        }}
      />
      <Drawer.Screen
        name={NameScreen.NotFoundScreen}
        component={NotFoundScreen}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="error-outline" size={22} color={color} />
          ),
          title: 'Not Found',
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
});
