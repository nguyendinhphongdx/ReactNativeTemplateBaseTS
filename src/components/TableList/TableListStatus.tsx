import {useNavigation} from '@react-navigation/native';
import {
  Box,
  CheckIcon,
  HStack,
  Icon,
  Input,
  Pressable,
  Select,
  Text,
  useDisclose,
  View,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {SlideInLeft} from 'react-native-reanimated';
import {AntDesign, MaterialCommunityIcons} from '../../assets/icons';
import {tableListStatus} from '../../model/tableListView';
import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';
import ModalSheetComponent from '../actionsheet';
interface PropsContentTable {
  listData: Array<any>;
}
type searchType = {
  name: string | undefined;
  ipAddress: string | undefined;
  status: 'connect' | 'disconnect';
};
interface PropsHeader {
  onOpen: () => void;
}
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
const HeaderTableList = (props: PropsHeader) => {
  return (
    <HStack
      justifyContent={'space-between'}
      style={{marginHorizontal: 10}}
      alignItems="center">
      <Text style={styles.text}>{wordApp.list}</Text>
      <Pressable padding={2}  onPress={props.onOpen}>
        <Icon
          as={<MaterialCommunityIcons name="filter-menu" />}
          size={6}
          color={theme.colors.blue}
        />
      </Pressable>
    </HStack>
  );
};
function TableListStatus() {
  const [listData, setListData] = useState(tableListStatus);
  const {isOpen, onOpen, onClose} = useDisclose();
  const [search, setSearch] = useState<searchType>({
    name: '',
    ipAddress: '',
    status: 'connect',
  });
  const handleInputName = (name: string) => {
    setSearch({...search, name});
  };
  const handleInputIpAddress = (ipAddress: string) => {
    setSearch({...search, ipAddress});
  };
  const handleInputStatus = (status: string) => {
    setSearch({...search, status});
  };
  const handleFilter = () => {
    console.log(search);
    const newList = tableListStatus.filter(data => {
      if (
        search.name &&
        search.name !== '' &&
        !data.name.toLowerCase().includes(search.name.toLowerCase())
      )
        return false;
      if (
        search.ipAddress &&
        search.ipAddress !== '' &&
        !data.ip.toLowerCase().includes(search.ipAddress.toLowerCase())
      )
        return false;
      if (
        search.status &&
        (search.status === 'connect' || search.status === 'disconnect') &&
        data.status.toLowerCase() !== search.status.toLowerCase()
      )
        return false;
      else return true;
    });
    setListData(newList);
    onClose();
  };
  return (
    <View flex={1}>
      <HeaderTableList onOpen={onOpen} />
      <TableListContentStatus listData={listData} />
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
              onChangeText={handleInputIpAddress}
              value={search.ipAddress}
            />
          </HStack>
          <HStack style={styles.rowInput}>
            <Text style={styles.lable}>Status:</Text>
            <Select
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              flex={1}
              onValueChange={handleInputStatus}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="All" value="all" />
              <Select.Item label="Connect" value="connect" />
              <Select.Item label="Disconnect" value="disconnect" />
            </Select>
          </HStack>
        </View>
      </ModalSheetComponent>
    </View>
  );
}
const TableListContentStatus = React.memo(function (props: PropsContentTable) {
  const RenderItem = ({item, index}: any) => {
    return (
      <Animated.View entering={SlideInLeft.delay(index * 8)} key={index}>
        <Box
          borderBottomWidth={1}
          borderColor={theme.colors.border}
          pl="4"
          pr="5"
          py="2">
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
              <HStack justifyContent="flex-start" alignItems="center">
                <Icon
                  as={<MaterialCommunityIcons name="access-point-network" />}
                  size={5}
                  mr="2"
                  color="lime.300"
                />
                <Box style={styles.ipAdress}>
                  <Text color={theme.colors.text} numberOfLines={2} bold>
                    {item?.ip || '--'}
                  </Text>
                </Box>
              </HStack>
              <RenderItemText label="Name" content={item.name} />
              <RenderItemText label="Status" content={item.status} />
            </VStack>
          </HStack>
        </Box>
      </Animated.View>
    );
  };
  return (
    <View>
      {props.listData.map((item, index) => {
        return <RenderItem item={item} index={index} key={index} />;
      })}
    </View>
  );
});
export default React.memo(TableListStatus);
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
