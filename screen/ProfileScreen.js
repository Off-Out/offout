import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, AsyncStorage } from 'react-native';
// import Button from 'react-native-button'
// import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Form, Item, Label, Input, Button, Text } from 'native-base';
import firebase from '../firebase/firebase';

export default class ProfileScreen extends Component {
  constructor() {
    super();

    this.state = {
      name: 'EventPal',
      email: 'eventPal@gmail.com',
      location: '60605',
    };
  }
  
  async componentDidMount() {
    const { navigation } = this.props;
    console.log(navigation, "navigation")
    console.log(navigation.getParam("userId"))
    // const user = await firebase.database().ref(`/users/${navigation.getParam('userId')}`).once('value', (snapshot) => console.log(snapshot.val()));
    // console.log(user)

    // + this.props.navigation.navigate.getParam(userID)).once('value');
    // console.log("what is user", user)
    // this.setState(
    //   email: user.email
    // })
  }

  handleName = text => this.setState({ name: text });
  handleEmail = text => this.setState({ email: text });
  handleLocation = text => this.setState({ location: text });

  render() {
    return (
      <Form style={styles.form}>
        <Image
          source={require('../user-account-icon-13.jpg')}
          style={styles.image}
        />
        <Item stackedLabel style={styles.item}>
          <Label style={styles.label}>NAME</Label>
          <Input
            style={styles.input}
            name="name"
            value={this.state.name}
            onChangeText={this.handleName}
          />
        </Item>
        <Item stackedLabel style={styles.item}>
          <Label style={styles.label}>EMAIL</Label>
          <Input
            style={styles.input}
            keyboardType="email-address"
            name="email"
            value={this.state.email}
            onChangeText={this.handleEmail}
          />
        </Item>
        <Item stackedLabel style={styles.item}>
          <Label style={styles.label}>LOCATION</Label>
          <Input
            style={styles.input}
            keyboardType={'numeric'}
            style={styles.input}
            name="location"
            value={this.state.location}
          />
        </Item>
        <Button transparent danger style={styles.button}>
          <Text>SAVE</Text>
        </Button>
        <Button
          transparent
          danger
          style={styles.button}
          onPress={() =>
            firebase
              .auth()
              .signOut()
              .then(() => {
                console.log('Sign Out!');
                this.props.navigation.navigate('Auth');
              })
          }
        >
          <Text>LOG OUT</Text>
        </Button>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  item: {
    borderColor: 'transparent',
  },
  label: {
    marginLeft: 13,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 55,
  },

  input: {
    marginLeft: 13,
    fontSize: 17,
    marginRight: 25,
    paddingTop: 13,
    marginBottom: 10,
    borderColor: 'indianred',
    borderBottomWidth: 0.5,
  },

  button: {
    margin: 13,
  },
});
