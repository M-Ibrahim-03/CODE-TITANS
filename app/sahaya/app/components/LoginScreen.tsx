import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    SignUp: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function LoginScreen() {
    const navigation = useNavigation<any>();
    const [password, setPassword] = useState('');

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
                        <Text className="text-4xl font-bold text-gray-900 mb-4">Sahaya</Text>
                        <Text className="text-lg text-gray-600">Enter your password</Text>
                    </View>

                    {/* Password Input */}
                    <View className="mb-8">
                        <TextInput
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-lg"
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor="#9CA3AF"
                        />
                    </View>

                    {/* Continue Button */}
                    <TouchableOpacity
                        className="bg-blue-500 rounded-2xl py-4 mb-6"
                        onPress={() => {
                            // Navigate to the main tab navigator (which shows Home by default)
                            navigation.navigate('Main');
                        }}
                    >
                        <Text className="text-white text-center text-lg font-semibold">Continue</Text>
                    </TouchableOpacity>

                    {/* Social Login Buttons */}
                    <View className="space-y-4 mb-8">
                        <TouchableOpacity className="bg-white border border-gray-200 rounded-2xl py-4 flex-row justify-center items-center">
                            <Text className="text-gray-700 text-lg font-medium">Continue with Google</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Sign Up Link */}
                    <View className="items-center">
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text className="text-gray-600">
                                Don't have an account? <Text className="text-blue-500 font-semibold">Sign Up</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Privacy Notice */}
                    <View className="mt-12 px-4">
                        <Text className="text-center text-gray-500 text-sm">
                            Your privacy and safety are our top priority. All data is encrypted and secure.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}   