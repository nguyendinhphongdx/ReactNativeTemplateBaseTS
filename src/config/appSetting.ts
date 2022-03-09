import AsyncStorage from '@react-native-community/async-storage';

class AppSettings {
  defaultUser = {
    name: 'Nguyễn Anh Phan',
    subName: 'Trưởng Phòng',
    token: null,
  };
  remember: boolean = false;
  splash: boolean = true;
  getDefaultUser() {
    return this.defaultUser;
  }
  async setRemember(remember: boolean) {
    await AsyncStorage.setItem(configAsync.remember,remember+"");
    this.getAllItemsAsyncStorage();
  }
  async setSplash(value: boolean) {
    await AsyncStorage.setItem(configAsync.splash,value+"");
    this.getAllItemsAsyncStorage();
  }
  async getSplash() {
    const result = await AsyncStorage.getItem(configAsync.splash);
    return result;
  }

  async getAllItemsAsyncStorage() {
    const result = await Promise.all([
      AsyncStorage.getItem(configAsync.remember),
      AsyncStorage.getItem(configAsync.splash),
    ]);
    console.log(`result`, result);
    if (result[0]) {
      this.remember = result[0] == 'true' ? true : false;
    }
    if (result[1]) {
      this.splash = result[1] == 'true' ? true : false;
    }
  }
  
}
 const App = new AppSettings();
 export default App
export const configAsync = {
  remember: 'remember',
  splash: 'splash',
};
