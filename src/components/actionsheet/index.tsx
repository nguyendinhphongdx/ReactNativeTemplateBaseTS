import React from 'react';
import {
  Button,
  Actionsheet,
  useDisclose,
  Text,
  Box,
  Center,
  NativeBaseProvider,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Pressable,
} from 'native-base';
import {windowWidth, windowHeight} from '../../utils/Dimensions';
import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';

interface PropsTypes {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onFilter?: () => void;
  children?: React.ReactNode;
}
export default function ModalSheetComponent(props: PropsTypes) {
  const {isOpen, onOpen, onClose, onFilter, children} = props;
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <KeyboardAvoidingView behavior="padding">
        <Actionsheet.Content>
          <Pressable onPress={onFilter}>
            <Text
              pr={5}
              style={{
                textAlign: 'right',
                color: theme.colors.darkBlue8000,
                fontWeight: 'bold',
                width: windowWidth,
                ...theme.fontSize.h3,
              }}>
              {wordApp.done}
            </Text>
          </Pressable>
          <ScrollView w={windowWidth} maxHeight={windowHeight * 0.5}>
            {children}
          </ScrollView>
        </Actionsheet.Content>
      </KeyboardAvoidingView>
    </Actionsheet>
  );
}
