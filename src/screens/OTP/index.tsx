import { useNavigation } from '@react-navigation/native';
import {Button, Center, Stack, Text, useToast} from 'native-base';
import React from 'react';
import { InputOTP } from '../../components/input';
import { NameScreen } from '../../config';
import { LoadingContext } from '../../context/LoadingContext';
import helpers from '../../helpers/helpers';
import wordApp from '../../utils/word';
import styles from './styles';

const AuthOTPScreen = React.memo(() => {
  const navigation = useNavigation();
  const toast = useToast();
  const [otp,changeOtp] = React.useState("");
  const {setLoading} = React.useContext(LoadingContext);
  const handleSubmit = () =>{
    console.log(otp);
    try {
      setLoading(true);
      helpers.waited(2000).then(d => {
        navigation.reset({
          index: 0,
          routes: [{name: NameScreen.StacksScreen.AppStack}],
        });
      });
      helpers.waited(3000).then(d => {
        setLoading(false);
      });
    } catch (error: any) {
      setLoading(false);
      toast.show({
        title: error.message || error,
      });
    }
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
