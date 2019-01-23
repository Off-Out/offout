import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { ProfileScreen, HomeScreen, MapScreen, ChatScreen } from './screen';

const TabNavigator = createBottomTabNavigator({
  Profile: ProfileScreen,
  Home: HomeScreen,
  Map: MapScreen,
  Chat: ChatScreen,
});

export default createAppContainer(TabNavigator);
