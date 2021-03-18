import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  HomeScreen: {screen: HomeScreen},
});

const AppContainer = createAppContainer(switchNavigator);

