import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Text, View } from 'react-native';
import ContactsScreen from './ContactsScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SafetyScreen from './SafetyScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';
          let label: string = '';

          if (route.name === 'Home') {
            iconName = '🏠';
            label = 'Home';
          } else if (route.name === 'Contacts') {
            iconName = '👥';
            label = 'Contacts';
          } else if (route.name === 'Safety') {
            iconName = '🛡️';
            label = 'Safety';
          } else if (route.name === 'Profile') {
            iconName = '👤';
            label = 'Profile';
          } else if (route.name === 'Settings') {
            iconName = '⚙️';
            label = 'Settings';
          }

          return (
            <TabBarIcon
              focused={focused}
              iconName={iconName}
              label={label}
            />
          );
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#f3f4f6',
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Safety" component={SafetyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

type TabBarIconProps = {
  focused: boolean;
  iconName: string;
  label: string;
};

const TabBarIcon = ({ focused, iconName, label }: TabBarIconProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (focused) {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1.2,
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        })
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        })
      ]).start();
    }
  }, [focused]);

  return (
    <View className="flex-1 items-center justify-center">
      <Animated.View
        style={{
          transform: [{ scale: scaleAnim }],
        }}
        className={`p-3 rounded-2xl ${focused ? 'bg-pink-50' : ''}`}
      >
        <Text
          className={`text-lg ${focused ? 'text-pink-600' : 'text-gray-400'}`}
          style={{
            textShadowColor: focused ? 'rgba(236, 72, 153, 0.3)' : 'transparent',
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: focused ? 10 : 0,
          }}
        >
          {iconName}
        </Text>
      </Animated.View>

      {/* Animated Label */}
      <Animated.Text
        style={{
          opacity: fadeAnim,
          transform: [{
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [5, 0]
            })
          }]
        }}
        className={`text-xs font-semibold mt-1 ${focused ? 'text-pink-600' : 'text-gray-400'}`}
      >
        {label}
      </Animated.Text>

      {/* Active Indicator */}
      {focused && (
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ scale: fadeAnim }]
          }}
          className="absolute -top-1 w-1.5 h-1.5 bg-pink-500 rounded-full"
        />
      )}
    </View>
  );
};

// Alternative Floating Tab Bar Design (Uncomment to use)
/*
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let label;
          
          if (route.name === 'Home') {
            iconName = '🏠';
            label = 'Home';
          } else if (route.name === 'Contacts') {
            iconName = '👥';
            label = 'Contacts';
          // } else if (route.name === 'Safety') {
            iconName = '🛡️';
            label = 'Safety';
          } else if (route.name === 'Profile') {
            iconName = '👤';
            label = 'Profile';
          }

          return (
            <FloatingTabIcon 
              focused={focused} 
              iconName={iconName} 
              label={label} 
            />
          );
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          height: 90,
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarShowLabel: false,
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
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

const FloatingTabIcon = ({ focused, iconName, label }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (focused) {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1.3,
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.spring(translateYAnim, {
          toValue: -8,
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        })
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.spring(translateYAnim, {
          toValue: 0,
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        })
      ]).start();
    }
  }, [focused]);

  return (
    <Animated.View 
      style={{ 
        transform: [
          { scale: scaleAnim },
          { translateY: translateYAnim }
        ] 
      }}
      className="items-center justify-center"
    >
      <View 
        className={`w-14 h-14 rounded-2xl items-center justify-center shadow-lg ${
          focused 
            ? 'bg-gradient-to-r from-pink-500 to-pink-600 shadow-pink-200' 
            : 'bg-white shadow-gray-200'
        }`}
      >
        <Text 
          className={`text-lg ${focused ? 'text-white' : 'text-gray-400'}`}
        >
          {iconName}
        </Text>
      </View>
      
      <Text 
        className={`text-xs font-semibold mt-2 ${
          focused ? 'text-pink-600' : 'text-gray-400'
        }`}
      >
        {label}
      </Text>
    </Animated.View>
  );
};
*/