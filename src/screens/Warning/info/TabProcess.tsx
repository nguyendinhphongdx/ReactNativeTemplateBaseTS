import {Button, HStack, Icon, Input, Text} from 'native-base';
import React, {useEffect} from 'react';
import {Keyboard, View} from 'react-native';
import Animated, {Easing, EasingNode} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TimelineContainer from '../../../components/timeline';
import {useKeyboard} from '../../../hooks/Keyboard';
import {theme} from '../../../theme/theme';

function Container() {
  return <TabProcessWarning />;
}
function TabProcessWarning() {
  const height = useKeyboard();
  const marginTop = new Animated.Value(0);
  const toogleViewKeyboard = () => {
    Animated.timing(marginTop, {
      toValue: height,
      duration: 200,
      easing: EasingNode.ease,
    }).start();
  };
  const handleCancel = () => {
    Keyboard.dismiss();
  };
  useEffect(() => {
    toogleViewKeyboard();
  }, [useKeyboard()]);
  return (
    <Animated.View style={{flex: 1, marginBottom: marginTop}}>
      <TimelineContainer />
      <View
        style={{
          backgroundColor:"#ccc",
          height:1,
          shadowColor: 'black',
          shadowOffset: {
            width:0, height:2
          },
          shadowOpacity: .3,
          elevation: 5,
        }}
      />
      <View
        style={{
          height: '40%',
          maxHeight: 250,
          minHeight: 200,
          padding: 10,
        }}>
        <HStack p={1}>
          <Icon
            as={<MaterialCommunityIcons name="comment-text-multiple" />}
            size={6}
            ml="2"
            color="primary.600"
          />
          <Text
            style={{...theme.fontSize.h4, marginLeft: 5}}
            color="primary.600">
            Comment
          </Text>
        </HStack>
        <Input
          multiline
          numberOfLines={5}
          height={100}
          style={{...theme.fontSize.h3}}
        />
        <HStack justifyContent={'flex-end'}>
          <Button variant={'unstyled'} onPress={handleCancel}>
            <Text color="muted.600">Cancel</Text>
          </Button>
          <Button variant={'unstyled'} onPress={handleCancel}>
            <Text color="info.900" fontWeight={'bold'}>
              Submit
            </Text>
          </Button>
        </HStack>
      </View>
    </Animated.View>
  );
}
export default Container;
