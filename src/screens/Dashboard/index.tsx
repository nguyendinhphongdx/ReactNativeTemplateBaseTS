import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Box, FlatList, HStack, Image, Pressable, Text, View } from 'native-base';
import React, { useContext, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import Carousel from '../../components/carousel';
import HeaderMenu from '../../components/headermenu';
import ViewBackGround from '../../components/viewbackground';
import { NameScreen } from '../../config';
import { LoadingContext } from '../../context/LoadingContext';
import helpers from '../../helpers/helpers';
import { theme } from '../../theme/theme';
import { windowWidth } from '../../utils/Dimensions';
import wordApp from '../../utils/word';

export default function Container() {
  return <HomeScreen />;
}
function HomeScreen() {
  return (
    <ViewBackGround>
      <View style={{flex: 1}}>
        <HeaderMenu title={NameScreen.DrawerScreen.DashboardScreen} />
       
      </View>
    </ViewBackGround>
  );
}
const styles = StyleSheet.create({
 
});
