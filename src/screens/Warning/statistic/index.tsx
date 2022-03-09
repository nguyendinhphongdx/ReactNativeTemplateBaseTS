import {
  HStack,
  Input,
  Pressable,
  ScrollView, Text, useDisclose,
  View
} from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import ModalSheetComponent from '../../../components/actionsheet';
import {
  CardContainer,
  CardGroupBar,
  CardGroupPieChart
} from '../../../components/cards';
import CardBar from '../../../components/cards/cardBar';
import Dates from '../../../components/datepicker/dateRangePicker';
import { ToolBar } from '../../../components/tools/ToolBar';
import ViewBackTabview from '../../../components/viewbackground/viewbackTabview';
import { theme } from '../../../theme/theme';
import wordApp from '../../../utils/word';
type searchType = {
  name: string | undefined;
  sourceIp: string | undefined;
  destinationIp: string | undefined;
}
function StatisticScreen() {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [state, setState] = React.useState({
    refreshing: false,
    date: undefined,
    focus: 'startDate',
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
  });
  const waited = async () => {
    setState({...state, refreshing: true});
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    }).then(d => {
      setState({...state, refreshing: false});
    });
  };
  const onDatesChange = ({startDate, endDate, focusedInput}: any) => {
    setState({...state, startDate, endDate, focus: focusedInput});
  };
  const handleFilter = () => {
    onClose();
  };
  return (
    <ViewBackTabview safeArea={false}>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ToolBar
          filterClick={() => onOpen()}
          onRefresh={waited}
          loading={state.refreshing}
          date={state}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardContainer
            title={wordApp.warningLevel}
            styleContainer={styles.cardSpace}>
            <CardGroupPieChart />
          </CardContainer>
          <CardContainer
            title={wordApp.correctationLevel}
            styleContainer={styles.cardSpace}>
            <CardGroupBar />
          </CardContainer>
          <CardContainer
            title={wordApp.warningStatus}
            styleContainer={styles.cardSpace}>
            <CardBar />
          </CardContainer>
        </ScrollView>
      </View>
      <ModalSheetComponent
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onFilter={handleFilter}>
        <View>
        <Dates
              range={true}
              onDatesChange={onDatesChange}
              isDateBlocked={() => false}
              startDate={state.startDate}
              endDate={state.endDate}
              focusedInput={state.focus}
            />
        </View>
      </ModalSheetComponent>
    </ViewBackTabview>
  );
}
export default React.memo(StatisticScreen);
const styles = StyleSheet.create({
  cardSpace: {
    marginVertical: 5,
    borderWidth: 0,
  },
  ipAdress: {
    backgroundColor: theme.colors.lightBlue800,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  lable: {
    minWidth: 80,
  },
  rowInput: {
    paddingHorizontal: 15,
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  text: {color: theme.colors.text, ...theme.fontSize.h3},
});
