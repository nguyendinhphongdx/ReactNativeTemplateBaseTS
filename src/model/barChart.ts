import {theme} from '../theme/theme';

const barChartModel = [
  {x: 'Pending', y: 3, colorScale: theme.colors.hight},
  {x: 'Verified', y: 4, colorScale: theme.colors.medium},
  {x: 'Waiting', y: 6, colorScale: theme.colors.low},
  {x: 'Notified', y: 3, colorScale: theme.colors.primary},
];
export const labelBarChartModel = [
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
];
export default barChartModel;
