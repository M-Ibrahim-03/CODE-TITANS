import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import ContactsScreen from './ContactsScreen';
import SafetyScreen from './SafetyScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            return (
              <View className={`p-2 rounded-full ${focused ? 'bg-blue-100' : ''}`}>
                <Text className={`font-semibold ${focused ? 'text-blue-600' : 'text-gray-500'}`}>
                  🏠
                </Text>
              </View>
            );
          } else if (route.name === 'Contacts') {
            return (
              <View className={`p-2 rounded-full ${focused ? 'bg-blue-100' : ''}`}>
                <Text className={`font-semibold ${focused ? 'text-blue-600' : 'text-gray-500'}`}>
                  👥
                </Text>
              </View>
            );
          } else if (route.name === 'Safety') {
            return (
              <View className={`p-2 rounded-full ${focused ? 'bg-blue-100' : ''}`}>
                <Text className={`font-semibold ${focused ? 'text-blue-600' : 'text-gray-500'}`}>
                  🛡️
                </Text>
              </View>
            );
          } else if (route.name === 'Profile') {
            return (
              <View className={`p-2 rounded-full ${focused ? 'bg-blue-100' : ''}`}>
                <Text className={`font-semibold ${focused ? 'text-blue-600' : 'text-gray-500'}`}>
                  👤
                </Text>
              </View>
            );
          }
        },
        tabBarLabel: ({ focused, color }) => {
          return (
            <Text className={`text-xs ${focused ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
              {route.name}
            </Text>
          );
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#e5e5e5',
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Safety" component={SafetyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen 
  name="Settings" 
  component={SettingsScreen}
  options={{
    tabBarButton: () => null, // This hides the tab bar for Settings
  }}
/>
    </Tab.Navigator>
  );
}