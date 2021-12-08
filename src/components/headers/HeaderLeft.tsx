import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export function HeaderBarLeft(props: {color: string; navigation: any}) {
  const {color, navigation} = props;
  return (
    <FontAwesome5Icon.Button
      name="bars"
      size={25}
      backgroundColor={color}
      onPress={() => navigation.openDrawer()}></FontAwesome5Icon.Button>
  );
}
export function HeaderBackLeft(props: {color?: string}) {
  const {color = 'transparent'} = props;
  const navigation = useNavigation();
  return (
    <FontAwesome5Icon.Button
      name="angle-left"
      size={25}
      style={{paddingLeft:10}}
      onPress={() => navigation.canGoBack()?navigation.goBack():null}></FontAwesome5Icon.Button>
  );
}
export function HeaderScreen(props: {title?: string; goback?: boolean}) {
  const {title = 'This is Title', goback = true} = props;
  const navigation = useNavigation();
  return (
    <View style={{position:'relative'}}>
      <View style={{position:'absolute'}}>
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
