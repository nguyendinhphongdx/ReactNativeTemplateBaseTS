import { NavigationProp } from '@react-navigation/core';
import React from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CardComponent from '../../../components/card/card';
import NoteCard from '../../../components/note';
import RowComponent from '../../../components/row/RowComponent';
import { ConstantScreen } from '../../../config/constant';
import { COLORS, FONTS, icons, SIZES } from '../../../constant';
import { lives } from '../../../_mock';
function FeatureScreen({
  navigation,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}) {
  const handleNavDetail = () => {
    navigation.navigate(ConstantScreen.DETAILSCREEN,{enable:true});
  };
  const ItemLive = ({item, index}: {item: any; index: number}) => {
    return (
      <View
        style={{
          paddingVertical: SIZES.base,
          borderBottomWidth: 0.4,
          borderBottomColor: COLORS.secondary,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={icons.calander} style={{width: 25, height: 25}} />
          <View style={{marginLeft: SIZES.radius}}>
            <Text style={{...FONTS.h3, color: COLORS.black}}>
              {item.day}- {item.session == 3 ? 'Tối' : 'Sáng'}
            </Text>
            <Text style={{...FONTS.h4, color: COLORS.gray}}>
              {item.stage} - {new Date(item.date).toLocaleDateString()}
            </Text>
          </View>
        </View>
        <SimpleLineIcons
          style={{alignSelf: 'center',padding:SIZES.base}}
          name={'arrow-right'}
          size={25}
          color={COLORS.primary}
          onPress={() => handleNavDetail()}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightGray}}>
      <CardComponent style={{marginHorizontal: 5, marginTop: 5}}>
        <NoteCard />
      </CardComponent>
      <CardComponent style={{flex: 1, marginHorizontal: 5, marginTop: 5}}>
        <RowComponent
          styleWrap={{
            width: '100%',
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.radius,
          }}>
          <View>
            <Text style={{...FONTS.h3, color: COLORS.black}}>
              {'Lịch trực sắp tới'}
            </Text>
          </View>
        </RowComponent>
        <View style={{flex: 1, width: '100%', padding: 10}}>
          <FlatList data={lives} renderItem={ItemLive} />
        </View>
      </CardComponent>
    </SafeAreaView>
  );
}
export default FeatureScreen;
