import {useNavigation} from '@react-navigation/native';
import {
  Box,
  Button,
  Center,
  Image,
  Stack,
  Text,
  useToast,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import ButtonLogin from '../../components/button/ButtonLogin';
import CardFrame from '../../components/cards/cardFrame';
import IconBack from '../../components/headerback/IconBack';
import {InputOTP} from '../../components/input';
import OnBoardFrame from '../../components/onboard';
import ViewBackGround from '../../components/viewbackground';
import {NameScreen} from '../../config';
import {LoadingContext} from '../../context/LoadingContext';
import helpers from '../../helpers/helpers';
import {windowWidth} from '../../utils/Dimensions';
import wordApp from '../../utils/word';
import styles from './styles';

const AuthOTPScreen = React.memo(() => {
  const navigation = useNavigation();
  const toast = useToast();
  const [otp, changeOtp] = React.useState('');
  const {setLoading} = React.useContext(LoadingContext);
  const handleSubmit = () => {
    console.log(otp);
    try {
      setLoading(true);
      helpers.waited(2000).then(d => {
        navigation.reset({
          index: 0,
          routes: [{name: NameScreen.LocationScreen}],
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
  };
  const handleBack = () =>{
    navigation.reset({index:0, routes: [{name: NameScreen.OnboardingScreen}]})
  }
  return (
    <ViewBackGround>
       <View style={{position: 'absolute', zIndex: 999}}>
        <IconBack onPress={handleBack} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 20,
        }}>
        <Image
          source={require('../../assets/icons/png/protection.png')}
          alt="protection"
          style={{width: 120, height: 120}}
        />
        <Text style={styles.nameApp}>{wordApp.nameApp}</Text>
      </View>
      <CardFrame>
        <Box
          w={windowWidth}
          alignContent="center"
          justifyContent="center"
          style={{paddingHorizontal: 10}}>
          <VStack space={5} mt={10}>
            <Text style={styles.require}>{wordApp.requireAuth}</Text>
            <InputOTP onChangeText={changeOtp} />
            <ButtonLogin onPress={handleSubmit} title={wordApp.auth.toUpperCase()}/>
          </VStack>
        </Box>
      </CardFrame>
    </ViewBackGround>
    // <ViewBackGround>

    //   <Center flex={1} style={{justifyContent: 'center'}}>
    //     <Stack space={5} w="90%">
    //       <InputOTP onChangeText={changeOtp} />
    //       <Button
    //         _pressed={{opacity: 0.7}}
    //         onPress={handleSubmit}
    //         style={styles.button}>
    //         <Text style={styles.titleButton}>{wordApp.auth.toUpperCase()}</Text>
    //       </Button>
    //     </Stack>
    //   </Center>
    // </ViewBackGround>
  );
});

export default AuthOTPScreen;
