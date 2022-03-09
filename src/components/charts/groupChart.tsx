import {
  VictoryBar,
  VictoryGroup,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
  VictoryLegend,
  VictoryAxis,
} from 'victory-native';
import React from 'react';
import {theme} from '../../theme/theme';
function GroupBarChart() {
  return (
    //     <VictoryChart width={350} theme={VictoryTheme.material}>
    //     <VictoryBar data={data} x="quarter" y="earnings" />
    //   </VictoryChart>
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
        animate={{
          onLoad: {duration: 500},
        }}
        colorScale={[theme.colors.low, theme.colors.medium, theme.colors.hight]}
        labelComponent={
          <VictoryLabel textAnchor="middle" style={{fill: theme.colors.text}} />
        }>
        <VictoryBar
          data={[
            {x: 'Hight', y: 1},
            {x: 'Medium', y: 2},
            {x: 'Low', y: 3},
          ]}
        />
        <VictoryBar
          data={[
            {x: 'Hight', y: 2, label: 'Alpha'},
            {x: 'Medium', y: 3, label: 'Alpha'},
            {x: 'Low', y: 4, label: 'Alpha'},
          ]}
        />
        <VictoryBar
          data={[
            {x: 'Hight', y: 1, label: 'Alpha'},
            {x: 'Medium', y: 2, label: 'Alpha'},
            {x: 'Low', y: 3, label: 'Alpha'},
          ]}
        />
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
        data={[
          {
            name: 'One',
            symbol: {fill: 'tomato', type: 'star'},
            labels: {fill: theme.colors.text},
          },
          {
            name: 'Two',
            symbol: {fill: 'orange'},
            labels: {fill: theme.colors.text},
          },
          {
            name: 'Three',
            symbol: {fill: 'gold'},
            labels: {fill: theme.colors.text},
          },
        ]}
      />
    </VictoryChart>
  );
}
export default GroupBarChart;
