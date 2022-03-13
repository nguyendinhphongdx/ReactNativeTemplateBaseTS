import {Button, Center, Stack, Text} from 'native-base';
import React from 'react';
import { InputOTP } from '../../components/input';
import wordApp from '../../utils/word';
import styles from './styles';

const AuthOTPScreen = React.memo(({onNext}:any) => {
  const [otp,changeOtp] = React.useState("");
  const handleSubmit = () =>{
    console.log(otp);
  }
  
  return (
    <Center flex={1}  style={{justifyContent: 'center'}}>
    <Stack space={5} w="90%">
      <InputOTP onChangeText={changeOtp}/>
      <Button
        _pressed={{opacity:.7}}
        onPress={handleSubmit}
        style={styles.button}>
        <Text style={styles.titleButton}>
          {wordApp.auth.toUpperCase()}
        </Text>
      </Button>
    </Stack>
  </Center>
  );
});

export default AuthOTPScreen;
