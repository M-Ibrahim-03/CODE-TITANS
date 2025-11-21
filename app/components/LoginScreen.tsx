import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Animated, Easing, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    SignUp: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function LoginScreen() {
    const navigation = useNavigation<any>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Animation values
    const fadeAnim = useState(new Animated.Value(0))[0];
    const slideUpAnim = useState(new Animated.Value(30))[0];
    const logoScale = useState(new Animated.Value(0.8))[0];
    const buttonScale = useState(new Animated.Value(1))[0];
    const imageScale = useState(new Animated.Value(0.5))[0];
    const imageRotate = useState(new Animated.Value(0))[0];

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
            }),
            Animated.spring(imageScale, {
                toValue: 1,
                friction: 5,
                tension: 40,
                useNativeDriver: true,
            }),
            Animated.timing(imageRotate, {
                toValue: 1,
                duration: 1000,
                easing: Easing.out(Easing.cubic),
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

    const handleContinue = () => {
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
            navigation.navigate('Main');
        });
    };

    const rotateInterpolate = imageRotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

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
                   <View className='justify-center items-center'> 
                    {/* Logo with Enhanced Animation */}
                    <Animated.View 
                        className="items-center mb-4"
                        style={{
                            opacity: fadeAnim,
                            transform: [
                                { scale: imageScale },
                                { rotate: rotateInterpolate }
                            ]
                        }}
                    >
                        <View className="w-32 h-32 rounded-3xl items-center justify-center">
                            <Image
                                source={require('../assets/images/logo.png')}
                                className="w-24 h-24 "
                                resizeMode="contain"
                            />99
                        </View>
                    </Animated.View>
                    </View> 
                    
                    {/* App Name */}
                    <Animated.View 
                        className="items-center mb-2"
                        style={{
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }]
                        }}
                    >
                        <Text className="text-4xl font-black text-pink-500 text-center mb-1">SAHAYA</Text>
                        <Text className="text-lg text-gray-500 text-center font-medium">
                            Safety & Protection
                        </Text>
                    </Animated.View>

                    {/* Welcome Text */}
                    <Animated.View 
                        className="items-center mb-8"
                        style={{
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }]
                        }}
                    >
                        <Text className="text-lg text-gray-600 text-center">
                            Welcome back! Sign in to continue
                        </Text>
                    </Animated.View>

                    {/* Input Fields with Animation */}
                    <Animated.View 
                        className="mb-4"
                        style={{
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }]
                        }}
                    >
                        {/* Email Input */}
                        <View className="mb-4">
                            <Text className="text-gray-700 text-sm font-semibold mb-3 ml-1">Email Address</Text>
                            <TextInput
                                className="w-full bg-white border-2 border-pink-100 rounded-2xl px-6 py-5 text-lg shadow-sm focus:border-pink-300"
                                placeholder="Enter your email"
                                value={email}
                                onChangeText={setEmail}
                                placeholderTextColor="#9CA3AF"
                                selectionColor="#EC4899"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        {/* Password Input */}
                        <View> 
                            <Text className="text-gray-700 text-sm font-semibold mb-3 ml-1">Password</Text>
                            <TextInput
                                className="w-full bg-white border-2 border-pink-100 rounded-2xl px-6 py-5 text-lg shadow-sm focus:border-pink-300"
                                placeholder="Enter your password"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                                placeholderTextColor="#9CA3AF"
                                selectionColor="#EC4899"
                            />
                        </View>
                    </Animated.View>

                    {/* Forgot Password */}
                    <Animated.View 
                        className="items-end mb-8"
                        style={{
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }]
                        }}
                    >
                        <TouchableOpacity className="px-2 py-1 items-center justify-center">
                            <Text className="text-pink-500 font-semibold text-base">Forgot Password?</Text>
                        </TouchableOpacity>
                    </Animated.View>

                    {/* Sign In Button */}
                    <View className="mb-6">
                        <Animated.View
                            style={{
                                transform: [{ scale: buttonScale }]
                            }}
                        >
                            <TouchableOpacity
                                className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl py-5 shadow-lg shadow-pink-200"
                                onPress={handleContinue}
                                onPressIn={handlePressIn}
                                onPressOut={handlePressOut}
                                activeOpacity={0.9}
                            >
                                <Text className="text-white text-center text-lg font-bold">Sign In</Text>
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
                        <View className="flex-1 h-px bg-gray-200 items-center justify-center" />
                        <Text className="mx-4 text-gray-500 text-sm font-medium">or continue with</Text>
                        <View className="flex-1 h-px bg-gray-200" />
                    </Animated.View>

                    {/* Social Login */}
                    <Animated.View 
                        className="mb-8"
                        style={{
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }]
                        }}
                    >
                        <TouchableOpacity 
                            className="bg-white border-2 border-gray-100 rounded-2xl py-4 flex-row justify-center items-center shadow-sm active:scale-95"
                            activeOpacity={0.8}
                        >
                            <Text className="text-gray-700 text-lg font-semibold">Continue with Google</Text>
                        </TouchableOpacity>
                    </Animated.View>

                    {/* Sign Up Link */}
                    <Animated.View 
                        className="items-center mb-8"
                        style={{
                            opacity: fadeAnim,
                            transform: [{ translateY: slideUpAnim }]
                        }}
                    >
                        <View className="flex-row">
                            <Text className="text-gray-600 text-center mr-1">
                                Don't have an account?
                            </Text>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('SignUp')}
                                activeOpacity={0.7}
                            >
                                <Text className="text-pink-500 font-bold text-base">Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>

                    {/* Security Badge */}
                    <Animated.View 
                        className="items-center"
                        style={{
                            opacity: fadeAnim,
                        }}
                    >
                        <View className="flex-row items-center bg-pink-50 rounded-2xl px-4 py-3">
                            <Text className="text-pink-500 mr-2">🔒</Text>
                            <View>
                                <Text className="text-pink-700 font-semibold text-sm">Bank-level Security</Text>
                                <Text className="text-pink-600 text-xs">Your data is encrypted and secure</Text>
                            </View>
                        </View>
                    </Animated.View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}