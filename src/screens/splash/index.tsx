import {useTheme} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import ButtonComponent from '../../components/button/ButtonCom';
import {useNavigation} from '@react-navigation/core';
import { ConstantScreen } from '../../config/constant';
const splash = require('../../assets/lottie/splash.json');
const SplashScreen = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const handleNavigate = () =>{
      navigation.reset({
        index:0,
        routes:[{name:ConstantScreen.SIGNINSCREEN}]
      });
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={{flex:.9}}>
        <LottieView source={splash} autoPlay loop />
      </View>
      <ButtonComponent title={'Continous'} color={['orange','orange']} onPress={handleNavigate}/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
    paddingHorizontal: 20,
  },
});
