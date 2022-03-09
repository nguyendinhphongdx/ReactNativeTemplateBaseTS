import { Text, View } from 'native-base';
import { StyleSheet, Button } from 'react-native'
import React from 'react';
import { TabBar, TabView } from 'react-native-tab-view';
import HeaderBack from '../../../components/headerback';
import DocumentPicker, {
    DirectoryPickerResponse,
    DocumentPickerResponse,
    isInProgress,
    types,
  } from 'react-native-document-picker'
import ViewBackGround from '../../../components/viewbackground';
import { NameScreen } from '../../../config';
import { theme } from '../../../theme/theme';
import { windowWidth } from '../../../utils/Dimensions';
function ImportVPNScreen() {
    const [index,setIndex] = React.useState(0);
    const [routes] = React.useState([
      {key: 1, title: 'URL'},
      {key: 2, title: 'FILE'}
    ]);
    const renderScene = ({route, focused}: any) => {
      switch (route.key) {
        case 1:
          return <TabImportURL />;
          case 2:
          return <TabImportFile />;
        default:
          return <TabImportURL />;
      }
    };
    const renderTabBar = (props?: any) => (
      <TabBar
        {...props}
        getLabelText={({route}) => route.title}
        // inactiveColor={'black'}
        activeColor={'white'}
        indicatorStyle={{
          // backgroundColor: 'transparent',
          borderBottomWidth: 3,
          borderColor: 'white',
          marginHorizontal: 10,
          width: windowWidth / 2 - 24,
        }}
        style={{backgroundColor: 'transparent'}}
        pressColor={'#ccc'}
        labelStyle={{...theme.fontSize.h4}}
      />
    );
    const onChangetab = (index: number) => {
      setIndex(index);
    };
   
    return(
        <ViewBackGround>
        <View style={{flex: 1}}>
        <HeaderBack title={"Import VPN"}/>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={onChangetab}
            initialLayout={{width:windowWidth}}
            style={{padding: 0}}
          />
        </View>
      </ViewBackGround>
    )
}
const TabImportURL = () =>{
    return (
        <View>
            <Text color={theme.colors.text}>Coming Soon...</Text>
        </View>
    )
}
const TabImportFile = () =>{
    const [result, setResult] = React.useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
  >()
  React.useEffect(() => {
    console.log(JSON.stringify(result, null, 2))
  }, [result])

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled')
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn('multiple pickers were opened, only the last will be considered')
    } else {
      throw err
    }
  }

    return (
        <View style={styles.container}>
        <Button
          title="open picker for single file selection"
          onPress={async () => {
            try {
              const pickerResult = await DocumentPicker?.pickSingle({
                presentationStyle: 'fullScreen',
                copyTo: 'cachesDirectory',
              })
              setResult([pickerResult])
            } catch (e) {
              handleError(e)
            }
          }}
        />
        <Button
          title="open picker for multi file selection"
          onPress={() => {
            DocumentPicker?.pickMultiple().then(setResult).catch(handleError)
          }}
        />
        <Button
          title="open picker for multi selection of word files"
          onPress={() => {
            DocumentPicker?.pick({
              allowMultiSelection: true,
              type: [types.doc, types.docx],
            })
              .then(setResult)
              .catch(handleError)
          }}
        />
        <Button
          title="open picker for single selection of pdf file"
          onPress={() => {
            DocumentPicker?.pick({
              type: types.pdf,
            })
              .then(setResult)
              .catch(handleError)
          }}
        />
        <Button
          title="releaseSecureAccess"
          onPress={() => {
            DocumentPicker?.releaseSecureAccess([])
              .then(() => {
                console.warn('releaseSecureAccess: success')
              })
              .catch(handleError)
          }}
        />
        <Button
          title="open directory picker"
          onPress={() => {
            DocumentPicker?.pickDirectory().then(setResult).catch(handleError)
          }}
        />
  
        <Text selectable>Result: {JSON.stringify(result, null, 2)}</Text>
      </View>
    )
}
export default ImportVPNScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: 60,
      height: 60,
      marginVertical: 20,
    },
  })