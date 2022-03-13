import {HStack, Icon, View, Text} from 'native-base';
import React from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import ViewBackGround from '../viewbackground';
import {MaterialIcons, Feather} from '../../assets/icons';
import {svgs} from '../../assets';
import wordApp from '../../utils/word';
import {windowWidth} from '../../utils/Dimensions';
import {theme} from '../../theme/theme';
function OnBoardFrame(props: any) {
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <SvgXml xml={svgs.SvgEyeLogo} height={120} width={120} />
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontWeight: 'bold',
            fontSize: 30,
            lineHeight: 35,
            color: '#20315f',
          }}>
          {wordApp.nameApp}
        </Text>
      </View>
      <ImageBackground
        source={require('../../assets/icons/png/frame.png')}
        style={{
          width: windowWidth,
          flex: 3,
          maxHeight: 430,
          justifyContent: 'center',
        }}>
        <Text style={[styles.account, {top: 5}]}>TungNGTg</Text>
        <View width={windowWidth} height={360}>
          {props.children}
        </View>
        <Text style={[styles.account, {bottom: 5}]}>03/08/2022</Text>
      </ImageBackground>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={[styles.description, {marginTop: 20}]}>
          {wordApp.slogan}
        </Text>
        <HStack justifyContent={'center'} alignItems={'center'} mt={10}>
          <View
            style={{
              backgroundColor: theme.colors.darkBlue8000,
              padding: 3,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}>
            <Icon as={<MaterialIcons name="phone" />} size={6} color="white" />
          </View>
          <View
            style={{
              backgroundColor: theme.colors.darkBlue8000,
              padding: 4,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              marginLeft: 3,
            }}>
            <Text style={styles.phone}>
              {wordApp.support} {wordApp.phoneNumber}
            </Text>
          </View>
        </HStack>
      </View>
    </>
  );
}
export default OnBoardFrame;
const styles = StyleSheet.create({
  account: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#20315f',
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
  },
  description: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#20315f',
  },
  phone: {
    ...theme.fontSize.h3,
    fontSize: 18,
    color: '#fff',
  },
});
