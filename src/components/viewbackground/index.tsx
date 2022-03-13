import {Box, Spinner, StatusBar, View} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {LoadingContext} from '../../context/LoadingContext';
import {backgroundLinear, rotateBg, theme} from '../../theme/theme';
import {
  statusbarHeight,
  STATUSBAR_HEIGHT,
  windowHeight,
  windowWidth,
} from '../../utils/Dimensions';
interface PropsTypes {
  children: React.ReactNode;
  safeArea?: boolean;
  bgColors?: string[];
  rotateLnBg?:{
    start?:number[];
    end?:number[];
  }
}
function Container(props: PropsTypes) {
  return <ViewBackGround {...props} />;
}
function ViewBackGround({children, safeArea = true, bgColors=backgroundLinear,rotateLnBg=rotateBg}: PropsTypes) {
  const {loading} = React.useContext(LoadingContext);
  return (
    <Box
      flex={1}
      bg={{
        linearGradient: {
          colors:bgColors,
          start: rotateLnBg.start,
          end: rotateLnBg.end,
        },
      }}
      safeAreaTop={safeArea}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <Box style={{flex: 1}}>{children}</Box>
      {loading && (
        <Box
          position={'absolute'}
          w={windowWidth}
          h={windowHeight}
          style={{
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <Spinner size="lg" color="lime.300" />
        </Box>
      )}
    </Box>
  );
}
export default Container;
