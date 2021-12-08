import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../../screens/profile';
import ExploreScreen from '../../screens/explore';
import HomeScreen from '../../screens/home';
import DetailsScreen from '../../screens/detail';
import {ConstantScreen, ConstantStack} from '../../config/constant';
import {
  HeaderBackLeft,
  HeaderBarLeft,
} from '../../components/headers/HeaderLeft';
import {themeStack} from '../../theme/themeConfig';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName={ConstantStack.HOMESTACK}
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    >
    <Tab.Screen
      name={ConstantStack.HOMESTACK}
      component={HomeStackScreen}
      options={{
        tabBarLabel: themeStack.home.label,
        tabBarColor: themeStack.home.color,
        tabBarIcon: ({color}: {color: string}) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name={ConstantStack.NOTIFICATIONSTACK}
      component={DetailsStackScreen}
      options={{
        tabBarLabel: themeStack.notification.label,
        tabBarColor: themeStack.notification.color,
        tabBarIcon: ({color}: {color: string}) => (
          <Icon name="md-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name={ConstantStack.PROFILESTACK}
      component={ProfileStackScreen}
      options={{
        tabBarLabel: themeStack.profile.label,
        tabBarColor: themeStack.profile.color,
        tabBarIcon: ({color}: {color: string}) => (
          <Icon name="md-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name={ConstantStack.EXPLORESTACK}
      component={ExploreStackScreen}
      options={{
        tabBarLabel: themeStack.explore.label,
        tabBarColor: themeStack.explore.color,
        tabBarIcon: ({color}: {color: string}) => (
          <Icon name="md-logo-windows" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}: any) => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      // headerStyle: {
      //   backgroundColor: themeStack.home.color,
      // },
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
    }}>
    <HomeStack.Screen
      name={ConstantScreen.HOMESCREEN}
      component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <HeaderBarLeft
            color={themeStack.home.color}
            navigation={navigation}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}: any) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: themeStack.notification.color,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name={ConstantScreen.DETAILSCREEN}
      component={DetailsScreen}
      options={{
        title: 'DetailScreen',
        headerLeft: () => (
          <HeaderBackLeft color={themeStack.notification.color} />
        ),
      }}
    />
  </DetailsStack.Navigator>
);
const ProfileStackScreen = ({navigation}: any) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: themeStack.profile.color,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen
      name={ConstantScreen.PROFILESCREEN}
      component={ProfileScreen}
      options={{
        title: 'ProfileScreen',
        headerLeft: () => <HeaderBackLeft color={themeStack.profile.color} />,
      }}
    />
  </ProfileStack.Navigator>
);
const ExploreStackScreen = ({navigation}: any) => (
  <ExploreStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: themeStack.explore.color,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ExploreStack.Screen
      name={ConstantScreen.EXPLORESCREEN}
      component={ExploreScreen}
      options={{
        title: 'ExploreScreen',
        headerLeft: () => <HeaderBackLeft color={themeStack.explore.color} />,
      }}
    />
  </ExploreStack.Navigator>
);
