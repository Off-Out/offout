import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, AsyncStorage } from 'react-native';

export default class ProfileScreen extends Component {
  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
