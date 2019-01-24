import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, Alert, Picker } from 'react-native';

const dummyDataCategory = [
  { category: 'Entertainment', id: 1 },
  { category: 'Sports', id: 2 },
  { category: 'Food', id: 3 },
  { category: 'Bars/Night', id: 4 },
];
const dummyDataTime = [
  { time: 'morning', id: 1 },
  { time: 'afternoon', id: 2 },
  { time: 'evening', id: 3 },
  { time: 'after hours', id: 4 },
];

const dummyDataLocation = [
  {
    defaultLocation: [-87.639035, 41.895266],
    previousLocations: [],
  },
];

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      time: '',
      location: '',
    };
    this.handlePress = this.handlePress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handlePress() {
    Alert.alert('COOL THINGS HAPPENING HERE!');
  }
  handleChange(itemValue, label, whatElse) {
    this.setState({ [whatElse]: itemValue });
    //thunk action here to add to db
  }
  render() {
    return (
      <View styles={styles.container}>
        <View styles={{ flex: 2 }}>
          <Text styles={{ textAlign: 'center' }}>
            What Do YOU Want To Do Today?
          </Text>
        </View>
        <View styles={{ flex: 1 }}>
          <Picker
            selectedValue={this.state.category}
            onValueChange={(itemValue, label) =>
              this.handleChange(itemValue, label, 'category')
            }
          >
            {dummyDataCategory.map(event => (
              <Picker.Item
                key={event.id}
                label={event.category}
                value={event.category}
              />
            ))}
          </Picker>
          <Picker
            selectedValue={this.state.time}
            onValueChange={(itemValue, label) =>
              this.handleChange(itemValue, label, 'time')
            }
            value="time"
          >
            {dummyDataTime.map(opt => (
              <Picker.Item key={opt.id} label={opt.time} value={opt.time} />
            ))}
          </Picker>

          <Picker
            selectedValue={this.state.location}
            onValueChange={(itemValue, label) =>
              this.handleChange(itemValue, label, 'location')
            }
          >
            <Picker.Item label="CURRENT LOCATION" value="location" />
          </Picker>
        </View>

        <Button onPress={this.handlePress} title="events" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'steelblue',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  pickerBox: {
    flex: 3,
  },
});
