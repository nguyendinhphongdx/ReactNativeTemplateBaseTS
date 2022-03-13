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
  const [autoPlay, setAutoPlay] = useState(false);
  const visibleCarousel = useSharedValue(220);
  const heightCarousel = useAnimatedStyle(() => {
    return {
      height: withTiming(visibleCarousel.value, {
        duration: 500,
        easing: Easing.ease,
      }),
    };
  });
  useFocusEffect(() => {
    setAutoPlay(true);
    return () => {
      setAutoPlay(false);
    };
  });
  const {loading, setLoading} = useContext(LoadingContext);
  return (
    <ViewBackGround>
      <View style={{flex: 1}}>
        <HeaderMenu title={NameScreen.DrawerScreen.DashboardScreen} />
        <View style={{flex: 1}}>
          <Animated.View
            style={[heightCarousel, {overflow: 'hidden', paddingVertical: 5}]}>
            <ImageBackground
                source={require('../../assets/giff/electric2.gif')}
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
                imageStyle={{opacity: 0.7, borderRadius: 10}}>
                <Carousel autoPlay={autoPlay} />
              </ImageBackground>
          </Animated.View>
        </View>
      </View>
    </ViewBackGround>
  );
}
const styles = StyleSheet.create({
 
});
