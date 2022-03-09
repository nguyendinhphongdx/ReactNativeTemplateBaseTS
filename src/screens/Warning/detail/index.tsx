import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Button,
  FlatList,
  Flex,
  HStack,
  Icon,
  NativeBaseProvider,
  PresenceTransition,
  Pressable,
  Text,
  View,
} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ToolBar} from '../../../components/tools/ToolBar';
import ViewBackGround from '../../../components/viewbackground';
import { NameScreen } from '../../../config';
import Helpers from '../../../helpers/helpers';
import {listWarnings, TypesWarning} from '../../../model/data';
import {theme} from '../../../theme/theme';
import wordApp from '../../../utils/word';
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};
function Container() {
  return (
    <NativeBaseProvider config={config}>
      <DetailScreen />
    </NativeBaseProvider>
  );
}
function DetailScreen() {
  const [state, setState] = React.useState({
    refreshing: false,
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

  return (
    <ViewBackGround safeArea={false}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <ToolBar loading={state.refreshing} onRefresh={waited} />
          <FlatView listWarnings={listWarnings} />
        </View>
      </View>
    </ViewBackGround>
  );
}
const FlatView = React.memo(({listWarnings}: any) => {
  console.log('reRender');

  const memorized = React.useCallback(
    ({item, index}) => <RenderItem item={item} index={index} />,
    [],
  );
  const keyMemoried = React.useCallback(item => `key-${item.id}`, []);
  return (
    <View style={{flex: 1, marginVertical: 10}}>
      <FlatList
        data={listWarnings}
        keyExtractor={keyMemoried}
        renderItem={memorized}
      />
    </View>
  );
});
const RenderItem = React.memo(({item, index}: {item:TypesWarning,index:number}) => {
  const color = Helpers.divideLevelWarning(item.number);
  const navigation = useNavigation();
  const [state, setState] = React.useState({
    priority: item.priority,
    otherF: false,
  });
  const handleGoDetail = ()=>{
    navigation.navigate(NameScreen.InfoWarningScreen,{item: item});
  }
  return (
    <Pressable onLongPress={() => setState({...state, otherF: !state.otherF})} onPress={handleGoDetail}>
      <Flex flexDirection={'row'} flex={1} key={item.id}>
        <View
          style={{
            width: 6,
            height: '60%',
            backgroundColor: color || 'red',
            borderRadius: 5,
            alignSelf: 'center',
          }}
        />
        <Box
          pt="3"
          pl="3"
          pr="3"
          _text={{
            fontSize: 'md',
            fontWeight: 'medium',
            color: 'warmGray.50',
            textAlign: 'center',
          }}
          style={{
            borderBottomWidth: 2,
            borderColor: theme.colors.border,
            flex: 1,
          }}>
          <Flex flexDirection="row" style={{justifyContent: 'space-between'}}>
            <Text
              style={{
                ...theme.fontSize.h3,
                color: color,
                fontWeight: 'bold',
              }}>
              {item.alert}
            </Text>
            <Icon
              as={<AntDesign name={state.priority ? 'star' : 'staro'} />}
              size={6}
              color={state.priority ? 'amber.400' : 'muted.400'}
              onPress={() => setState({...state, priority: !state.priority})}
            />
          </Flex>
          <Text
            style={{
              ...theme.fontSize.h4,
              color: theme.colors.text,
              paddingVertical: 3,
            }}>
            {wordApp.number}:{item.number}
          </Text>
          <Flex flexDirection="row" style={{justifyContent: 'space-between'}}>
            <Text style={{...theme.fontSize.h4, color: theme.colors.text}}>
              {wordApp.status}:{item.status}
            </Text>
            <Text style={{...theme.fontSize.h4, color: theme.colors.text}}>
              {new Date(item.time).toLocaleDateString()}
            </Text>
          </Flex>
          {state.otherF ? (
            <PresenceTransition
              visible={state.otherF}
              initial={{
                opacity: 0,
                translateX: 100,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 250,
                },
              }}>
              <HStack
                space={'1'}
                flexDirection="row"
                style={{justifyContent: 'space-between', paddingVertical: 3}}>
                <Button>{wordApp.wait}</Button>
                <Button variant={'outline'} size="sm">
                  {wordApp.doing}
                </Button>
                <Button variant={'subtle'}>{wordApp.verified}</Button>
              </HStack>
            </PresenceTransition>
          ) : (
            <View style={{paddingBottom: 5}} />
          )}
          {/* <PresenceTransition
            visible={state.otherF}
            initial={{
              opacity: 0,
              translateX:100,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 250,
              },
            }}>
            <HStack
              space={'1'}
              flexDirection="row"
              style={{justifyContent: 'space-between', paddingVertical: 3}}>
              <Button>{wordApp.wait}</Button>
              <Button variant={'outline'} size="sm">
                {wordApp.doing}
              </Button>
              <Button variant={'subtle'}>{wordApp.verified}</Button>
            </HStack>
          </PresenceTransition> */}
        </Box>
      </Flex>
    </Pressable>
  );
});
export default React.memo(Container);
