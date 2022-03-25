import { Box, Image, Text, View, VStack } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import CardFrame from '../../components/cards/cardFrame';
import ViewBackGround from '../../components/viewbackground';
import { theme } from '../../theme/theme';
import { windowWidth } from '../../utils/Dimensions';
import wordApp from '../../utils/word';
function LocationScreen() {
  return (
    <ViewBackGround>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 20,
        }}>
        <Image
          source={require('../../assets/icons/png/protection.png')}
          alt="protection"
          style={{width: 120, height: 120}}
        />
        <Text style={styles.nameApp}>{wordApp.whereLocation.toUpperCase()}</Text>
      </View>
      <CardFrame>
        <Box
          w={windowWidth}
          alignContent="center"
          justifyContent="center"
          style={{paddingHorizontal: 10}}>
          <VStack space={5} mt={10}></VStack>
        </Box>
      </CardFrame>
    </ViewBackGround>
  );
}
export default LocationScreen;
const styles = StyleSheet.create({
  nameApp: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 38,
    color: theme.colors.white,
  },
});
