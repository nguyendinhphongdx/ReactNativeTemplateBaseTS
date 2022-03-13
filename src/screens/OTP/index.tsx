import {Button, Center, Stack, Text} from 'native-base';
import React from 'react';
import wordApp from '../../utils/word';
import styles from './styles';

const AuthOTPScreen = ({onNext}:any) => {
  return (
    <Center flex={1} bg={'amber.400'} style={{marginTop: 20, marginBottom: 20, justifyContent: 'center'}}>
    <Stack space={4} w="90%">
      <Button
        onPress={onNext}
        style={styles.button}>
        <Text style={styles.titleButton}>
          {wordApp.login.toUpperCase()}
        </Text>
      </Button>
    </Stack>
  </Center>
  );
};

export default AuthOTPScreen;
