import {
  Box, FlatList,
  Flex, Icon, Pressable,
  Text,
  View
} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderMenu from '../../components/headermenu';
import { ToolBar } from '../../components/tools/ToolBar';
import ViewBackGround from '../../components/viewbackground';
import { NameScreen } from '../../config';
import Helpers from '../../helpers/helpers';
import { listWarnings } from '../../model/data';
import { theme } from '../../theme/theme';
import wordApp from '../../utils/word';
function ResponseScreen() {
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
          <HeaderMenu title={NameScreen.DrawerScreen.ResponseScreen} />
          <ToolBar loading={state.refreshing} onRefresh={waited} />
          <FlatView listWarnings={listWarnings} />
        </View>
      </View>
    </ViewBackGround>
  );
}
const FlatView = React.memo(({listWarnings}: any) => {
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
const RenderItem = React.memo(({item, index}: any) => {
  const color = Helpers.divideLevelWarning(item.number);
  return (
    <Pressable>
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
                color: theme.colors.text,
                fontWeight: 'bold',
              }}>
              {item.alert}
            </Text>
            <Icon
              as={<MaterialCommunityIcons name={'shield-alert'} />}
              size={6}
              color={'danger.600'}
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
          <View style={{paddingBottom: 5}} />
        </Box>
      </Flex>
    </Pressable>
  );
});
export default React.memo(ResponseScreen);
