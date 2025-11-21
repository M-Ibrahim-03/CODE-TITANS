import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Settings: undefined;
  // Add other screens here if needed
};

export default function ProfileScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  type MenuItem = {
    id: number;
    title: string;
    screen: "Settings";
  };

  const menuItems: MenuItem[] = [
    { id: 1, title: 'Personal Information', screen: 'Settings' },
    { id: 2, title: 'Privacy & Security', screen: 'Settings' },
    { id: 3, title: 'Preferences', screen: 'Settings' },
    { id: 4, title: 'Notifications', screen: 'Settings' },
    { id: 5, title: 'Location Services', screen: 'Settings' },
    { id: 6, title: 'Emergency Settings', screen: 'Settings' },
  ];

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 p-6">
        {/* Profile Header */}
        <View className="items-center mb-8">
          <View className="w-20 h-20 bg-blue-500 rounded-full items-center justify-center mb-4">
            <Text className="text-white text-2xl font-bold">SJ</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-900">Sarah Johnson</Text>
          <Text className="text-gray-600 mt-1">sarah.johnson@email.com</Text>
          <View className="bg-yellow-100 px-3 py-1 rounded-full mt-2">
            <Text className="text-yellow-800 font-semibold">Premium Member</Text>
          </View>
        </View>

        {/* Theme Toggle */}
        <View className="flex-row justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-200 mb-6">
          <Text className="text-lg font-semibold text-gray-900">Light Mode</Text>
          <View className="w-12 h-6 bg-blue-500 rounded-full">
            {/* Toggle switch would go here */}
          </View>
        </View>

        {/* Account Section */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Account</Text>
          <View className="space-y-2">
            {menuItems.map((item) => (
              <TouchableOpacity 
                key={item.id}
                className="bg-gray-50 p-4 rounded-2xl border border-gray-200"
                onPress={() => navigation.navigate(item.screen)}
              >
                <Text className="text-gray-900 font-medium">{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* App Version */}
        <View className="items-center mt-8">
          <Text className="text-gray-500">SafeGuard v2.4.1</Text>
        </View>
      </ScrollView>
    </View>
  );
}