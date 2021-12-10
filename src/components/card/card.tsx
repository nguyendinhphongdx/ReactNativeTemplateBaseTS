import React from "react";
import { View, ViewStyle } from "react-native";
import { COLORS, SIZES } from "../../constant";
import styles from "../../constant/styles";
function CardComponent ({children,style}:{children:React.ReactNode,style?:ViewStyle}){
    return(
        <View
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.radius,
          alignItems: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
          ...style
        }}
      >
       {children}
      </View>
    )
}
export default CardComponent;