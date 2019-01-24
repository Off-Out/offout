import React, { Component } from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import { Container } from 'native-base';
import { SignUpSection, LoginForm } from '../component/index';
import firebase from '../firebase/firebase';
import { withNavigation } from 'react-navigation';

// const config = {
//   apiKey: 'AIzaSyDASrTzVRRqiSk1tnLhkjS2iN2AQvFjAMc',
//   authDomain: 'eventpal-40e2c.firebaseapp.com',
//   databaseURL: 'https://eventpal-40e2c.firebaseio.com',
//   projectId: 'eventpal-40e2c',
//   storageBucket: 'eventpal-40e2c.appspot.com',
//   messagingSenderId: '963629551224',
// };

// firebase.initializeApp(config);

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'gracehopper@eventpal.com',
      password: '123456',
    };
  }

  handleUserInput = (stateField, text) => {
    this.setState({
      [stateField]: text,
    });
  };

  createUserAccount = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  login = async (email, password) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const { uid } = user;
      if (uid) {
        this.props.navigation.navigate('App', {
          userID: uid,
        });
      }
    } catch (error) {
      Alert.alert('Username/Password does not match');
      console.log(error.toString());
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.image}>
          <Image source={require('../image/epLogo.png')} />
        </View>
        <View style={styles.formContainer}>
          <LoginForm handleUserInput={this.handleUserInput} />
          <SignUpSection
            createUserAccount={this.createUserAccount}
            login={this.login}
            credential={this.state}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  formContainer: {
    flex: 1,
  },
});

export default LoginScreen;
