import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, AsyncStorage } from 'react-native';

export default class ProfileScreen extends Component {
  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  render() {
    const { navigation } = this.props;
    console.log(navigation);
    const userID = navigation.getParam('userID', null);
    console.log(userID);
    return (
      <View style={styles.container}>
        <Text />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
