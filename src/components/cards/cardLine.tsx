import React from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
} from 'victory-native';
import victoryCustum from '../victoryCustum';
import {theme} from '../../theme/theme';
import {windowWidth} from '../../utils/Dimensions';
import {lineChartModel} from '../../model/lineChart';
interface PropsTypes {
  dataSource?: {x: string; y: number}[];
}
function CardLineChart(props: PropsTypes) {
  const dataSource = props.dataSource || lineChartModel;
  return (
    <VictoryChart theme={victoryCustum} height={220} width={windowWidth}>
      <VictoryLine
        style={{
          data: {
            stroke: theme.colors.border,
          },
        }}
        data={dataSource}
      />
      <VictoryScatter
        data={dataSource}
        size={7}
        style={{
          data: {
            fill: theme.colors.border,
          },
        }}
      />
      <VictoryAxis
        minDomain={100}
        style={{
          grid: {
            // stroke: 'transparent',
          },
        }}
      />
      <VictoryAxis
        dependentAxis
        minDomain={100}
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
  );
}
export default React.memo(CardLineChart);
