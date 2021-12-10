import {NavigationProp} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderBarLeft, HeaderScreen} from '../../components/headers/HeaderLeft';
import TabViewComponent from '../../components/tab';
import FeatureScreen from './feature';
import HistoryScreen from './history';
function PersonLiveScreen({
  navigation,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}) {
    const router = [
        {name:"Lịch chưa trực",component:FeatureScreen},
        {name:"Lịch sử trực",component:HistoryScreen}
    ]
  return (
    <View style={styles.container}>
      <HeaderScreen title={'Lịch trực cá nhân'} goback={true} />
      <TabViewComponent router={router}/>
    </View>
  );
}

export default PersonLiveScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
