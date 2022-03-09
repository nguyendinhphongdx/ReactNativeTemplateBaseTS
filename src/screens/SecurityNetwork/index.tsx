import {
  FlatList,
  HStack,
  Icon,
  Input,
  Pressable,
  ScrollView,
  Switch,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useEffect} from 'react';
import {LogBox, StyleSheet} from 'react-native';
import HeaderBack from '../../components/headerback';
import ViewBackGround from '../../components/viewbackground';
import ListFunction from './ListFunction';
import {MaterialIcons, AntDesign, Ionicons, Entypo} from '../../assets/icons';
import FabFunction from './FabFunction';
import wordApp from '../../utils/word';
import {theme} from '../../theme/theme';
import {listVPNModel} from '../../model/vpn';

function SecurityNetWorkScreen() {
  return <SecurityNetWork />;
}
function SecurityNetWork() {
  const RenderItem = ({item, index}: any) => {
    return (
      <HStack key={index} alignItems="center" space={3} marginBottom={3}>
        <Switch />
        <VStack space={1} flex={1}>
          <Text style={styles.vpn}>OpenVPN Profile</Text>
          <Text numberOfLines={2} style={styles.name}>
            {item.domain} {item.name} - [{item.type}]
          </Text>
        </VStack>
        <Pressable alignSelf={'flex-end'} padding={2} _pressed={{opacity: 0.7}}>
          <Icon
            as={<AntDesign name="edit" />}
            size={7}
            _dark={{
              color: 'warmGray.50',
            }}
            color="warmGray.50"
          />
        </Pressable>
      </HStack>
    );
  };
  const RightElement = () => {
    return (
      <Pressable>
        <Icon
          as={<Entypo name={'check'} />}
          zIndex={200}
          size={'md'}
          ml="2"
          color="muted.100"
        />
      </Pressable>
    );
  };
  return (
    <ViewBackGround>
      <HeaderBack RightElement={<RightElement />} />
      <View p={2} flex={1}>
        <Text style={styles.statusText}>
          {wordApp.disconnected.toUpperCase()}
        </Text>
        <VStack space={4}>
          <HStack alignItems={'center'}>
            <Text style={[styles.name, {width: 80}]}>Domain:</Text>
            <Input
              variant={'underlined'}
              flex={1}
              fontSize={14}
              color={theme.colors.text}
              placeholder={'Enter domain'}
            />
          </HStack>
          <HStack alignItems={'center'}>
            <Text style={[styles.name, {width: 80}]}>Port:</Text>
            <Input
              variant={'underlined'}
              flex={1}
              placeholder={'Enter port'}
              fontSize={14}
              color={theme.colors.text}
              keyboardType={'number-pad'}
            />
          </HStack>
        </VStack>
        <Text style={styles.name} mt={5}>
          Danh sach VPN
        </Text>
        <View flex={1}>
          <FlatList
            data={listVPNModel}
            keyExtractor={item => item.id + ''}
            renderItem={RenderItem}
            contentContainerStyle={{
              paddingHorizontal: 10,
            }}
          />
        </View>
      </View>
      <FabFunction />
    </ViewBackGround>
  );
}
export default SecurityNetWorkScreen;
const styles = StyleSheet.create({
  statusText: {
    color: theme.colors.coolGray,
    fontWeight: 'bold',
    marginVertical: 10,
    ...theme.fontSize.body3,
  },
  name: {
    color: theme.colors.text,
    ...theme.fontSize.h3,
  },
  vpn: {
    color: theme.colors.blue,
    ...theme.fontSize.body4,
  },
  input: {
    color: theme.colors.text,
    ...theme.fontSize.body2,
  },
});
