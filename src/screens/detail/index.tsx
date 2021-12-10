import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View
} from 'react-native';
import ButtonComponent from '../../components/button/ButtonCom';
import CardComponent from '../../components/card/card';
import { HeaderScreen } from '../../components/headers/HeaderLeft';
import NoteCard from '../../components/note';
import RowComponent from '../../components/row/RowComponent';
import { COLORS, FONTS, SIZES } from '../../constant';
function DetailScreen({route, navigation}) {
  const {enable = true} = route.params;
  const RowInfo = (props: {name: string; value: string}) => {
    return (
      <View style={{flexDirection: 'row', paddingVertical: SIZES.base}}>
        <Text style={{...FONTS.h3, color: COLORS.black}}>{props.name}</Text>
        <Text style={{...FONTS.h3, color: COLORS.greenThin}}>
          {props.value}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderScreen title={'Chi tiết đơn trực'} goback={true} />
      <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
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
                {'Thông tin ca trực'}
              </Text>
            </View>
          </RowComponent>
          <View style={{flex: 1, width: '100%', padding: 10}}>
            <RowInfo name={'Tên khách hàng: '} value={'Nguyễn Đình Phong'} />
            <RowInfo name={'Account: '} value={'PhongND'} />
            <RowInfo name={'Số điện thoại: '} value={'0352337342'} />
            <RowInfo name={'Gía tiền: '} value={'100.000 vnđ'} />
            <RowInfo
              name={'Thời gian: '}
              value={`${new Date().toLocaleDateString()} - Tầng 3A`}
            />
            <Text style={{...FONTS.h3}}>Ghi chú</Text>
            <TextInput
              style={{
                borderWidth: 1,
                textAlignVertical: 'top',
                padding: SIZES.base,
                borderRadius: SIZES.radius,
              }}
              numberOfLines={5}
              multiline={true}
            />
            <ButtonComponent
              title={'Thanh lý'}
              enable={enable}
              styleButton={{
                width: '100%',
                marginVertical: SIZES.base,
              }}
              color={[COLORS.red, COLORS.red]}
            />
          </View>
        </CardComponent>
      </View>
    </SafeAreaView>
  );
}
export default DetailScreen;
