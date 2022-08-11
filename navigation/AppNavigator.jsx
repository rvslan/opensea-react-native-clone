import { View, Text, Pressable } from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Profile, More, Stats, Search } from '../screens';
import {
  Entypo,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22,
        },
        tabBarButton: ({ accessibilityState, style, children, ...props }) => (
          <Pressable
            accessibilityState={accessibilityState}
            {...props}
            style={style}
          >
            {accessibilityState.selected && (
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  height: 5,
                  width: '50%',
                  backgroundColor: 'rgb(0, 122, 255)',
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              ></View>
            )}
            {children}
          </Pressable>
        ),
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'OpenSea',
          tabBarIcon: ({ color, size }) => (
            <Entypo name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Stats'
        component={Stats}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='stats-chart' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='search' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='account-circle-outline'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='More'
        component={More}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name='menu' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
