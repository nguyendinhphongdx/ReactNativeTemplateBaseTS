import {Box, Spinner, StatusBar, View} from 'native-base';
import React from 'react';
import {LoadingContext} from '../../context/LoadingContext';
import {theme} from '../../theme/theme';
import {
  statusbarHeight,
  STATUSBAR_HEIGHT,
  windowHeight,
  windowWidth,
} from '../../utils/Dimensions';
interface PropsTypes {
  children: React.ReactNode;
  safeArea?: boolean;
}
function Container(props: PropsTypes) {
  return <ViewBackGround {...props} />;
}
function ViewBackGround({children, safeArea = true}: PropsTypes) {
  const {loading} = React.useContext(LoadingContext);
  return (
    <Box
      flex={1}
      bg={{
        linearGradient: {
          colors: [
            theme.colors.purplebackground,
            theme.colors.background,
            theme.colors.purplebackground,
          ],
          start: [0, 0.5, 1],
          end: [1, 0.5, 0],
        },
      }}
      >
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <Box style={{flex: 1}}>
        {children}
      </Box>
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
