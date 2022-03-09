import React from 'react';
import {Center, Flex, Icon, Stack, Text} from 'native-base';
import {theme} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
interface PropsTypes {
  title?: string;
  IconRight?: any;
  IconLeft?: any;
}
function HeaderMenu(props: PropsTypes) {
  const navigation = useNavigation();
  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <>
      <Stack
        direction="row"
        mb="0.5"
        mt="0.5"
        justifyContent={'space-between'}
        style={{paddingHorizontal: 10, alignItems: 'center'}}>
        <Flex flexDirection="row" flex={1}>
          <Flex flex={1} style={{paddingLeft: 5}}>
            <Icon
              as={<Ionicons
                name={'menu'} />}
              size={'7'}
              color="muted.100"
              onPress={handleOpenDrawer}
            />
          </Flex>
          <Flex
            flex={1}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                ...theme.fontSize.h2,
                color: theme.colors.text,
                fontWeight: '600',
              }}>
              {props?.title}
            </Text>
          </Flex>
          <Flex
            flex={1}
            style={{
              alignItems: 'flex-end',
              paddingRight: 5,
            }}>
            {props.IconLeft && (
              <Icon
                as={<Ionicons name={'menu'} />}
                size={'8'}
                color="muted.100"
                onPress={handleOpenDrawer}
              />
            )}
          </Flex>
        </Flex>
      </Stack>
    </>
  );
}
export default HeaderMenu;
