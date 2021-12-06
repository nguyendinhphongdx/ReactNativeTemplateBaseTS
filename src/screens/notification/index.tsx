import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const NotificationScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Notification Screen</Text>
        <Button
          title="Click Here"
          onPress={() => Alert.alert('Button Clicked!')}
        />
      </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});