import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS, FONTS, icons, SIZES} from '../../constant';
export function HeaderBarLeft(props: {
  color?: string;
  navigation?: any;
  title?: string;
}) {
  const {color, navigation, title} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection:'row'}}>
        <FontAwesome5Icon
          name="bars"
          size={25}
          onPress={() => navigation.openDrawer()}></FontAwesome5Icon>
        <Text style={{...FONTS.h2,marginLeft:SIZES.base}}>{title || 'Title'}</Text>
      </View>
      <FontAwesome5Icon name="star" size={25}></FontAwesome5Icon>
    </View>
  );
}
export function HeaderBackLeft(props: {color?: string}) {
  const {color = 'transparent'} = props;
  const navigation = useNavigation();
  return (
    <FontAwesome5Icon.Button
      name="angle-left"
      size={25}
      style={{paddingLeft: 10}}
      onPress={() =>
        navigation.canGoBack() ? navigation.goBack() : null
      }></FontAwesome5Icon.Button>
  );
}
export function HeaderScreen(props: {title?: string; goback?: boolean}) {
  const {title = 'This is Title', goback = true} = props;
  const navigation = useNavigation();
  return (
    <View style={{position: 'relative'}}>
      <View style={{position: 'absolute'}}>
        {goback && (
          <FontAwesome5Icon.Button
            name="angle-left"
            size={25}
            backgroundColor={'transparent'}
            onPress={() => navigation.goBack()}></FontAwesome5Icon.Button>
        )}
      </View>
      <Text>{title}</Text>
    </View>
  );
}
