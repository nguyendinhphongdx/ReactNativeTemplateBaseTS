import React from 'react';
import { View } from 'react-native';
import {
    VictoryAxis, VictoryChart,
    VictoryLine,
    VictoryScatter
} from 'victory-native';
import { COLORS, SIZES } from '../../constant';
import victoryCustomTheme from '../../constant/victoryCustomTheme';
function ScatterChart(props: {data: any}) {
  const chartData = props.data;
  return (
    <View
      style={{
        marginTop: -25,
      }}>
      <VictoryChart
        theme={victoryCustomTheme}
        height={220}
        width={SIZES.width - 40}>
        <VictoryLine
          style={{
            data: {
              stroke: COLORS.secondary,
            },
            parent: {
              border: '1px solid #ccc',
            },
          }}
          data={chartData}
          categories={{
            x: ['15 Min', '30 Min', '45 Min', '60 Min'],
            y: ['15', '30', '45'],
          }}
        />
        <VictoryScatter
          data={chartData}
          size={7}
          style={{
            data: {
              fill: COLORS.secondary,
            },
          }}
        />
        <VictoryAxis
          style={{
            grid: {
              stroke: 'transparent',
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            grid: {
              stroke: 'gray',
            },
            axis: {
              stroke: 'transparent',
            },
          }}
        />
      </VictoryChart>
    </View>
  );
}
export default ScatterChart;
