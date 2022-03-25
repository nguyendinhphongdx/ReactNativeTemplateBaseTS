import {Box, Icon} from 'native-base';
import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Ionicons} from '../../assets/icons';
import BannerSlider from '../../components/BannerSlider';
import {TableListView} from '../../components/TableList';
import ViewBackGround from '../../components/viewbackground';
import {NameScreen} from '../../config';
import {freeGames, paidGames} from '../../model/data';

export default function NewsScreen({navigation}) {
  return (
    <ViewBackGround>
      <Box style={{paddingHorizontal:10, marginBottom:5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon
              as={<Ionicons name={'menu'} />}
              size={'7'}
              color="muted.100"
            />
          </TouchableOpacity>
          <Text style={{fontSize: 16, fontFamily: 'Roboto-Medium'}}>
            Xin chào, PhongND
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Bản tin trực
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>
      </Box>

      <TableListView />
    </ViewBackGround>
  );
}
