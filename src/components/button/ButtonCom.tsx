import React from 'react';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-paper';

function ButtonComponent(props: {
  title?: string;
  color?: (string | number)[];
  styleButton?: ViewStyle;
  styleTitle?:  TextStyle;
  onPress?: () => void;
}) {
  const {
    title = 'title',
    color = ['white', 'white'],
    onPress,
    styleButton,
    styleTitle,
  } = props;
  const handlePress = () => {
    onPress ? onPress() : null;
  };
  return (
    <LinearGradient colors={color} style={[style.buton, {...styleButton}]}>
      <TouchableOpacity activeOpacity={0.7} style={{padding: 12}} onPress={() => handlePress()}>
        <Text style={[style.title, {...styleTitle}]}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
const style = StyleSheet.create({
  buton: {
    width: '100%',
    backgroundColor: 'orange',
    borderRadius: 15,
    overflow:'hidden'
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default ButtonComponent;
