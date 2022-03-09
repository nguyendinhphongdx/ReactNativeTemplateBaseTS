import React from 'react';
import {FormControl, Icon, Input, Text} from 'native-base';
import {theme} from '../../theme/theme';
const TextInputComponent = (props: PropsTypes) => {
  const {
    type = 'text',
    placeholder,
    width = '80%',
    height = '10',
    label,
  } = props;
  return (
    <>
      {label && (
        <Text
          style={{...theme.fontSize.h4, fontWeight: '500', paddingVertical: 2, color: theme.colors.text}}>
          {label}
        </Text>
      )}
      <Input
        w={{
          base: width,
          md: '25%',
        }}
        h={{
          base: height,
        }}
        color={theme.colors.text}
        fontSize={"sm"}
        type={type}
        InputRightElement={props.RightElement ? props.RightElement : undefined}
        InputLeftElement={props.LeftElement ? props.LeftElement : undefined}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text}
        onChangeText={props.onChangeText}
      />
    </>
  );
};
interface PropsTypes {
  label?: string;
  placeholder?: string;
  RightElement?: JSX.Element;
  LeftElement?: JSX.Element;
  width?: number | string;
  height?: number | string;
  type?: string;
  onChangeText?:(text:string)=>void;
}
export default TextInputComponent;
