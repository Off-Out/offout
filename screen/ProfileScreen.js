import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, AsyncStorage } from 'react-native';

export default class ProfileScreen extends Component {
  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({});
