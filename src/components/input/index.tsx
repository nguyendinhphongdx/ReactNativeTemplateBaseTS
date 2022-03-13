import React, {MutableRefObject, Ref} from 'react';
import {FormControl, HStack, Icon, Input, Text, VStack} from 'native-base';
import {theme} from '../../theme/theme';
const TextInputComponent = (props: PropsTypes) => {
  const {
    type = 'text',
    placeholder,
    width = '100%',
    height = '12',
    label,
  } = props;
  return (
    <>
      {label && (
        <Text
          style={{
            ...theme.fontSize.h4,
            fontWeight: '500',
            paddingVertical: 2,
            color: theme.colors.text,
          }}>
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
        borderColor={'darkBlue.400'}
        color={theme.colors.text}
        fontSize={'sm'}
        type={type}
        // borderColor={theme.colors.blue1}
        InputRightElement={props.RightElement ? props.RightElement : undefined}
        InputLeftElement={props.LeftElement ? props.LeftElement : undefined}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text}
        onChangeText={props.onChangeText}
      />
    </>
  );
};

export const InputOTP = (props: PropsOTP) => {
  const {height = 60, numberPin = 6, width, onChangeText, value=""} = props;
  const [focus, setFocus] = React.useState(0);
  const [text, setText] = React.useState(value);
  const handleNext = (index: number) => {
    if (index < numberPin) {
      setFocus(index);
    }
  };
  const changeText = (str: string) => {
    setText(str);
    onChangeText && onChangeText(str);
  }
  const handleText = (s: string, index: number) => {
    changeText(
      [text.slice(0, index), s, text.slice(index)].join('').slice(0, numberPin),
    );
  };

  const handleCut = (index: number) => {
    changeText(text.slice(0, index) + text.slice(index + 1, text.length));
  };
  const handlePre = (index: number) => {
    setFocus(index - 1);
  };
  React.useEffect(() => {}, [focus]);

  return (
    <HStack style={{height}} space={2}>
      {new Array(numberPin).fill(null).map((item, index) => {
        return (
          <SingelOTP
            key={index}
            index={index}
            focus={focus === index}
            handleNext={handleNext}
            handleText={handleText}
            handleCut={handleCut}
            handlePre={handlePre}
            value={text[index]}
          />
        );
      })}
    </HStack>
  );
};
const SingelOTP = React.memo((props: any) => {
  const {index, focus, handleNext, handleText, value, handleCut, handlePre} =
    props;
  const ref = React.useRef();
  React.useEffect(() => {
    focus && ref.current?.focus();
  }, [focus]);
  const handleChange = (s: string) => {
    handleText(s.charAt(s.length-1), index);
  };
  const handleBack = () => {
    handleCut(index);
    if (!value) {
      handlePre(index);
    }
  };
  return (
    <Input
      onChangeText={handleChange}
      ref={ref}
      // onFocus={() => setFocus(index)}
      key={index}
      flex={1}
      value={value}
      // maxLength={1}
      // onSubmitEditing={}
      keyboardType={'number-pad'}
      fontSize={30}
      _focus={{
        borderColor:"amber.500"
      }}
      style={{borderColor:'red'}}
      borderColor={'darkBlue.400'}
      textAlign="center"
      onKeyPress={({nativeEvent}) => {
        nativeEvent.key === 'Backspace' ? handleBack() : handleNext(index + 1);
      }}
    />
  );
});
interface PropsOTP {
  numberPin?: number;
  width?: number | string;
  height?: number | string;
  value?:string;
  onChangeText?: (text: string) => void;
}
interface PropsTypes {
  label?: string;
  placeholder?: string;
  RightElement?: JSX.Element;
  LeftElement?: JSX.Element;
  width?: number | string;
  height?: number | string;
  type?: string;
  onChangeText?: (text: string) => void;
}
export default TextInputComponent;
