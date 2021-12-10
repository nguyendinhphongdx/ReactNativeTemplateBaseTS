import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from "react-native";
import { FONTS } from "../../constant";

const Tab = createMaterialTopTabNavigator();

function TabViewComponent(props:{router:Array<{name:string,component:React.ComponentType<any>}>}) {
    const {router}= props;
    return (
    <Tab.Navigator 
    screenOptions={{
        tabBarLabelStyle: { ...FONTS.h4},
        tabBarActiveTintColor: '#e91e63',
      }}
    >
        {router.map((item,index)=>{
            return(
                <Tab.Screen key={index} name={item.name} component={item.component} />
            );
        })}
    </Tab.Navigator>
  );
}
export default TabViewComponent;
