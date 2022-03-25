import {
  HStack,
  Icon,
  View,
  Text,
  ScrollView,
  Box,
  Center,
  Stack,
  Button,
  VStack,
} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import ViewBackGround from '../../components/viewbackground';
import {MaterialIcons, Feather, Ionicons} from '../../assets/icons';
import {AppSettings, NameScreen} from '../../config';
import {theme} from '../../theme/theme';
import {windowWidth} from '../../utils/Dimensions';
import wordApp from '../../utils/word';
import {SvgXml} from 'react-native-svg';
import {svgs} from '../../assets';
import OnBoardFrame from '../../components/onboard';
import TextInputComponent from '../../components/input';
import LoginScreen from '../Login/LoginScreen';
import AuthOTPScreen from '../OTP';
import HeaderBack from '../../components/headerback';
import IconBack from '../../components/headerback/IconBack';
const OnboardingScreen = ({navigation}: any) => {
  const flatListRef = useRef<FlatList>(null);
  const [state, setState] = useState({
    index: 0,
  });
  const handleNext = () => {
    if (state.index < 2) {
      setState({...state, index: state.index + 1});
    } else {
      console.log('success');
    }
  };
  const handleBack = () => {
    setState({...state, index: state.index - 1});
  };
  const data = [
    {
      children: <ParterContent onNext={() => handleNext()} />,
    },
    {
      children: <LoginScreen onNext={() => handleNext()} />,
    },
    {
      children: <AuthOTPScreen />,
    },
  ];
  useEffect(() => {
    flatListRef.current?.scrollToIndex({index: state.index});
  }, [state.index]);
  return (
    <ViewBackGround>
      {state.index !== 0 && (
        <View style={{position: 'absolute', zIndex: 999}}>
          <IconBack onPress={handleBack} />
        </View>
      )}
      <OnBoardFrame>
        <Animated.FlatList
          ref={flatListRef}
          keyExtractor={(item, index) => index + ''}
          data={data}
          renderItem={({item, index}) => (
            <Box
              w={windowWidth}
              alignContent="center"
              justifyContent="center"
              style={{paddingHorizontal: 10}}>
              {item.children}
            </Box>
          )}
          pagingEnabled
          legacyImplementation={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          bounces
          scrollEnabled={false}
          contentContainerStyle={{justifyContent: 'center'}}
          // onScroll={Animated.event(
          //   [{nativeEvent: {contentOffset: {x: scrollX}}}],
          //   {useNativeDriver: true},
          // )}
          scrollEventThrottle={16}
        />
      </OnBoardFrame>
    </ViewBackGround>
  );
};

export default OnboardingScreen;
const ButtonPartner = (props: any) => {
  const {onPress, title} = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.white,
        padding: 18,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      onPress={onPress}>
      <Text
        style={{
          color: theme.colors.blueText,
          textAlign: 'center',
          width: '100%',
          fontWeight: 'bold',
          ...theme.fontSize.h2,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const ParterContent = ({onNext}: any) => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <Text
        style={{
          color: theme.colors.white,
          fontWeight: 'bold',
          marginBottom: 10,
          ...theme.fontSize.h3,
        }}>
        {wordApp.optionPartner}
      </Text>
      <VStack space={5}>
        <ButtonPartner
          title={wordApp.onlinePartner.toUpperCase()}
          onPress={onNext}
        />
        <ButtonPartner
          title={wordApp.offlinePartner.toUpperCase()}
          onPress={onNext}
        />
      </VStack>
      <Button
       _pressed={{opacity:.7}}
        style={{
          marginTop:20,
          borderRadius: 22,
          backgroundColor: theme.colors.orrangeButton,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            paddingVertical: 5,
            paddingHorizontal: 30,
            fontWeight: 'bold',
            color: theme.colors.white,
            fontSize:20
          }}>
          {wordApp.continous.toUpperCase()}
        </Text>
      </Button>
    </View>
  );
};
