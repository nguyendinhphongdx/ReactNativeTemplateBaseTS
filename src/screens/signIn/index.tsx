import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Keyboard,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';

import {AuthContext} from '../../contexts/authContext';

import Users from '../../_mock/users';
import AnimatedLottieView from 'lottie-react-native';
import Animated, {EasingNode} from 'react-native-reanimated';
import ButtonComponent from '../../components/button/ButtonCom';
const logo = require('../../assets/lottie/rocket.json');

const SignInScreen = ({navigation}: any) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
  const [height] = React.useState(new Animated.Value(0));
  const [translate] = React.useState(new Animated.Value(0));
  const minHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [280, 70],
  });
  const translateX = translate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 150],
  });
  const {colors} = useTheme();

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = (val: string) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val: string) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val: string) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName: string, password: string) => {
    const foundUser = Users.filter((item: any) => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(foundUser);
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  useEffect(() => {
    Animated.timing(height, {
      toValue: isKeyboardVisible ? 1 : 0,
      duration: 400,
      easing: EasingNode.ease,
    }).start();
    Animated.timing(translate, {
      toValue: isKeyboardVisible ? 1 : 0,
      duration: 400,
      easing: EasingNode.ease,
    }).start();
  }, [isKeyboardVisible]);
  return (
    <ImageBackground
    source={require("../../assets/images/background/login.jpg")}
    style={styles.container}>
     
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <Animated.View
          style={{minHeight: minHeight, transform: [{translateX: translateX}]}}>
          <AnimatedLottieView source={logo} autoPlay loop />
        </Animated.View>
        <View style={styles.sheet}>
          <Text style={styles.text_header}>Welcome!</Text>
          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Username
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Your Username"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
              onEndEditing={e => handleValidUser(e.nativeEvent.text)}
            />
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={colors.text} size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#666666"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={{color: '#009387', marginTop: 15}}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <ButtonComponent
            title="Sign In"
            onPress={() => loginHandle(data.username, data.password)}
            color={['#4c669f', '#3b5998', '#192f6a']}
            styleTitle={{
              color: 'white',
            }}
            styleButton={{
              marginTop:10
            }}
          />
          <ButtonComponent
            title="Sign Up"
            onPress={() => navigation.navigate('SignUpScreen')}
            color={['white', 'white']}
            styleButton={{
              borderWidth: 1,
              marginVertical: 10,
            }}
          />
        </View>
    </ImageBackground>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20
  },
  sheet: {
    backgroundColor: 'white',
    flex:1,
    width: '100%',
    padding:20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
