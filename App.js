import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  withNavigation
} from 'react-navigation';
import {
  ProfileScreen,
  HomeScreen,
  MapScreen,
  ChatScreen,
  LoginScreen,
  AuthLoadingScreen,
} from './screen';

const TabNavigator = createBottomTabNavigator({
  Profile: ProfileScreen,
  Home: HomeScreen,
  Map: MapScreen,
  Chat: ChatScreen,
});

const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthStack,
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
  })
);

