import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, Alert, Picker } from 'react-native';

export default class HomeScreen extends Component {
  handlePress() {
    Alert.alert('COOL THINGS HAPPENING HERE!');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.picker}>
          <Text style={StyleSheet.title}>Hey, PAL!</Text>
          <Text>what do you want to do today?</Text>
          <Picker selectedValue="VALUE" style={styles.picker}>
            <Picker.Item
              label="What do you want to do today"
              value="entertainment"
            />

            <Picker.Item label="Entertainment" value="entertainment" />
            <Picker.Item label="Sports" value="sports" />
            <Picker.Item label="Foods" value="foods" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>

          <Picker selectedValue="VALUE" style={styles.picker}>
            <Picker.Item label="TIME" value="time" />
            <Picker.Item label="Morning" value="morning" />
            <Picker.Item label="Afternoon" value="afternoon" />
            <Picker.Item label="Evening" value="evening" />
            <Picker.Item label="After Hours" value="afterHours" />
          </Picker>
        </View>
        <Button onPress={this.handlePress} title="events" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',

    flexDirection: 'column',

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  picker: {
    justifyContent: 'space-between',
  },
});
