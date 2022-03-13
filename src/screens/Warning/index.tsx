import React from 'react';
import {View, Text} from 'react-native';
import HeaderMenu from '../../components/headermenu';
import ViewBackGround from '../../components/viewbackground';
import { NameScreen } from '../../config';

const Container = () => {
  return <WarningScreen />;
};
const WarningScreen = () => {
  return (
    <ViewBackGround>
      <View style={{flex: 1}}>
        <HeaderMenu title={NameScreen.DrawerScreen.WarningScreen} />
      </View>
    </ViewBackGround>
  );
};

export default Container;
