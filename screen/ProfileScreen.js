import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class ProfileScreen extends Component {
  constructor() {
    super() 

    this.state = {
      "name": 'Christina',
      "email": 'christina0jin@gmail.com',
      "location": 60605,
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../user-account-icon-13.jpg')} style={styles.image}/>
        <FormLabel style={styles.inputField}>NAME</FormLabel>
        <FormInput style={styles.inputValue} name="name" value={this.state.name}></FormInput>
        <FormLabel style={styles.inputField}>E-MAIL ADDRESS</FormLabel>
        <FormInput style={styles.inputValue} name="email" value={this.state.email}></FormInput>
        {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}
        <FormLabel style={styles.inputField}>DEFAULT LOCATION</FormLabel>
        <FormInput style={styles.inputValue} name="location" value={this.state.location}></FormInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 75,
  },

});
