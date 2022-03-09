import {Box, Heading, HStack, Pressable, Text} from 'native-base';
import React from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';
interface PropsTypes {
  children: React.ReactNode;
  title?: string;
  styleContainer?: ViewStyle;
  styleTitle?: TextStyle;
  onPress?: any;
}
function CardContainer(props: PropsTypes) {
  const {children, title, styleContainer, styleTitle, onPress} = props;

  return (
    <Box
      style={{
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: 10,
        paddingVertical: 10,
        ...styleContainer,
      }}>
      {title && (
        <HStack justifyContent="space-between">
          <Heading size="xs" style={{color: theme.colors.text, ...styleTitle}}>
            {title}
          </Heading>
          {onPress && (
            <Pressable onPress={onPress} style={{padding: 5,paddingHorizontal:8}} >
              <Text style={{color: theme.colors.text, ...theme.fontSize.h4}}>
                {wordApp.detail}
              </Text>
            </Pressable>
          )}
        </HStack>
      )}
      {children}
    </Box>
  );
}
export default CardContainer;
