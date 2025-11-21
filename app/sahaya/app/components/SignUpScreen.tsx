import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation<any>();

  type FormData = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1"
      >
        <View className="flex-1 justify-center p-8">
          {/* Header */}
          <View className="items-center mb-12">
            <Text className="text-4xl font-bold text-gray-900 mb-4">Create Account</Text>
            <Text className="text-lg text-gray-600 text-center">
              Join SafeGuard to protect yourself and your loved ones
            </Text>
          </View>

          {/* Form Inputs */}
          <View className="space-y-4 mb-8">
            <TextInput
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-lg"
              placeholder="Full Name"
              value={formData.fullName}
              onChangeText={(value) => handleInputChange('fullName', value)}
              placeholderTextColor="#9CA3AF"
            />
            
            <TextInput
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-lg"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              placeholderTextColor="#9CA3AF"
            />
            
            <TextInput
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-lg"
              placeholder="Password"
              secureTextEntry
              value={formData.password}
              onChangeText={(value) => handleInputChange('password', value)}
              placeholderTextColor="#9CA3AF"
            />
            
            <TextInput
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-lg"
              placeholder="Confirm Password"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={(value) => handleInputChange('confirmPassword', value)}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity 
            className="bg-blue-500 rounded-2xl py-4 mb-6"
            onPress={() => navigation.navigate('Home')}
          >
            <Text className="text-white text-center text-lg font-semibold">Create Account</Text>
          </TouchableOpacity>

          {/* Social Sign Up Buttons */}
          <View className="space-y-4 mb-8">
            <TouchableOpacity className="bg-white border border-gray-200 rounded-2xl py-4 flex-row justify-center items-center">
              <Text className="text-gray-700 text-lg font-medium">Sign up with Google</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="bg-white border border-gray-200 rounded-2xl py-4 flex-row justify-center items-center">
              <Text className="text-gray-700 text-lg font-medium">Sign up with Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Login Link */}
          <View className="items-center">
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-gray-600">
                Already have an account? <Text className="text-blue-500 font-semibold">Log In</Text>
              </Text>
            </TouchableOpacity>
          </View>

          {/* Terms and Privacy */}
          <View className="mt-8 px-4">
            <Text className="text-center text-gray-500 text-xs">
              By creating an account, you agree to our{' '}
              <Text className="text-blue-500">Terms of Service</Text> and{' '}
              <Text className="text-blue-500">Privacy Policy</Text>
            </Text>
          </View>

          {/* Security Notice */}
          <View className="mt-6 px-4">
            <Text className="text-center text-gray-500 text-sm">
              Your privacy and safety are our top priority. All data is encrypted and secure.
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}