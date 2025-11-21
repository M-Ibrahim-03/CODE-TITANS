import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function ContactsScreen() {
  const contacts = [
    {
      id: 1,
      name: 'Mom',
      relationship: 'Mother',
      phone: '+1 234-567-8901'
    },
    {
      id: 2,
      name: 'Best Friend Emma',
      relationship: 'Friend',
      phone: '+1 234-567-8902'
    },
    {
      id: 3,
      name: 'Sister Lisa',
      relationship: 'Sister',
      phone: '+1 234-567-8903'
    }
  ];

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 p-6">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-3xl font-bold text-gray-900">Emergency Contacts</Text>
          <Text className="text-lg text-gray-600 mt-2">2 primary contacts</Text>
          <Text className="text-gray-500 mt-1">
            These contacts will be notified when you trigger an emergency alert
          </Text>
        </View>

        <View className="h-px bg-gray-200 my-4" />

        {/* Contacts List */}
        <View className="space-y-6">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function ContactCard({ contact }: { contact: { id: number; name: string; relationship: string; phone: string } }) {
  return (
    <View className="bg-white rounded-2xl border border-gray-200 p-4">
      <Text className="text-xl font-semibold text-gray-900">{contact.name}</Text>
      <Text className="text-gray-600 mt-1">{contact.relationship}</Text>
      <Text className="text-gray-800 mt-2 font-medium">{contact.phone}</Text>
      
      <View className="flex-row space-x-4 mt-4">
        <TouchableOpacity className="flex-1 bg-blue-500 py-3 rounded-xl items-center">
          <Text className="text-white font-semibold">Call</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-green-500 py-3 rounded-xl items-center">
          <Text className="text-white font-semibold">Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}