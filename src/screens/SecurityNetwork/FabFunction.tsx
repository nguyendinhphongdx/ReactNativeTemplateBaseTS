import {Box, HStack, Icon, IconButton, useDisclose} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {MaterialIcons,FontAwesome5} from '../../assets/icons';
import StaggerComponent from '../../components/stagger';
import { NameScreen } from '../../config';
import { useNavigation } from '@react-navigation/native';
function FabFunction() {
  const {isOpen, onToggle} = useDisclose();
  const navigation = useNavigation();
  const handleNavigate = (name: any)=>{
    navigation.navigate(name);
  }
  return (
    <Box
      alignItems="center"
      style={{position: 'absolute', bottom: 50, right: 50}}>
      <StaggerComponent isOpen={isOpen}>
        <IconButton
          mb="4"
          variant="solid"
          bg="indigo.500"
          colorScheme="indigo"
          borderRadius="full"
          icon={
            <Icon
              as={<MaterialIcons name="settings"/>}
              size="6"
              _dark={{
                color: 'warmGray.50',
              }}
              color="warmGray.50"
            />
          }
        />
        <IconButton
          mb="4"
          variant="solid"
          bg="red.500"
          colorScheme="red"
          borderRadius="full"
          onPress={()=>handleNavigate(NameScreen.ImportVPNScreen)}
          icon={
            <Icon
              as={<FontAwesome5 name="file-import"/>}
              size="6"
              _dark={{
                color: 'warmGray.50',
              }}
              color="warmGray.50"
            />
          }
        />
      </StaggerComponent>

      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <Icon
              as={Feather}
              size="6"
              name="plus"
              color="warmGray.50"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          }
        />
      </HStack>
    </Box>
  );
}
export default React.memo(FabFunction);
