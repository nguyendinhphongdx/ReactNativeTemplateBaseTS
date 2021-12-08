import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
} from 'victory-native';
import CardComponent from '../../components/card/card';
import ScatterChart from '../../components/charts/scatterChart';
import {HeaderBarLeft} from '../../components/headers/HeaderLeft';
import {COLORS, FONTS, icons, SIZES} from '../../constant';
import victoryCustomTheme from '../../constant/victoryCustomTheme';

const HomeScreen = ({navigation}: any) => {
  const CurrencyLabel = ({
    icon,
    currency,
    code,
  }: {
    icon: any;
    currency: string;
    code: string;
  }) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image source={icon} style={{width: 25, height: 25, marginTop: 5}} />
        <View
          style={{
            marginLeft: SIZES.base,
          }}>
          <Text style={{...FONTS.h3}}>{currency}</Text>
          <Text style={{color: COLORS.gray, ...FONTS.body4}}>{code}</Text>
        </View>
      </View>
    );
  };
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
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        <View style={{flex: 1}}>
          <CurrencyLabel icon={icons.star} currency={'abc'} code="xyz" />
        </View>
        <View>
          <Text style={{...FONTS.h3}}>$100</Text>
          <Text style={{color: COLORS.green}}>change</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightGray}}>
      <HeaderBarLeft color={'blue'} navigation={navigation} />
        <CardComponent>
          <HeaderCard/>
          <ScatterChart data={chartData}/>
        </CardComponent>
        <CardComponent>
          <HeaderCard/>
        </CardComponent>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
