import {HStack, Icon, Text, View, VStack} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../../theme/theme';

const inforData = [
  {
    icon: <MaterialCommunityIcons name="id-card" />,
    title: 'Organization',
    content: 'Demo inc',
  },
  {
    icon: <MaterialCommunityIcons name="hammer-screwdriver" />,
    title: 'Status',
    content: 'Pending Client',
  },
  {
    icon: <MaterialCommunityIcons name="calendar-clock" />,
    title: 'Date Created',
    content: new Date().toLocaleDateString(),
  },
  {
    icon: <Ionicons name="ios-person-circle-outline" />,
    title: 'Actor',
    content: 'Desktop-ggmv2',
  },
  {
    icon: <MaterialCommunityIcons name="bug" />,
    title: 'Action',
    content: 'Malware',
  },
];
function Container() {
  return <TabDetailWarning />;
}
function TabDetailWarning() {
  return (
    <View>
      {inforData.map((item, index) => {
        return (
          <HStack alignItems="center" mt={3} key={index}>
            <Icon
              as={item.icon || <Ionicons name="ios-person-circle-outline" />}
              size={7}
              ml="2"
              color="muted.600"
            />
            <VStack paddingLeft={5}>
              <Text
                style={{
                  ...theme.fontSize.h3,
                  color: theme.colors.medium,
                  fontWeight: 'bold',
                }}>
                {item.title || '---'}
              </Text>
              <Text style={{...theme.fontSize.h4, color: theme.colors.medium}}>
              {item.content || '---'}
              </Text>
            </VStack>
          </HStack>
        );
      })}
    </View>
  );
}
export default Container;
