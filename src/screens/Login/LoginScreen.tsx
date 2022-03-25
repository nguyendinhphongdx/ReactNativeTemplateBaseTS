import {useNavigation} from '@react-navigation/native';
import {Button, Center, Icon, Stack, Text, View, VStack} from 'native-base';
import React, {useContext} from 'react';
import Svg, {SvgXml} from 'react-native-svg';
import {svgs} from '../../assets';
import {Ionicons} from '../../assets/icons';
import ButtonLogin from '../../components/button/ButtonLogin';
import CheckBoxComponent from '../../components/checkbox';
import TextInputComponent from '../../components/input';
import {AppSettings, NameScreen} from '../../config';
import {AuthContext} from '../../context/AuthContext';
import {LoadingContext} from '../../context/LoadingContext';
import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';
import styles from './style';

const LoginScreen = ({onNext}: any) => {
  const navigation = useNavigation();
  const {handleSaveToken, token} = useContext(AuthContext);
  const {setLoading} = useContext(LoadingContext);
  const [state, setSate] = React.useState({
    showPassword: false,
    username: '',
    password: '',
    remember: AppSettings.remember,
  });
  const handleTogglePassword = (value: boolean) => {
    setSate({
      ...state,
      showPassword: value,
    });
  };
  const handleInputUsername = (username: string) => {
    setSate({
      ...state,
      username,
    });
  };

  const handleLogin = async () => {
    // onNext();
    navigation.navigate(NameScreen.AuthOTPScreen);
  };
  return (
    <Center
      style={{
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'flex-start',
        paddingHorizontal: 20,
      }}>
      <Text
        style={{
          color: theme.colors.white,
          fontWeight: 'bold',
          marginBottom: 10,
          ...theme.fontSize.h3,
        }}>
        {wordApp.inforPartner}
      </Text>
      <VStack space={7}>
        <TextInputComponent
          LeftElement={
            <View ml={3}>
              <SvgXml xml={svgs.svgUserBlur} />
            </View>
          }
          placeholder={wordApp.username}
          onChangeText={handleInputUsername}
        />
        <TextInputComponent
          LeftElement={
            <View ml={3}>
              <SvgXml xml={svgs.svgPhone} />
            </View>
          }
          placeholder={wordApp.password}
          onChangeText={handleInputUsername}
          keyboardType={'name-phone-pad'}
        />
      </VStack>
      <ButtonLogin onPress={handleLogin} title={wordApp.start.toUpperCase()} />
    </Center>
  );
};

export default LoginScreen;
