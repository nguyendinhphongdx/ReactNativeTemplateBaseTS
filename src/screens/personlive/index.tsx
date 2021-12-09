import { NavigationProp } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBarLeft, HeaderScreen } from "../../components/headers/HeaderLeft";
function PersonLiveScreen ({navigation}: {navigation: NavigationProp<ReactNavigation.RootParamList>}) {
    
    return(
        <View style={styles.container}>
             <HeaderScreen  title={'Lịch trực cá nhân'}  goback={true}/>
        <Text>PersonLive Screen</Text>
      </View>
    );
}
export default PersonLiveScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
  });