import {Box} from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
const data = [
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45ass', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
  ];
function TimelineContainer() {
  return (
    <View style={styles.box}>
      <Timeline
        data={data}
        style={{marginTop: 5, flex: 1}}
        circleSize={20}
        lineColor="rgb(45,156,219)"
        timeContainerStyle={{minWidth: 52, marginTop: -5}}
        timeStyle={{
          textAlign: 'center',
          backgroundColor: '#ff9797',
          color: 'white',
          padding: 5,
          borderRadius: 13,
          maxWidth:52
        }}
        descriptionStyle={{color: 'gray'}}
        options={{
          style: {paddingTop: 5},
        }}
        innerCircle={'dot'}
        //   onEventPress={this.onEventPress}
        separator={false}
        detailContainerStyle={{
          marginBottom: 20,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: '#BBDAFF',
          borderRadius: 10,
        }}
        isUsingFlatlist={true}
        listViewContainerStyle={{paddingHorizontal: 10}}
      />
    </View>
  );
}
export default TimelineContainer;
const styles = StyleSheet.create({
    box: {shadowColor: "#000",
    flex: 1,
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: .3,
    elevation: 5,}
})
