import { Dimensions, NativeModules, Platform, StatusBar } from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const statusbarHeight = StatusBar.currentHeight;
const { StatusBarManager } = NativeModules;
export const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;
