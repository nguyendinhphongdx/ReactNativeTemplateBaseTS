import {Text} from 'native-base';
import ViewBackGround from '../../components/viewbackground';
import React from 'react';
import {theme} from '../../theme/theme';
import HeaderBack from '../../components/headerback';
function EndpointScreen(props:any){
  const item = props.route?.params?.item;
  return (
    <ViewBackGround>
      <HeaderBack title={item.title || '--'} />
      <Text style={{color: theme.colors.text}}>NetworkWorkScreen</Text>
    </ViewBackGround>
  );
}
export default EndpointScreen;