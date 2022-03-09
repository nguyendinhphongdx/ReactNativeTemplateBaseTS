import React, { useCallback } from 'react';
import Animated, { ZoomIn } from 'react-native-reanimated';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLegend,
  VictoryTheme
} from 'victory-native';
import {
  groupBarChartModel,
  lableGroupBarChart
} from '../../model/groupBarChart';
import { theme } from '../../theme/theme';

interface GroupType {
  x: string;
  y: number | string;
  label?: string;
  color?: string;
}
interface PropsTypes {
  dataSource?: GroupType[][];
}
function CardGroupBar(props: PropsTypes) {
  const dataSource = props.dataSource || groupBarChartModel;
  console.log('render group');
  const renderGroups = () => {
    return dataSource.map((group: any, index: number) => {
      return <VictoryBar data={group} key={index} />;
    });
  };
  const memorizedGroups = useCallback(() => renderGroups(), [dataSource]);
  const colorScale = dataSource[0]?.map((type, index) => {
    return type.color || theme.colors.card;
  });
  const lables = dataSource.map((group, index) => {
    return {
      name: group[0]?.label,
      symbol: {
        fill: colorScale[index] ? colorScale[index] : theme.colors.black,
        type: 'star',
      },
      labels: {fill: theme.colors.text},
    };
  });
  return (
    <Animated.View entering={ZoomIn.delay(80)}>
      <VictoryChart theme={VictoryTheme.material} domain={{y: [0.5, 5.5]}}>
        <VictoryAxis
          theme={VictoryTheme.material}
          standalone={false}
          style={{tickLabels: {fill: theme.colors.text}}}
        />
        <VictoryAxis
          dependentAxis
          crossAxis
          theme={VictoryTheme.material}
          standalone={false}
          style={{tickLabels: {fill: theme.colors.text}}}
        />
        <VictoryGroup
          offset={24}
          style={{data: {width: 20}}}
          // animate={{
          //   onLoad: {duration: 500},
          // }}
          colorScale={colorScale}
          labelComponent={
            <VictoryLabel
              textAnchor="middle"
              style={{fill: theme.colors.text}}
            />
          }>
          {memorizedGroups()}
        </VictoryGroup>
        <VictoryLegend
          x={0}
          y={10}
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{
            title: {fontSize: 20},
          }}
          data={lables || lableGroupBarChart}
        />
      </VictoryChart>
    </Animated.View>
  );
}
export default CardGroupBar;
