import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ButtonComponent from '../../components/button/ButtonCom';
import CardComponent from '../../components/card/card';
import {HeaderScreen} from '../../components/headers/HeaderLeft';
import RowComponent from '../../components/row/RowComponent';
import {COLORS, FONTS, SIZES} from '../../constant';
import {lives} from '../../_mock';
const NotifyScreen = ({navigation}: any) => {
  const renderItem = ({item,index}) =>{
    return(
      <CardComponent>
      <RowComponent styleWrap={{marginBottom: 5}}>
          <View style={{flex: 1}}>
            <Text style={{...FONTS.h3, color: COLORS.black}}>
              {`${item.day} - ${new Date(item.date).toLocaleDateString()}`}
            </Text>
          </View>
          <View>
            <Text style={{...FONTS.h3}}>{`${item.stage}`}</Text>
          </View>
        </RowComponent>
        <RowComponent styleWrap={{marginBottom: 10, paddingHorizontal: 10}}>
          <ButtonComponent
            color={[COLORS.greenThin, COLORS.greenThin]}
            styleTitle={{color: COLORS.white}}
            title="Nhận lịch"
            styleButton={{
              width: '100%',
            }}
          />
        </RowComponent>
      </CardComponent>
    );
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <HeaderScreen title={'Back'} goback={true} />
      <View style={{flex:1}}>
        <FlatList
          data={lives}
          keyExtractor={(item)=>item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
