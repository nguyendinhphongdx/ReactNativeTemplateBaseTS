import React, {ReactChild} from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {isIphoneX} from 'react-native-iphone-x-helper';
import Svg, {Path} from 'react-native-svg';

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
import {TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../config/constants';
import NotificationScreen from '../../screens/notification';
import OrderDelivery from '../../screens/detail/OrderDelivery';

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const TabBarCustomButton = ({
  focus,
  icon,
  color,
}: {
  focus: boolean;
  icon: string;
  color: string;
}) => {
  var isSelected = focus;
  if (isSelected) {
    return (
      <View style={{flex: 1, alignItems: 'center', zIndex: 1000}}>
        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'white',
          }}>
          {/* <View style={{flexDirection: 'row', position: 'absolute', top: 10}}>
            <View style={{flex: 1}}></View>
            <Svg width={200} height={61} viewBox="0 0 75 61">
              <Path
                d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                fill={color}
              />
            </Svg>
            <View style={{flex: 1}}></View>
          </View> */}
          <View>
            <Icon
              name={icon}
              color={focus ? color : COLORS.darkgray}
              size={26}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
        }}
        activeOpacity={1}>
        <Icon name={icon} color={focus ? color : COLORS.darkgray} size={26} />
      </TouchableOpacity>
    );
  }
};
const MainTabScreen = () => (
  <Tab.Navigator initialRouteName={ConstantStack.HOMESTACK} activeColor="#fff">
    <Tab.Screen
      name={ConstantStack.HOMESTACK}
      component={HomeStackScreen}
      options={{
        tabBarLabel: themeStack.home.label,
        tabBarColor: themeStack.home.color,
        tabBarIcon: ({focused, color}: {color: string; focused: boolean}) => (
          <TabBarCustomButton
            focus={focused}
            color={themeStack.home.color}
            icon="home"
          />
        ),
      }}
    />
    <Tab.Screen
      name={ConstantStack.NOTIFICATIONSTACK}
      component={NotificationStackScreen}
      options={{
        tabBarLabel: themeStack.notification.label,
        tabBarColor: themeStack.notification.color,
        tabBarIcon: ({focused, color}: {color: string; focused: boolean}) => (
          <TabBarCustomButton
            focus={focused}
            color={themeStack.notification.color}
            icon="md-notifications"
          />
        ),
      }}
    />
    <Tab.Screen
      name={ConstantStack.PROFILESTACK}
      component={ProfileStackScreen}
      options={{
        tabBarLabel: themeStack.profile.label,
        tabBarColor: themeStack.profile.color,
        tabBarIcon: ({focused, color}: {color: string; focused: boolean}) => (
          <TabBarCustomButton
            focus={focused}
            color={themeStack.profile.color}
            icon="md-person"
          />
        ),
      }}
    />
    <Tab.Screen
      name={ConstantStack.EXPLORESTACK}
      component={ExploreStackScreen}
      options={{
        tabBarLabel: themeStack.explore.label,
        tabBarColor: themeStack.explore.color,
        tabBarIcon: ({focused, color}: {color: string; focused: boolean}) => (
          <TabBarCustomButton
            focus={focused}
            color={themeStack.explore.color}
            icon="md-logo-windows"
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}: any) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: themeStack.home.color,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
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
    <HomeStack.Screen
      name={ConstantScreen.DETAILSCREEN}
      component={DetailsScreen}
      options={{
        title: 'DetailScreen',
        headerLeft: () => <HeaderBackLeft color={themeStack.home.color} />,
      }}
    />
    <HomeStack.Screen
      name={ConstantScreen.MAPSCREEN}
      component={OrderDelivery}
      options={{
        title: 'OrderDelivery',
        headerLeft: () => <HeaderBackLeft color={themeStack.home.color} />,
      }}
    />
  </HomeStack.Navigator>
);

const NotificationStackScreen = ({navigation}: any) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: themeStack.notification.color,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationStack.Screen
      name={ConstantScreen.NOTIFCATIONSCREEN}
      component={NotificationScreen}
      options={{
        title: 'NotifcationScreen',
        headerLeft: () => (
          <HeaderBackLeft color={themeStack.notification.color} />
        ),
      }}
    />
  </NotificationStack.Navigator>
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
