import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {svgs} from '../../assets';
import { AppSettings, NameScreen } from '../../config';
import { theme } from '../../theme/theme';

const OnboardingScreen = ({navigation}) => {
  const handleNavigate =()=>{
    navigation.navigate(NameScreen.LoginScreen);
    AppSettings.setSplash(false);
  }
  React.useEffect(()=>{
    (async () => {
      const app = await AppSettings.getSplash();
      if(!app || app !== "true"){
        handleNavigate();
      }
    })()
    },[]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontWeight: 'bold',
            fontSize: 30,
            color: '#20315f',
          }}>
          SOC MOBILE
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <SvgXml
          xml={svgs.SvgGaming}
          width={300}
          height={300}
          style={{transform: [{rotate: '-15deg'}]}}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.primary,
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={handleNavigate}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
