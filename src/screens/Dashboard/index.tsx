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
import { dataFunctions } from './data';

export default function Container() {
  return <HomeScreen />;
}
function HomeScreen() {
  const [autoPlay, setAutoPlay] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const navigation = useNavigation();
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

  const handleNavigate = async (navigate: any, item: any) => {
    if (navigate) {
      setLoading(true);
      await helpers.waited(500).then(async () => {
        navigation.navigate(NameScreen.DashboardElementaryScreen, {item});
        helpers.waited(1000).then(() => {
          setLoading(false);
        });
      });
    }
  };
  const toggleOpen = () => {
    visibleCarousel.value = isFull ? 220 : 0;
    setIsFull(!isFull);
  };
  return (
    <ViewBackGround>
      <View style={{flex: 1}}>
        <HeaderMenu title={NameScreen.DrawerScreen.DashboardScreen} />
        <View style={{flex: 1}}>
          <Animated.View
            style={[heightCarousel, {overflow: 'hidden', paddingVertical: 5}]}>
            {!isFull && (
              <ImageBackground
                // source={require('../../assets/images/world.png')}
                source={require('../../assets/giff/electric2.gif')}
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
                imageStyle={{opacity: 0.7, borderRadius: 10}}>
                <Carousel autoPlay={autoPlay} />
              </ImageBackground>
            )}
          </Animated.View>

          <View
            flex={1}
            style={{
              backgroundColor: theme.colors.card,
              borderRadius: 10,
              overflow: 'hidden',
              justifyContent: 'center',
              flexDirection: 'column',
              flex: 1,
            }}>
            <ImageBackground
              source={require('../../assets/giff/radar2.gif')}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: 0.4,
              }}
              resizeMode="cover"
            />
            <HStack space="2" justifyContent="space-between">
              <Text style={styles.title}>{wordApp.function}</Text>
              <Pressable onPress={toggleOpen}>
                <Text style={[styles.title, {fontSize: 14}]}>
                  {wordApp.expand}
                </Text>
              </Pressable>
            </HStack>
            <FlatList
              data={dataFunctions}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                // flex: isFull ? 1 : 0,
                flex: 1,
              }}
              keyExtractor={item => item.id + ''}
              renderItem={({item, index}) => {
                return (
                  <Pressable
                    style={styles.itemF}
                    onPress={() => handleNavigate(item.navigation, item)}>
                    <Box style={styles.icon}>
                      <Image
                        resizeMode="contain"
                        style={{width: '100%', height: '100%'}}
                        source={item.icon}
                        alt={item.title}
                      />
                    </Box>
                    <Text style={styles.titleF}>{item.title}</Text>
                  </Pressable>
                );
              }}
              numColumns={2}
            />
          </View>
        </View>
      </View>
    </ViewBackGround>
  );
}
const styles = StyleSheet.create({
  title: {
    color: theme.colors.text,
    fontWeight: 'bold',
    padding: 10,
    ...theme.fontSize.body3,
  },
  titleF: {
    color: theme.colors.text,
    fontWeight: '900',
    textAlign: 'center',
    paddingTop: 20,
    ...theme.fontSize.h3,
  },
  itemF: {
    backgroundColor: theme.colors.darkBlue8000,
    height: 150,
    width: windowWidth / 2 - 50,
    margin: 5,
    borderRadius: 20,
    shadowColor: 'rgba(255,255,255,.9)',
    borderWidth: 1,
    borderColor: theme.colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {width: 60, height: 60},
});
