import {StyleSheet} from 'react-native';
import {SIZES, theme} from '../../theme/theme';

const styles = StyleSheet.create({
  nameApp: {
    ...theme.fontSize.h1,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  title: {
    ...theme.fontSize.h2,
    fontWeight: '500',
    color: theme.colors.text,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '20%',
  },
  button: {
    fontSize: 20,
    marginTop: 20,
    backgroundColor: theme.colors.hight,
  },
  account: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#20315f',
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
  },
  description: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#20315f',
  },
  phone: {
    ...theme.fontSize.h3,
    fontSize: 18,
    color: '#fff',
  },
  titleButton: {
    ...theme.fontSize.h3,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});
export default styles;
