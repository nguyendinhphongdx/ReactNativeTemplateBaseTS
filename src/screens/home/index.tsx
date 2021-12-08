import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  LineSegment,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
  VictoryZoomContainer,
  VictoryChart,
} from 'victory-native';
import { COLORS, SIZES, FONTS, icons } from "../../constant";
import victoryCustomTheme from '../../constant/victoryCustomTheme';

const HomeScreen = ({navigation}: any) => {
  const CurrencyLabel = ({ icon, currency, code }:{icon:any,currency:string,code:string}) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Image source={icon} style={{ width: 25, height: 25, marginTop: 5 }} />
        <View
          style={{
            marginLeft: SIZES.base,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>{currency}</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{code}</Text>
        </View>
      </View>
    );
  };
  const chartData = [
    { x: 1, y: 2.5 },
    { x: 1.5, y: 2 },
    { x: 2, y: 2.3 },
    { x: 2.5, y: 1.4 },
    { x: 3, y: 1.5 },
    { x: 3.5, y: 2.3 },
    { x: 4, y: 2.8 },
  ];
  const renderChart = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          alignItems: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <View style={{ flex: 1 }}>
            <CurrencyLabel icon={icons.star} currency={"abc"} code="xyz" />
          </View>
          <View>
            <Text style={{ ...FONTS.h3 }}>$100</Text>
            <Text style={{ color: COLORS.green }}>change</Text>
          </View>
        </View>
        {/* Chart */}
        <View
          style={{
            marginTop: -25,
          }}
        >
          <VictoryChart
            theme={victoryCustomTheme}
            height={220}
            width={SIZES.width - 40}
          >
            <VictoryLine
              style={{
                data: {
                  stroke: COLORS.secondary,
                },
                parent: {
                  border: "1px solid #ccc",
                },
              }}
              data={chartData}
              categories={{
                x: ["15 Min", "30 Min", "45 Min", "60 Min"],
                y: ["15", "30", "45"],
              }}
            />
            <VictoryScatter 
                data={chartData}
                size={7}
                style={{
                    data:{
                        fill:COLORS.secondary
                    }
                }}
            />
            <VictoryAxis 
                style={{
                    grid:{
                        stroke:"transparent"
                    }
                }}
            />
                <VictoryAxis 
                dependentAxis
                style={{
                    grid:{
                        stroke:"gray"
                    },
                    axis:{
                        stroke:"transparent"
                    }
                }}
            />
          </VictoryChart>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
      {renderChart()}
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

