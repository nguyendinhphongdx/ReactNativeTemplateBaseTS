import {Center, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {theme} from '../../theme/theme';
import {windowWidth} from '../../utils/Dimensions';
interface PropsTypes {
  title?: string;
  value?: number;
  color?: string;
}
export default function CircularProgressBarComponent(props: PropsTypes) {
  return (
    <Center
      _text={{
        color: 'white',
        fontWeight: 'bold',
      }}
      height={120}
      width={windowWidth / 3 - 10}
      style={[styles.container, {shadowColor: 'white'}]}>
      <CircularProgress
        strokeLinecap="round"
        inActiveStrokeOpacity={0.5}
        value={60}
        radius={60}
        initialValue={0}
        duration={1000}
        textColor={'#ecf0f1'}
        maxValue={80}
        title={props.title || 'KM/H'}
        titleColor={'white'}
        textStyle={styles.translateTitle}
        titleStyle={{
          ...styles.translateSubTitle,
          fontWeight: 'bold',
        }}
        activeStrokeColor={props.color || '#f39c12'}
        inActiveStrokeColor={'transparent'}
        inActiveStrokeWidth={10}
        activeStrokeWidth={20}
        valuePrefix="60"
        showProgressValue={false}
      />
      <Text style={styles.translateTitle}>{props.value}</Text>
    </Center>
  );
}
const styles = StyleSheet.create({
  container: {
    transform: [{rotate: '-135deg'}],
    position: 'relative',
    justifyContent: 'center',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: .4,
    shadowRadius: 3,
    elevation: 70,
  },
  translateTitle: {
    ...theme.fontSize.h2,
    position: 'absolute',
    fontWeight: 'bold',
    color: theme.colors.text,
    transform: [
      {
        rotate: '135deg',
      },
    ],
  },
  translateSubTitle: {
    transform: [
      {
        translateY: -35,
      },
      {
        translateX: -35,
      },
      {
        rotate: '135deg',
      },
    ],
  },
});
