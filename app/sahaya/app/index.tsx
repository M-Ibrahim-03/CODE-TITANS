import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import BottomTabNavigator from './components/BottomTabNavigator';

export default function App() {
return (
    <> {/* You can use a Fragment or View here if needed */}
      <StatusBar barStyle="light-content" />
      <BottomTabNavigator />
    </>
  );
}