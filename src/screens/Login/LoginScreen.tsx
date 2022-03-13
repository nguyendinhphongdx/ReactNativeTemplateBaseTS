import React, {useContext} from 'react';
import {ImageBackground, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Center,
  Flex,
  FormControl,
  HStack,
  Icon,
  KeyboardAvoidingView,
  Pressable,
  Stack,
  Text,
  View,
} from 'native-base';
import {SvgXml} from 'react-native-svg';
import {MaterialIcons, Ionicons} from '../../assets/icons';
import {svgs} from '../../assets';
import CheckBoxComponent from '../../components/checkbox';
import TextInputComponent from '../../components/input';
import ViewBackGround from '../../components/viewbackground';
import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';
import styles from './style';
import {AppSettings, NameScreen} from '../../config';
import {AuthContext} from '../../context/AuthContext';
import {LoadingContext} from '../../context/LoadingContext';
import helpers from '../../helpers/helpers';
import {Platform} from 'react-native';
import Validate from '../../utils/validate';
import HeaderBack from '../../components/headerback';

import {windowWidth} from '../../utils/Dimensions';
const LoginScreen = ({onNext}:any) => {
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
  const handleInputPassword = (password: string) => {
    setSate({
      ...state,
      password,
    });
  };

  const handleLogin = async () => {
    onNext();
  };
  return (
    <Center
    style={{marginTop: 20, marginBottom: 20, justifyContent: 'center'}}>
    <Stack space={4} w="90%">
      <TextInputComponent
        label={wordApp.username}
        LeftElement={
          <Icon
            as={<Ionicons name="ios-person-circle-outline" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder={wordApp.username}
        onChangeText={handleInputUsername}
      />
      <TextInputComponent
        label={wordApp.password}
        RightElement={
          <Icon
            as={
              <Ionicons
                name={
                  state.showPassword ? 'eye-outline' : 'eye-off-outline'
                }
              />
            }
            size={5}
            ml="2"
            color="muted.400"
            onPress={() => handleTogglePassword(!state.showPassword)}
          />
        }
        placeholder={wordApp.password}
        type={state.showPassword ? 'password' : 'text'}
        onChangeText={handleInputUsername}
      />
      <CheckBoxComponent
        label={wordApp.remember}
        defaultIsChecked={state.remember}
      />
      <Button
        height={'1/5'}
        onPress={handleLogin}
        style={styles.button}>
        <Text style={styles.titleButton}>
          {wordApp.login.toUpperCase()}
        </Text>
      </Button>
    </Stack>
  </Center>
  );
};

export default LoginScreen;
