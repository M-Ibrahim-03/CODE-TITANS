import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 p-6">
        {/* Header */}
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-gray-900">Emergency SOS</Text>
          <Text className="text-lg text-gray-600 mt-2">Press & Hold</Text>
        </View>

        {/* SOS Button */}
        <TouchableOpacity className="items-center mb-8">
          <View className="w-32 h-32 bg-red-500 rounded-full items-center justify-center shadow-lg">
            <Text className="text-white text-xl font-bold">SOS</Text>
          </View>
        </TouchableOpacity>

        {/* Quick Actions */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</Text>
          
          <View className="space-y-4">
            <QuickActionItem 
              title="Share Location"
              subtitle="Send your live location"
            />
            <QuickActionItem 
              title="Fake Call"
              subtitle="Simulate an incoming call"
            />
            <QuickActionItem 
              title="Loud Alarm"
              subtitle="Activate emergency siren"
            />
            <QuickActionItem 
              title="Safety Status"
            />
          </View>
        </View>

        {/* Status Card */}
        <View className="bg-green-50 p-4 rounded-2xl border border-green-200">
          <Text className="text-lg font-semibold text-green-800">All systems active</Text>
          <Text className="text-green-600 mt-1">Protected</Text>
        </View>
      </ScrollView>
    </View>
  );
}

function QuickActionItem({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <TouchableOpacity className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
      <Text className="text-lg font-semibold text-gray-900">{title}</Text>
      {subtitle && <Text className="text-gray-600 mt-1">{subtitle}</Text>}
    </TouchableOpacity>
  );
}