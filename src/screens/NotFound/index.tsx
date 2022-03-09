import {Image, View, Text} from 'native-base';
import React from 'react';
import HeaderBack from '../../components/headerback';
import ViewBackGround from '../../components/viewbackground';
import {theme} from '../../theme/theme';
function NotFoundError({message}: any) {
  return (
    <ViewBackGround>
      <HeaderBack title={'Not Found'} />
      <View
        flex={1}
        justifyContent="center"
        alignItems="center">
        <Image
          source={require('../../assets/images/error404.png')}
          resizeMode="contain"
          alt="Error"
          width="300"
          height="300"
        />
        {message && <Text style={{color: theme.colors.text}}>{message}</Text>}
      </View>
    </ViewBackGround>
  );
}
export default NotFoundError;
