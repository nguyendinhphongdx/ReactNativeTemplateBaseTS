import React from "react";
import { Image, Text, View } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constant";
import RowComponent from "../row/RowComponent";
function NoteCard (){
    return (
        <RowComponent styleWrap={{marginTop: 10}}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={icons.star}
              style={{width: 25, height: 25, marginTop: 5}}
            />
            <View
              style={{
                marginLeft: SIZES.base,
              }}>
              <Text style={{...FONTS.h3, color: COLORS.black}}>
                {'Ca gần nhất'}
              </Text>
              <Text style={{color: COLORS.gray, ...FONTS.body4}}>
                Thứ 2 - ngày 26/12/2021
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{...FONTS.h3}}>Tầng 3A</Text>
          <Text style={{color: COLORS.green, textAlign: 'right'}}>change</Text>
        </View>
      </RowComponent>
    )
}

export default NoteCard;