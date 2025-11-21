import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Animated, Easing, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

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

    // Animation values
    const fadeAnim = useState(new Animated.Value(0))[0];
    const slideUpAnim = useState(new Animated.Value(30))[0];
    const logoScale = useState(new Animated.Value(0.8))[0];
    const buttonScale = useState(new Animated.Value(1))[0];

    useEffect(() => {
        // Start animations when component mounts
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(slideUpAnim, {
                toValue: 0,
                duration: 600,
                easing: Easing.out(Easing.cubic),
                useNativeDriver: true,
            }),
            Animated.spring(logoScale, {
                toValue: 1,
                friction: 4,
                tension: 40,
                useNativeDriver: true,
            })
        ]).start();
    }, []);

    const handlePressIn = () => {
        Animated.spring(buttonScale, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(buttonScale, {
            toValue: 1,
            friction: 4,
            tension: 50,
            useNativeDriver: true,
        }).start();
    };

    const handleSignUp = () => {
        // Button press animation
        Animated.sequence([
            Animated.spring(buttonScale, {
                toValue: 0.9,
                useNativeDriver: true,
            }),
            Animated.spring(buttonScale, {
                toValue: 1,
                friction: 4,
                tension: 50,
                useNativeDriver: true,
            })
        ]).start(() => {
            // Navigate after animation
            navigation.navigate('Login');
        });
    };

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
                showsVerticalScrollIndicator={false}
            >
                <View className="flex-1 justify-center p-8 bg-gradient-to-b from-white to-pink-50">
                    
                    {/* Animated Header */}
                    <Animated.View 
                        className="items-center mb-8"
                        style={{
                            opacity: fadeAnim,
                            transform: [
                                { translateY: slideUpAnim },
                                { scale: logoScale }
                            ]
                        }}
                    >
                        <Text className="text-4xl font-bold text-pink-500 mb-4 text-center">Create Account</Text>
                        <Text className="text-lg text-gray-600 text-center">
                            Join Sahaya to protect yourself and your loved ones
                        </Text>
                    </Animated.View>

                    {/* Form Inputs with Animation */}
                    <Animated.View 
                        className="mb-4"
                        style={{
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }]
                        }}
                    >
                        {/* Full Name Input */}
                        <View className="mb-4">
                            <Text className="text-gray-700 text-sm font-medium mb-2 ml-1">Full Name</Text>
                            <TextInput
                                className="w-full bg-white border-2 border-pink-100 rounded-2xl px-6 py-4 text-lg shadow-sm"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChangeText={(value) => handleInputChange('fullName', value)}
                                placeholderTextColor="#9CA3AF"
                                selectionColor="#EC4899"
                            />
                        </View>

                        {/* Email Input */}
                        <View className="mb-4">
                            <Text className="text-gray-700 text-sm font-medium mb-2 ml-1">Email</Text>
                            <TextInput
                                className="w-full bg-white border-2 border-pink-100 rounded-2xl px-6 py-4 text-lg shadow-sm"
                                placeholder="Enter your email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={formData.email}
                                onChangeText={(value) => handleInputChange('email', value)}
                                placeholderTextColor="#9CA3AF"
                                selectionColor="#EC4899"
                            />
                        </View>

                        {/* Password Input */}
                        <View className="mb-4">
                            <Text className="text-gray-700 text-sm font-medium mb-2 ml-1">Password</Text>
                            <TextInput
                                className="w-full bg-white border-2 border-pink-100 rounded-2xl px-6 py-4 text-lg shadow-sm"
                                placeholder="Enter your password"
                                secureTextEntry
                                value={formData.password}
                                onChangeText={(value) => handleInputChange('password', value)}
                                placeholderTextColor="#9CA3AF"
                                selectionColor="#EC4899"
                            />
                        </View>

                        {/* Confirm Password Input */}
                        <View className='py-5'>
                            <Text className="text-gray-700 text-sm font-medium mb-2 ml-1">Confirm Password</Text>
                            <TextInput
                                className="w-full bg-white border-2 border-pink-100 rounded-2xl px-6 py-4 text-lg shadow-sm"
                                placeholder="Confirm your password"
                                secureTextEntry
                                value={formData.confirmPassword}
                                onChangeText={(value) => handleInputChange('confirmPassword', value)}
                                placeholderTextColor="#9CA3AF"
                                selectionColor="#EC4899"
                            />
                        </View>
                    </Animated.View>

                    {/* Sign Up Button with Animation */}
                    <View className="mb-6">
                        <Animated.View
                            style={{
                                transform: [{ scale: buttonScale }]
                            }}
                        >
                            <TouchableOpacity
                                className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl py-4 shadow-lg"
                                onPress={handleSignUp}
                                onPressIn={handlePressIn}
                                onPressOut={handlePressOut}
                                activeOpacity={0.9}
                            >
                                <Text className="text-white text-center text-lg font-bold">Create Account</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>

                    {/* Divider */}
                    <Animated.View 
                        className="flex-row items-center mb-6"
                        style={{
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }]
                        }}
                    >
                        <View className="flex-1 h-px bg-gray-200" />
                        <Text className="mx-4 text-gray-500 text-sm text-center">or sign up with</Text>
                        <View className="flex-1 h-px bg-gray-200" />
                    </Animated.View>

                    {/* Social Sign Up Buttons with Animation */}
                    <Animated.View 
                        className="space-y-4 mb-6"
                        style={{
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }]
                        }}
                    >
                        <TouchableOpacity 
                            className="bg-white border-2 border-gray-100 rounded-2xl py-4 flex-row justify-center items-center shadow-sm active:scale-95"
                            activeOpacity={0.8}
                        >
                            <Text className="text-gray-700 text-lg font-medium">Sign up with Google</Text>
                        </TouchableOpacity> 
                    </Animated.View>

                    {/* Login Link with Animation */}
                    <Animated.View 
                        className="items-center mb-8"
                        style={{
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }]
                        }}
                    >
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Login')}
                            activeOpacity={0.7}
                        >
                            <Text className="text-gray-600 text-center py-5">
                                Already have an account? <Text className="text-pink-500 font-bold">Log In</Text>
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>

                    {/* Terms and Privacy with Animation */}
                    <Animated.View 
                        className="mb-4 px-4"
                        style={{
                            opacity: fadeAnim,
                        }}
                    >
                        <Text className="text-center text-gray-500 text-xs">
                            By creating an account, you agree to our{' '}
                            <Text className="text-pink-500 font-semibold">Terms of Service</Text> and{' '}
                            <Text className="text-pink-500 font-semibold">Privacy Policy</Text>
                        </Text>
                    </Animated.View>

                    {/* Security Notice with Animation */}
                    <Animated.View 
                        className="px-4"
                        style={{
                            opacity: fadeAnim,
                        }}
                    >
                        <Text className="text-center text-gray-400 text-xs">
                            🔒 Your privacy and safety are our top priority.{'\n'}
                            All data is encrypted and secure.
                        </Text>
                    </Animated.View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}