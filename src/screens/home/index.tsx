import { NavigationProp, useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ButtonComponent from '../../components/button/ButtonCom';
import CardComponent from '../../components/card/card';
import ScatterChart from '../../components/charts/scatterChart';
import {HeaderBarLeft} from '../../components/headers/HeaderLeft';
import RowComponent from '../../components/row/RowComponent';
import { ConstantScreen } from '../../config/constant';
import {COLORS, FONTS, icons, SIZES} from '../../constant';

const HomeScreen = ({navigation}: {navigation: NavigationProp<ReactNavigation.RootParamList>}) => {
  const chartData = [
    {x: 1, y: 2.5},
    {x: 1.5, y: 2},
    {x: 2, y: 2.3},
    {x: 2.5, y: 1.4},
    {x: 3, y: 1.5},
    {x: 3.5, y: 2.3},
    {x: 4, y: 2.8},
  ];
  const HeaderCard = () => {
    return (
      <RowComponent>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={icons.star}
              style={{width: 25, height: 25, marginTop: 5}}
            />
            <View
              style={{
                marginLeft: SIZES.base,
              }}>
              <Text style={{...FONTS.h3, color: COLORS.black}}>
                {'Nguyễn Đình Phong'}
              </Text>
              <Text style={{color: COLORS.gray, ...FONTS.body4}}>
                {'18A10010057'}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{...FONTS.h3}}>{new Date().toLocaleDateString()}</Text>
          <Text style={{color: COLORS.green, textAlign: 'right'}}>change</Text>
        </View>
      </RowComponent>
    );
  };
  const handleNavLive = ()=>{
    navigation.navigate({name:ConstantScreen.PERSONLIVESCREEN});
  }
  const handleNavSchedule = ()=>{
    // navigation.navigate({name:ConstantScreen.NOTIFYSCREEN});
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
       <HeaderBarLeft navigation={navigation} title={'Home'} />
      <ScrollView>
        <CardComponent>
          <HeaderCard />
          <ScatterChart data={chartData} />
        </CardComponent>
        <CardComponent>
        <RowComponent styleWrap={{marginBottom: 5}}>
            <View style={{flex: 1}}>
              <Text style={{...FONTS.h3, color: COLORS.black}}>
                {'Số lượt còn lại'}
              </Text>
            </View>
            <View>
              <Text style={{...FONTS.h3}}>{'5'} Ca</Text>
            </View>
          </RowComponent>
          <RowComponent styleWrap={{marginBottom: 10, paddingHorizontal: 10}}>
            <ButtonComponent
              color={[COLORS.greenThin, COLORS.greenThin]}
              styleTitle={{color: COLORS.white}}
              title="Mua dịch vụ"
              styleButton={{
                width: '100%',
              }}
            />
          </RowComponent>
        </CardComponent>
        <CardComponent>
          <RowComponent styleWrap={{marginBottom: 5}}>
            <View style={{flex: 1}}>
              <Text style={{...FONTS.h3, color: COLORS.black}}>
                {'Số lượng đã trực'}
              </Text>
            </View>
            <View>
              <Text style={{...FONTS.h3}}>{'5'} Ca</Text>
            </View>
          </RowComponent>
          <RowComponent styleWrap={{marginBottom: 5}}>
            <View style={{flex: 1}}>
              <Text style={{...FONTS.h3, color: COLORS.black}}>
                {'Số lượng chưa trực'}
              </Text>
            </View>
            <View>
              <Text style={{...FONTS.h3}}>{'5'} Ca</Text>
            </View>
          </RowComponent>
          <RowComponent styleWrap={{marginBottom: 10, paddingHorizontal: 10}}>
            <ButtonComponent
              color={[COLORS.greenThin, COLORS.greenThin]}
              styleTitle={{color: COLORS.white}}
              title="Danh sách trực"
              styleButton={{
                width: '100%',
              }}
              onPress={handleNavLive}
            />
          </RowComponent>
        </CardComponent>
        <CardComponent>
          <RowComponent styleWrap={{marginBottom: 5}}>
            <View style={{flex: 1}}>
              <Text style={{...FONTS.h3, color: COLORS.black}}>
                {'Lịch trực đã đăng kí'}
              </Text>
            </View>
            <View>
              <Text style={{...FONTS.h3}}>{'5'} Ca / Tuần</Text>
            </View>
          </RowComponent>
          <RowComponent styleWrap={{marginBottom: 10, paddingHorizontal: 10}}>
            <ButtonComponent
              color={[COLORS.greenThin, COLORS.greenThin]}
              styleTitle={{color: COLORS.white}}
              title="Đăng kí lịch"
              styleButton={{
                width: '100%',
              }}
              onPress={handleNavSchedule}
            />
          </RowComponent>
        </CardComponent>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
