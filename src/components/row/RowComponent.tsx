import React from 'react';
import { View, ViewStyle } from 'react-native';
import { SIZES } from '../../constant';
function RowComponent({children,styleWrap}:{children:React.ReactNode,styleWrap?:ViewStyle}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        ...styleWrap
      }}>
          {children}
    </View>
  );
}
export default RowComponent;
