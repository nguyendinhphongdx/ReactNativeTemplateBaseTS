import {Box, Image, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {svgs} from '../../assets';
import {theme} from '../../theme/theme';
import {windowWidth} from '../../utils/Dimensions';
import wordApp from '../../utils/word';
interface propsTypes {
  children: React.ReactNode;
  lineHorizontalCard?: boolean;
}
function OnBoardFrame(props: propsTypes) {
  const {children} = props;
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 20,
        }}>
        {/* <SvgXml xml={svgs.SvgEyeLogo} height={120} width={120} /> */}
        <Image
          source={require('../../assets/icons/png/protection.png')}
          alt="protection"
          style={{width: 120, height: 120}}
        />
        <Text style={styles.nameApp}>{wordApp.nameApp}</Text>
      </View>
      <Box
        style={{
          position: 'relative',
          flex: 1,
        }}>
        <Text style={[styles.date, {top: -2}]}>
          {new Date().toLocaleDateString()}
        </Text>
        <Image
          style={{width: '100%'}}
          source={require('../../assets/images/png/lineHorizontal.png')}
          alt={'linehorizontal'}
        />
        <View width={windowWidth}>{children}</View>
      </Box>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          position: 'relative',
          maxHeight: 290,
        }}>
        <Image
          style={{width: '100%', height: '100%', position: 'absolute'}}
          source={require('../../assets/images/png/clound-sign.png')}
          alt={'clound white'}
        />
        <View mb={10} alignItems="center">
          <Text style={styles.founder}>Founder {wordApp.founder}</Text>
          <Text style={styles.description} textAlign={'center'}>
            {wordApp.description}
          </Text>
        </View>
      </View>
    </>
  );
}
export default OnBoardFrame;
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
  nameApp: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 38,
    color: theme.colors.white,
  },
  founder: {
    ...theme.fontSize.h2,
    fontWeight: 'bold',
    color: theme.colors.blueText,
  },
  description: {
    ...theme.fontSize.h4,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: theme.colors.blueText,
    maxWidth: 350,
    marginTop: 10,
  },
});
