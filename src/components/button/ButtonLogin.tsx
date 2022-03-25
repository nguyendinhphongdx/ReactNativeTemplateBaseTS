import { Button, Text } from "native-base";
import React from "react";
import { theme } from "../../theme/theme";
interface propsTypes {
    onPress: () => void;
    title: string;
}
function ButtonLogin (props: propsTypes){
    return(
        <Button
        _pressed={{opacity: 0.7}}
        onPress={props.onPress}
        style={{
          marginTop: 30,
          borderRadius: 22,
          backgroundColor: theme.colors.orrangeButton,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            paddingVertical: 7,
            paddingHorizontal: 30,
            fontWeight: 'bold',
            color: theme.colors.white,
            fontSize: 20,
          }}>
         {props.title}
        </Text>
      </Button>
    )
}
export default ButtonLogin;