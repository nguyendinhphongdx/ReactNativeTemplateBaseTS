import { HStack, VStack } from 'native-base';
import React, { useCallback } from 'react';
import { groupPieChartModel } from '../../model/groupPieChart';
import { theme } from '../../theme/theme';
import CircularProgressBarComponent from '../circleprogress';

interface ItemProps {
  title: string;
  value: string | number;
  color: string;
}
interface PropsTypes {
  dataSource?: [ItemProps, ItemProps, ItemProps];
}
function CardGroupPieChart(props: PropsTypes) {
  const dataSource = props.dataSource || groupPieChartModel;
  const renderGroups = () => {
    return dataSource.map((group: any, index: number) => {
      return (
        <CircularProgressBarComponent
          title={group.title || '--'}
          value={group.value || 0}
          color={group.color || theme.colors.blue}
          key={index}
        />
      );
    });
  };
  const memorizedGroups = useCallback(() => renderGroups(), [dataSource]);
  return (
    <VStack space={5} flex={1} justifyContent="center">
      <HStack
        style={{
          justifyContent: 'center',
          paddingVertical: 0,
        }}>
        {memorizedGroups()}
      </HStack>
    </VStack>
  );
}
export default React.memo(CardGroupPieChart);
