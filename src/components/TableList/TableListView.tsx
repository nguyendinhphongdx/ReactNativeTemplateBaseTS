import {
  Box,
  FlatList,
  HStack,
  Icon,
  Pressable,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {SlideInLeft} from 'react-native-reanimated';
import {AntDesign, MaterialCommunityIcons} from '../../assets/icons';
import NewsModal from '../../model/news';
import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';

interface PropsContentTable {
  listData: Array<any>;
}
function TableListView() {
  const [listData, setListData] = useState(NewsModal);
  return (
    <View flex={1}>
      <ContentTableListView listData={listData} />
    </View>
  );
}

const ContentTableListView = React.memo(function ({
  listData,
}: PropsContentTable) {
  const RenderItem = ({item, index}: any) => {
    const [more, setMore] = useState(false);
    return (
      <Animated.View entering={SlideInLeft.delay(index * 8)} key={index}>
        <Box key={index} pl="1" pr="1" py="1">
          <Pressable onPress={() => setMore(!more)} _dark={{}}>
            <HStack
              flex={1}
              style={{
                backgroundColor: theme.colors.card,
                alignItems: 'center',
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <Box p={4} borderRightWidth={1}>
                <Text
                  style={{
                    color: theme.colors.text,
                    fontWeight: 'bold',
                    paddingHorizontal: 10,
                    ...theme.fontSize.h1,
                  }}>
                  {item.stage ? item.stage.toUpperCase() : '--'}
                </Text>
              </Box>
              <VStack flex={1} justifyContent="center"  >
                <HStack
                  flex={1}
                  borderBottomWidth={1}
                  alignItems="center"
                  justifyContent={'center'}>
                  <Text
                    numberOfLines={2}
                    style={{
                      color: theme.colors.text,
                      ...theme.fontSize.h3,
                      fontWeight: 'bold',
                    }}>
                    {new Date(item.date).toLocaleDateString() || '--'}
                  </Text>
                </HStack>
                <HStack alignItems="center" flex={1}>
                  <View borderRightWidth={1} >
                    <Text
                      numberOfLines={2}
                      style={{
                        color: theme.colors.text,
                        paddingHorizontal: 15,
                        ...theme.fontSize.h3,
                        fontWeight: 'bold',
                      }}>
                      {item?.session || '--'}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: theme.colors.text,
                      textAlign: 'center',
                      flex:1,
                      ...theme.fontSize.h3,
                      fontWeight: 'bold',
                    }}>
                    {item?.price || '--'}  VND
                  </Text>
                </HStack>
              </VStack>
              <View
                bg="blue.800"
                flex={1}
                height="100%"
                justifyContent="center"
                maxWidth={90}>
                <Text
                  style={{
                    alignContent: 'center',
                    alignSelf: 'center',
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    color: theme.colors.white,
                    paddingHorizontal: 10,
                    fontWeight: 'bold',
                    ...theme.fontSize.h2,
                  }}>
                  {wordApp.get.toUpperCase()}
                </Text>
              </View>
            </HStack>
          </Pressable>
        </Box>
      </Animated.View>
    );
  };
  return (
    <View flex={1}>
      <FlatList
        data={listData}
        renderItem={props => <RenderItem {...props} />}
      />
    </View>
  );
});
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
