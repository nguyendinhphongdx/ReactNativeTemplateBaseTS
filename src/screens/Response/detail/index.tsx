import {
  Button,
  Center,
  Heading,
  Input,
  KeyboardAvoidingView,
  Text,
  VStack,
} from 'native-base';
import {Platform} from 'react-native';
import ViewBackGround from '../../../components/viewbackground';
import React from 'react';
const Example = () => {
  return (
    <ViewBackGround>
      <KeyboardAvoidingView
      flex={1}
        h={{
          base: '400px',
          lg: 'auto',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Center flex={1}>
          <VStack>
            <Heading mb="3">Forgot Password</Heading>
            <Text color="muted.400">
              Not to worry! Enter email address associated with your account and
              we’ll send a link to reset your password.
            </Text>
            <Input placeholder="Email Address" mt="10" mb="4" />
            <Button mb="4">Proceed</Button>
          </VStack>
        </Center>
      </KeyboardAvoidingView>
    </ViewBackGround>
  );
};
export default Example;
