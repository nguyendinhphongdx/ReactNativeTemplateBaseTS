import React from 'react';
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Stagger,
  useDisclose,
  View,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ViewStyle} from 'react-native';
interface PropsTypes {
  isOpen?: boolean;
  children?: any;
  style?: ViewStyle;
}
export default function StaggerComponent(props: PropsTypes) {
  return (
    <View style={{...props.style}}>
      <Stagger
        visible={props.isOpen}
        initial={{
          opacity: 0,
          scale: 0,
          translateY: 34,
        }}
        animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
            mass: 0.8,
            stagger: {
              offset: 30,
              reverse: true,
            },
          },
        }}
        exit={{
          translateY: 34,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: 100,
            stagger: {
              offset: 30,
              reverse: true,
            },
          },
        }}>
        {props.children || null}
      </Stagger>
    </View>
  );
}
