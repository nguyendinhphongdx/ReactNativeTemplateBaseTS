import {useNavigation} from '@react-navigation/native';
import {
  Actionsheet,
  Box,
  HStack,
  Icon,
  Input,
  Pressable,
  Text,
  useDisclose,
  View,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {SlideInLeft} from 'react-native-reanimated';
import {AntDesign, MaterialCommunityIcons} from '../../assets/icons';
import ModalSheetComponent from '../../components/actionsheet';
import {tableListModel, tableListStatus} from '../../model/tableListView';
import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';
import Dates from '../datepicker/dateRangePicker';
interface PropsHeader {
  onOpen: () => void;
  date: {
    startDate: Date;
    endDate: Date;
  };
}
interface PropsContentTable {
  listData: Array<any>;
}
type searchType = {
  name: string | undefined;
  sourceIp: string | undefined;
  destinationIp: string | undefined;
}
function TableListView() {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [listData, setListData] = useState(tableListModel);
  const onDatesChange = ({startDate, endDate, focusedInput}: any) => {
    setState({...state, startDate, endDate, focus: focusedInput});
  };
  const [showDate, setShowDate] = useState(false);
  const [state, setState] = useState<any>({
    date: undefined,
    focus: 'startDate',
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
  });
  const [search,setSearch] = useState<searchType>({
    name: '',
    sourceIp: '', 
    destinationIp: ''
  })
  const handleInputName = (name: string) =>{
    setSearch({...search,name});
  }
  const handleInputSource = (sourceIp: string) =>{
    setSearch({...search,sourceIp});
  }
  const handleInputDestination = (destinationIp: string) =>{
    setSearch({...search,destinationIp});
  }
  const handleFilter = () => {
    console.log(search);
    const newList = tableListModel.filter(data =>{
      if(search.name && search.name !== "" && !data.name.toLowerCase().includes(search.name.toLowerCase())) return false;
      if(search.sourceIp && search.sourceIp !== "" && !data.source.ip.toLowerCase().includes(search.sourceIp.toLowerCase())) return false;
      if(search.destinationIp && search.destinationIp !== "" && !data.destination.ip.toLowerCase().includes(search.destinationIp.toLowerCase())) return false;
      else return true;
     
    });
    setListData(newList);
    onClose();
  };
  return (
    <View flex={1}>
      <HeaderTableList onOpen={onOpen} date={state} />
      <ContentTableListView listData={listData} />
      <ModalSheetComponent
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onFilter={handleFilter}>
        <View>
          <HStack style={styles.rowInput}>
            <Text style={styles.lable}>{wordApp.name}:</Text>
            <Input
              variant="underlined"
              placeholder={wordApp.enterName}
              flex={1}
              marginLeft={5}
              onChangeText={handleInputName}
              value={search.name}
            />
          </HStack>
          <HStack style={styles.rowInput}>
            <Text style={styles.lable}>{wordApp.sourceIp}:</Text>
            <Input
              variant="underlined"
              placeholder={wordApp.enterSource}
              flex={1}
              marginLeft={5}
              onChangeText={handleInputSource}
              value={search.sourceIp}
            />
          </HStack>
          <HStack style={styles.rowInput}>
            <Text style={styles.lable}>{wordApp.destinationIp}:</Text>
            <Input
              variant="underlined"
              placeholder={wordApp.enterDestination}
              flex={1}
              marginLeft={5}
              onChangeText={handleInputDestination}
              value={search.destinationIp}
            />
          </HStack>
          <HStack style={styles.rowInput}>
            <Text style={styles.lable}>{wordApp.date}:</Text>
            <Pressable onPress={() => setShowDate(!showDate)}>
              <Text flex={1}>
                {`${new Date(
                  state.startDate,
                ).toLocaleDateString()} - ${new Date(
                  state.endDate || state.startDate,
                ).toLocaleDateString()}`}
              </Text>
            </Pressable>
          </HStack>
          {showDate && (
            <Dates
              range={true}
              onDatesChange={onDatesChange}
              isDateBlocked={() => false}
              startDate={state.startDate}
              endDate={state.endDate}
              focusedInput={state.focus}
            />
          )}
        </View>
      </ModalSheetComponent>
    </View>
  );
}

const HeaderTableList = (props: PropsHeader) => {
  const {date} = props;
  return (
    <HStack
      justifyContent={'space-between'}
      style={{marginHorizontal: 10}}
      alignItems="center">
      <Text style={styles.text}>{wordApp.list}</Text>
      <Pressable onPress={props.onOpen}>
        <Text style={styles.text}>
          {`${new Date(date.startDate).toLocaleDateString()} - ${new Date(
            date.endDate || date.startDate,
          ).toLocaleDateString()}`}
        </Text>
      </Pressable>
      <Pressable padding={2} paddingRight={7} onPress={props.onOpen}>
        <Icon
          as={<MaterialCommunityIcons name="filter-menu" />}
          size={6}
          color={theme.colors.blue}
        />
      </Pressable>
    </HStack>
  );
};


const ContentTableListView = React.memo(function ({
  listData,
}: PropsContentTable) {
  const RenderItem = ({item, index}: any) => {
    const [more, setMore] = useState(false);
    return (
      <Animated.View entering={SlideInLeft.delay(index * 8)} key={index}>
        <Box
          key={index}
          borderBottomWidth={1}
          borderColor={theme.colors.border}
          pl="4"
          pr="5"
          py="2">
          <Pressable onPress={() => setMore(!more)} _dark={{}}>
            <HStack alignItems="center" space={3}>
              <Box
                borderRadius={50}
                backgroundColor={item.color || theme.colors.hight}
                w={50}
                h={50}
                justifyContent="center"
                alignItems="center">
                <Text
                  style={{
                    color: theme.colors.text,
                    fontWeight: 'bold',
                    ...theme.fontSize.h3,
                  }}>
                  {item.name ? item.name[0].toUpperCase() : '--'}
                </Text>
              </Box>
              <VStack flex={1}>
                <HStack justifyContent="space-evenly" alignItems="center">
                  <HStack alignItems="center">
                    <Icon
                      as={
                        <MaterialCommunityIcons name="access-point-network" />
                      }
                      size={5}
                      color="lime.300"
                    />
                    <Box style={styles.ipAdress}>
                      <Text color={theme.colors.text} numberOfLines={2} bold>
                        {item?.source?.ip || '--'}
                      </Text>
                    </Box>
                  </HStack>
                  <Icon
                    as={<AntDesign name="arrowright" />}
                    size={5}
                    ml="2"
                    color="muted.100"
                  />
                  <HStack alignItems="center">
                    <Icon
                      as={
                        <MaterialCommunityIcons name="access-point-network" />
                      }
                      size={5}
                      color="lime.300"
                    />
                    <Box style={styles.ipAdress}>
                      <Text color={theme.colors.text} numberOfLines={2} bold>
                        {item?.destination?.ip || '--'}
                      </Text>
                    </Box>
                  </HStack>
                </HStack>
                <RenderItemText label="Alert" content={item.name} />
                <RenderItemText
                  label="Time"
                  content={new Date(
                    item.timeStamp || new Date().getTime(),
                  ).toLocaleDateString()}
                />
                {more && (
                  <Box key={`item${index}`}>
                    <RenderItemText
                      label="Port"
                      content={item?.source?.port || '--'}
                      content2={item?.destination?.port}
                    />
                    <RenderItemText
                      label="City"
                      content={item.cityName || '--'}
                    />
                    <RenderItemText
                      label="Country Code"
                      content={item.countryCode || '--'}
                    />
                    <RenderItemText
                      label="EventApp"
                      content={item.eventAppId || '--'}
                    />
                    <RenderItemText
                      label="Module"
                      content={item.eventModule || '--'}
                    />
                    <RenderItemText
                      label="Transport"
                      content={item.networkTransport || '--'}
                    />
                  </Box>
                )}
              </VStack>
            </HStack>
          </Pressable>
        </Box>
      </Animated.View>
    );
  };
  return (
    <View>
      {listData.map((item, index) => {
        return <RenderItem item={item} index={index} />;
      })}
    </View>
  );
});
const RenderItemText = ({label, content, content2}: any) => {
  return (
    <View style={styles.row}>
      <Text
        color={theme.colors.text}
        numberOfLines={2}
        _dark={{
          color: 'warmGray.50',
        }}
        bold>
        {label || '--'} :
      </Text>
      <HStack>
        <Text
          color={theme.colors.text}
          numberOfLines={2}
          _dark={{
            color: 'warmGray.50',
          }}
          bold>
          {content || '--'}
        </Text>
        {content2 && (
          <HStack>
            <Icon
              as={<AntDesign name="arrowright" />}
              size={5}
              ml="2"
              color="muted.100"
            />
            <Text
              color={theme.colors.text}
              numberOfLines={2}
              ml={2}
              _dark={{
                color: 'warmGray.50',
              }}
              bold>
              {content2 || '--'}
            </Text>
          </HStack>
        )}
      </HStack>
    </View>
  );
};
export default React.memo(TableListView);

const styles = StyleSheet.create({
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
