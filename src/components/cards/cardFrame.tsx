import {Text, View} from 'native-base';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';
function CardFrame(props: any) {
  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode={'cover'}
      source={require('../../assets/images/png/linehorizontalwithcard2.png')}>
      <Text style={[styles.date, {top: -7}]}>
        {new Date().toLocaleDateString()}
      </Text>
      <View mt={5} flex={1} mb={5}>
        {props.children}
      </View>
    </ImageBackground>
  );
}
export default CardFrame;
const styles = StyleSheet.create({
  date: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 15,
    color: theme.colors.white,
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
  },
});
