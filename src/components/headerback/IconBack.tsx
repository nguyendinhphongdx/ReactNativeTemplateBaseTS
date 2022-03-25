import {useNavigation} from '@react-navigation/native';
import {Flex, HStack, Icon, Pressable, Text, View} from 'native-base';
import React from 'react';
import {AntDesign} from '../../assets/icons';
import { theme } from '../../theme/theme';
import wordApp from '../../utils/word';
interface PropsTypes {
  title?: string;
  RightElement?: React.ReactNode;
  onPress?: any;
}
function IconBack(props: PropsTypes) {
  const navigation = useNavigation();
  const handleGoBack = () => {
    console.log('back');
    props.onPress ? props.onPress() : navigation.goBack();
  };
  return (
    <Flex flexDirection="row" style={{alignItems: 'center'}}>
      <Pressable  onPress={handleGoBack} _pressed={{opacity:.7}}>
      <HStack justifyContent="center" alignItems="center" alignContent={'center'}>
        <Icon
          as={<AntDesign name={'doubleleft'} />}
          zIndex={200}
          size={5}
          mr={3}
          ml={3}
          color="secondary.50"
        />
        <Text style={{fontSize:16, color:theme.colors.white}}>{wordApp.back}</Text>
      </HStack>
      </Pressable>
    </Flex>
  );
}
export default IconBack;
