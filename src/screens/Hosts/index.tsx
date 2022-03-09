import {FlatList, Text} from 'native-base';
import React from 'react';
import ViewBackGround from '../../components/viewbackground';
import HeaderBack from '../../components/headerback';
import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';
import {
  CardContainer,
  CardGroupBar,
  CardLineChart,
  CardPieChart,
} from '../../components/cards';
import CardBar from '../../components/cards/cardBar';
import {devicesStatus, strangProcessDetected, violateByTime} from './data';
import {StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NameScreen } from '../../config';
const groupsHost = [
  {
    title: wordApp.violatePolicy,
    component: <CardGroupBar />,
  },
  {
    title: wordApp.scanPort,
    component: <CardPieChart dataSource={devicesStatus} />,
  },
  {
    title: wordApp.strangProcessDetected,
    component: <CardBar dataSource={strangProcessDetected} />,
  },
  {
    title: wordApp.serverStatus,
    component: <CardPieChart dataSource={devicesStatus} />,
  },
];
function HostingScreen(props: any) {
  const item = props.route?.params?.item;
  const navigation = useNavigation();
  const handleNavigate = (item: any)=>{
    navigation.navigate(NameScreen.DashboardHightScreen, {item});
  }
  return (
    <ViewBackGround>
      <HeaderBack title={item.title || '--'} />
      <FlatList
        data={groupsHost}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => {
          return (
            <CardContainer
              onPress={() => handleNavigate(item)}
              styleContainer={styles.cardSpace}
              key={index}
              title={item.title}>
              {item.component}
            </CardContainer>
          );
        }}
      />
    </ViewBackGround>
  );
}
const styles = StyleSheet.create({
  cardSpace: {
    marginVertical: 5,
    borderWidth: 0,
    paddingHorizontal: 10,
  },
});
export default HostingScreen;
