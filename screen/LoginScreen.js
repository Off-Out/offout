import React, { Component } from 'react';
import { View, Image, StyleSheet, AsyncStorage } from 'react-native';
import { Container } from 'native-base';
import { SignUpSection, LoginForm } from '../component/index';
import firebase from '../firebase/firebase';


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleUserInput = (stateField, text) => {
    this.setState(
      {
        [stateField]: text,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  createUserAccount = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log("am i here?", authUser.user.uid)
        return firebase.database().ref(`users/${authUser.user.uid}`).set({email})
      })
    } catch (error) {
      console.log(error.toString());
    }
    this.props.navigation.navigate('App');
  };

  login = async (email, password) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(user);
      const { uid, email } = user;
      console.log(uid);
    } catch (error) {
      console.log(error.toString());
    }
    this.props.navigation.navigate('App');
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
