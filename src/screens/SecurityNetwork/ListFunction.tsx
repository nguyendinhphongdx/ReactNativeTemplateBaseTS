import {useNavigation} from '@react-navigation/native';
import {useBreakpointValue} from 'native-base';
import React from 'react';
import {MasonaryLayout} from '../../components/MasonaryLayout';
import {StoryBook} from '../../components/storybook';
function ListFunction() {
  const navigation = useNavigation();
  return (
    <MasonaryLayout
      column={useBreakpointValue({
        base: [1, 1],
        sm: [1, 1],
        md: [1, 1, 1],
      })}
      _hStack={{
        space: 4,
        mb: 4,
        p: '10px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      _vStack={{space: 4}}>
      <StoryBook
        navigation={navigation}
        name="Actionsheet"
        minH={32}
        _box={{
          lightGrad: ['cyan.400', 'teal.200'],
          darkGrad: ['cyan.600', 'teal.300'],
        }}
        _heading={{
          color: 'amber.100',
        }}
      />
      <StoryBook
        navigation={navigation}
        name="Alert"
        minH={40}
        _box={{
          lightGrad: ['orange.400', 'amber.200'],
          darkGrad: ['orange.600', 'amber.300'],
        }}
        _heading={{
          color: 'amber.100',
        }}
      />

      <StoryBook
        navigation={navigation}
        name="AlertDialog"
        minH={48}
        _box={{
          lightGrad: ['blue.800', 'lightBlue.300'],
          darkGrad: ['blue.900', 'lightBlue.500'],
        }}
        _heading={{
          color: 'amber.100',
        }}
      />
      <StoryBook
        navigation={navigation}
        name="Avatar"
        minH={48}
        _box={{
          lightGrad: ['violet.800', 'lightBlue.300'],
          darkGrad: ['violet.900', 'lightBlue.500'],
        }}
        _heading={{
          color: 'lightBlue.100',
        }}
      />
      <StoryBook
        navigation={navigation}
        name="Badge"
        minH={32}
        _box={{
          lightGrad: ['emerald.400', 'lime.200'],
          darkGrad: ['emerald.600', 'lime.300'],
        }}
        _heading={{
          color: 'lime.100',
        }}
      />
      <StoryBook
        navigation={navigation}
        name="Box"
        minH={40}
        _box={{
          lightGrad: ['fuchsia.800', 'pink.300'],
          darkGrad: ['fuchsia.900', 'pink.500'],
        }}
        _heading={{
          color: 'pink.100',
        }}
      />

      <StoryBook
        navigation={navigation}
        name="Button"
        minH={40}
        _box={{
          lightGrad: ['lightBlue.400', 'cyan.200'],
          darkGrad: ['lightBlue.600', 'cyan.300'],
        }}
        _heading={{
          color: 'cyan.100',
        }}
      />
      <StoryBook
        navigation={navigation}
        name="Center"
        minH={40}
        _box={{
          lightGrad: ['cyan.300', 'yellow.200'],
          darkGrad: ['cyan.400', 'yellow.300'],
        }}
        _heading={{
          color: 'yellow.100',
        }}
      />
    </MasonaryLayout>
  );
}
export default React.memo(ListFunction);
