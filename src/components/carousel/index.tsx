import {Box, HStack, Icon, Pressable, VStack} from 'native-base';
import React, {useEffect, useRef} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';
import data from './data';
import {PropsCarosel} from './props';
import {useNavigation} from '@react-navigation/native';
import {NameScreen} from '../../config';
import wordApp from '../../utils/word';

const {width} = Dimensions.get('window');
const DOT_SIZE = 20;
const TICKER_HEIGHT = 18;
const CIRCLE_SIZE = 210;

const Circle = ({scrollX}: any) => {
  return (
    <View style={[styles.circleContainer]}>
      {data.map(({color}, index) => {
        const inputRange = [
          (index - 0.55) * width,
          index * width,
          (index + 0.55) * width,
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 0.2, 0],
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                backgroundColor: color,
                opacity,
                transform: [{scale}],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const Ticker = ({scrollX}: any) => {
  const inputRange = [-width, 0, width];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT - 4],
  });
  return (
    <View style={[styles.tickerContainer, {overflow: 'hidden'}]}>
      <HStack>
        <Animated.View style={{transform: [{translateY}]}}>
          <VStack space={'2px'} justifyContent="space-between" mt={1}>
            {data.map(({type}, index) => {
              return (
                <Text key={index} style={styles.tickerText}>
                  {type}
                </Text>
              );
            })}
          </VStack>
        </Animated.View>
      </HStack>
    </View>
  );
};

const Item = (props: any) => {
  // const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const {index, scrollX, component} = props;
  const navigation = useNavigation();
  const handleNavigate = () => {
    if (props?.navigation) {
      navigation.navigate(props.navigation);
    }
  };
  return (
    <View style={[styles.itemStyle]} key={index}>
      <Animated.View
        style={[
          styles.imageStyle,
          // {
          //   transform: [{ scale }],
          // },
        ]}>
        <Box
          flex={1}
          style={{backgroundColor: theme.colors.card, borderRadius: 10}}>
          {component}
        </Box>
        <Pressable
          style={{position: 'absolute', top: 10, right: 10}}
          onPress={handleNavigate}>
          <HStack justifyContent="center" alignItems="center" space={0}>
            <Text style={{color: theme.colors.text}}>{wordApp.detail}</Text>
            <Icon
              as={<Feather name="chevrons-right" />}
              size={5}
              color="primary.50"
            />
          </HStack>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const Pagination = ({scrollX}: any) => {
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });
  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: 'absolute',
            transform: [{translateX}],
          },
        ]}
      />
      {data.map((item, index) => {
        return (
          <View key={index} style={styles.paginationDotContainer}>
            <View
              style={[styles.paginationDot, {backgroundColor: item.color}]}
            />
          </View>
        );
      })}
    </View>
  );
};

export default function Carousel(props: PropsCarosel) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flastList = React.useRef<FlatList>(null);
  const {autoPlay} = props;
  const offset = React.useRef(0);
  const handleGoNext = () => {};
  const refTimer = useRef<any>();
  useEffect(() => {
    if (autoPlay) {
      refTimer.current = setInterval(() => {
        if (offset.current >= data.length - 1) {
          offset.current = 0;
        } else {
          offset.current++;
        }
        if (flastList.current) {
          flastList?.current.scrollToIndex({
            animated: true,
            index: offset.current,
          });
        }
      }, 3000);
    }

    return () => {
      clearInterval(refTimer.current);
    };
  }, [autoPlay]);
  return (
    <View style={styles.container}>
      <Circle scrollX={scrollX} />
      <Animated.FlatList
        ref={flastList}
        keyExtractor={item => item.id + ''}
        data={data}
        renderItem={({item, index}) => (
          <Item {...item} index={index} scrollX={scrollX} />
        )}
        pagingEnabled
        legacyImplementation={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces
        contentContainerStyle={{justifyContent: 'center'}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      />
      <Pagination scrollX={scrollX} />
      <Ticker scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    width: width,
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
  },
  imageStyle: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 400,
    overflow: 'hidden',
  },
  pagination: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    flexDirection: 'row',
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  tickerContainer: {
    position: 'absolute',
    top: 10,
    left: 20,
    overflow: 'hidden',
    height: TICKER_HEIGHT,
  },
  tickerText: {
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
    color: theme.colors.text,
    fontWeight: '800',
  },

  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    top: '15%',
  },
});
