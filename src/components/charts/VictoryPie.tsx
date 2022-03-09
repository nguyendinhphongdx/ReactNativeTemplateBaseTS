import {
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryPie,
  VictoryTheme,
} from 'victory-native';
import React from 'react';
import {Center, View} from 'native-base';
import Svg from 'react-native-svg';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import {Dimensions} from 'react-native';
const chartHeight = Dimensions.get('window').height * 0.3;
const chartWidth = Dimensions.get('window').width;
const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
];
function PieChart() {
  return (
    //     <VictoryChart width={350} theme={VictoryTheme.material}>
    //     <VictoryBar data={data} x="quarter" y="earnings" />
    //   </VictoryChart>
    <VictoryChart innerRadius={50} >
      <VictoryPie
        standalone={false}
        animate={{
          duration: 2000,
        }}
        height={chartHeight - 100} width={chartWidth / 3.5} 
        colorScale={['tomato']}
        data={[{x: 'A', y: 100}]}
        innerRadius={50}
      />
    </VictoryChart>
  );
}
export default PieChart;
