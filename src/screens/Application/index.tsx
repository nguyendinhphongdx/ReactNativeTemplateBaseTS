import {FlatList, Text} from 'native-base';
import ViewBackGround from '../../components/viewbackground';
import React from 'react';
import {theme} from '../../theme/theme';
import HeaderBack from '../../components/headerback';
import { CardContainer, CardGroupBar, CardPieChart } from '../../components/cards';
import { NameScreen } from '../../config';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import wordApp from '../../utils/word';
import CardBar from '../../components/cards/cardBar';
import { devicesStatus, strangProcessDetected } from './data';
const groupsHost = [
  {
    title: wordApp.disconnectWarning,
    component: <CardGroupBar />,
  },
  {
    title: wordApp.attackServiceWarning,
    component: <CardGroupBar />,
  },
  {
    title: wordApp.speedResponse,
    component: <CardBar dataSource={strangProcessDetected} />,
  },
];
function ApplicationScreen(props: any) {
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
export default ApplicationScreen;
