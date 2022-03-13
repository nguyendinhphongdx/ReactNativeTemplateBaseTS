import {useNavigation} from '@react-navigation/native';
import {Flex, HStack, Icon, Text, View} from 'native-base';
import React from 'react';
import {AntDesign} from '../../assets/icons';
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
      <HStack justifyContent="center" alignItems="center" alignContent={'center'}>
        <Icon
          as={<AntDesign name={'doubleleft'} />}
          zIndex={200}
          size={5}
          mr={3}
          ml={3}
          color="primary.900"
          onPress={handleGoBack}
        />
        <Text>{wordApp.back}</Text>
      </HStack>
    </Flex>
  );
}
export default IconBack;
