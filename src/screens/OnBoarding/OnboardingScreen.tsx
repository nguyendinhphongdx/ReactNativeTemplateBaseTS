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
import ButtonLogin from '../../components/button/ButtonLogin';
interface stateTypes {
  index: number;
  partner: 'online' | 'offline' | null;
}
const OnboardingScreen = ({navigation}: any) => {
  const flatListRef = useRef<FlatList>(null);
  const [state, setState] = useState<stateTypes>({
    index: 0,
    partner: null,
  });
  const handleNext = () => {
    if (state.index < 1) {
      setState({...state, index: state.index + 1});
    } else {
      console.log('success');
    }
  };
  const handleBack = () => {
    setState({...state, index: state.index - 1});
  };
  const handleSelectPartner = (partner: 'online' | 'offline' | null) => {
    setState({
      ...state,
      partner,
    });
  };
  const data = [
    {
      children: (
        <ParterContent
          onNext={handleNext}
          onSelect={handleSelectPartner}
          selected={state.partner}
        />
      ),
    },
    {
      children: <LoginScreen onNext={() => handleNext()} />,
    }
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
  const {onPress, title, active} = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: active ? theme.colors.blueText : theme.colors.white,
        padding: 12,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: active ? theme.colors.white : theme.colors.blueText,
        borderWidth:1
      }}
      onPress={onPress}>
      <Text
        style={{
          color: active ? theme.colors.white : theme.colors.blueText,
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
interface partnerTypes {
  onNext: () => void;
  onSelect: (partner:'online' | 'offline') => void;
  selected: 'online' | 'offline' | null;
}
const ParterContent = (props: partnerTypes) => {
  const {onNext, onSelect, selected} = props;
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
          active={selected === 'offline'}
          title={wordApp.onlinePartner.toUpperCase()}
          onPress={()=>onSelect("offline")}
        />
        <ButtonPartner
          active={selected === 'online'}
          title={wordApp.offlinePartner.toUpperCase()}
          onPress={()=>onSelect("online")}
        />
      </VStack>
      <ButtonLogin onPress={onNext} title={wordApp.continous.toUpperCase()}/>
    </View>
  );
};
