import React from "react";
import { View } from "react-native";
import { COLORS, SIZES } from "../../constant";
import styles from "../../constant/styles";
function CardComponent ({children}:{children:React.ReactNode}){
    return(
        <View
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.radius,
          alignItems: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
       {children}
      </View>
    )
}
export default CardComponent;