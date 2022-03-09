import {Checkbox, Flex, Text} from 'native-base';
import React from 'react';
import {theme} from '../../theme/theme';
interface PropsTypes {
  accessibilityLabel?: string;
  defaultIsChecked?: boolean;
  label?: string;
}
export default function CheckBoxComponent(props: PropsTypes) {
  return <MyCheckBox {...props} />;
}
const MyCheckBox = (props: PropsTypes) => {
  return (
    <Flex flexDirection={'row'}>
      <Checkbox
        value="test"
        accessibilityLabel="This is a dummy checkbox"
        defaultIsChecked={props.defaultIsChecked}
      />
      <Text
        style={{
          ...theme.fontSize.h4,
          paddingLeft: 20,
          color: theme.colors.text,
        }}>
        {props.label}
      </Text>
    </Flex>
  );
};
