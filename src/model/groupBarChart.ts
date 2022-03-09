import {theme} from '../theme/theme';

const groupBarChartModel: {
  x: string;
  y: number | string;
  label?: string;
  color?: string;
}[][] = [
  [
    {x: 'Hight',label: 'Beta',y: 1, color: theme.colors.hight},
    {x: 'Medium',label: 'Beta', y: 2, color: theme.colors.medium},
    {x: 'Low',label: 'Beta', y: 3, color: theme.colors.low},
  ],
  [
    {x: 'Hight', y: 2, label: 'Alpha', color: theme.colors.hight},
    {x: 'Medium', y: 3, label: 'Alpha', color: theme.colors.medium},
    {x: 'Low', y: 4, label: 'Alpha', color: theme.colors.low},
  ],
  [
    {x: 'Hight', y: 1, label: 'Denta', color: theme.colors.hight},
    {x: 'Medium', y: 2, label: 'Denta', color: theme.colors.medium},
    {x: 'Low', y: 3, label: 'Denta', color: theme.colors.low},
  ],
];
const lableGroupBarChart = [
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
export {groupBarChartModel, lableGroupBarChart};
