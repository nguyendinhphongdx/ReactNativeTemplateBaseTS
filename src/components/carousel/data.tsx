import React from 'react';
import { NameScreen } from '../../config';
import CardGroupPieChart from '../cards/cardGroupPie';
import CardLineChart from '../cards/cardLine';
import CardPieChart from '../cards/cardPie';
export default [
    {
      id:1,
      type: 'Top cảnh báo',
      component: <CardGroupPieChart/>,
      color: '#a1e3a1',
      navigation: NameScreen.StacksScreen.WarningStack
    },
    {
      id:2,
      type: 'Lượng cảnh báo theo thời gian',
      component: <CardLineChart/>,
      color: '#db9efa',
      navigation: NameScreen.StacksScreen.WarningStack
    },
    {
      id:3,
      type: 'Tiến trình phản ứng',
      component: <CardPieChart flex={1}/>,
      color: '#999',
      navigation: NameScreen.ResponseScreen
    }
  ];