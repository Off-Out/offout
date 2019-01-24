import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import Button from 'react-native-button'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class ProfileScreen extends Component {
  constructor() {
    super() 

    this.state = {
      name: 'EventPal',
      email: 'eventPal@gmail.com',
      location: "60605",
    }
  }

  handleName = text => this.setState({ name: text })
  handleEmail = text => this.setState({ email: text })
  handleLocation = text => this.setState({ location: text })



  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../user-account-icon-13.jpg')} style={styles.image}/>
        <FormLabel style={styles.inputField}>NAME</FormLabel>
        <TextInput style={styles.inputValue} name="name" value={this.state.name} onChangeText={this.handleName}/>
        <FormLabel style={styles.inputField}>E-MAIL ADDRESS</FormLabel>
        <TextInput style={styles.inputValue} keyboardType="email-address" name="email" value={this.state.email} onChangeText={this.handleEmail} />
        {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}
        <FormLabel style={styles.inputField}>DEFAULT LOCATION</FormLabel>
        <TextInput keyboardType={"numeric"} style={styles.inputValue} name="location" value={this.state.location} onChangeText={this.handleLocation} />
        <Button style={styles.button} >SAVE</Button>
        <Button style={styles.button}>LOG OUT</Button>
      
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
    marginBottom: 55,
  },

  inputValue: {
    fontSize: 17,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 5,
    borderColor: "indianred",
    borderBottomWidth: 0.5,
    alignSelf: "stretch",
  },
  button: {
    color: "palevioletred",
    fontWeight: "bold",
    marginLeft: 20,
    paddingTop: 30,
  }
});
