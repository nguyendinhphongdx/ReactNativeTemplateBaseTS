import {StyleSheet} from 'react-native';
import {SIZES, theme} from '../../theme/theme';

const styles = StyleSheet.create({
  nameApp: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 38,
    color: theme.colors.white,
  },
  require:{
    ...theme.fontSize.h3, color: theme.colors.blueText,
     fontWeight: '600',
     width:"70%",
     alignSelf: 'center',
     textAlign: 'center',
  }
});
export default styles;
