import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function SafetyScreen() {
  const safetyTools = [
    {
      id: 1,
      title: 'Fake Call',
      description: 'Simulate an incoming call to exit uncomfortable situations'
    },
    {
      id: 2,
      title: 'Quick Record',
      description: 'Instantly start recording video evidence'
    },
    {
      id: 3,
      title: 'Shake to Alert',
      description: 'Shake your phone to send emergency signal'
    },
    {
      id: 4,
      title: 'Safe Route',
      description: 'Find the safest route to your destination'
    },
    {
      id: 5,
      title: 'Live Stream',
      description: 'Stream live video to trusted contacts'
    },
    {
      id: 6,
      title: 'Voice Command',
      description: 'Activate features with voice commands'
    }
  ];

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 p-6">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-3xl font-bold text-gray-900">Safety Tools</Text>
          <Text className="text-lg text-gray-600 mt-2">
            Features to help you stay protected
          </Text>
        </View>

        <View className="h-px bg-gray-200 my-4" />

        {/* Safety Tools List */}
        <View className="space-y-4">
          {safetyTools.map((tool) => (
            <SafetyToolCard key={tool.id} tool={tool} />
          ))}
        </View>

        {/* Safety Tips */}
        <TouchableOpacity className="mt-8 bg-blue-50 p-4 rounded-2xl border border-blue-200">
          <Text className="text-lg font-semibold text-blue-800 text-center">
            Safety Tips
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

type SafetyTool = {
  id: number;
  title: string;
  description: string;
};

function SafetyToolCard({ tool }: { tool: SafetyTool }) {
  return (
    <TouchableOpacity className="bg-white rounded-2xl border border-gray-200 p-4">
      <Text className="text-xl font-semibold text-gray-900">{tool.title}</Text>
      <Text className="text-gray-600 mt-2">{tool.description}</Text>
    </TouchableOpacity>
  );
}