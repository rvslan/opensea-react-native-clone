import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import Activity from '../components/Stats/Activity';
import Rankings from '../components/Stats/Rankings';

const Tab = createMaterialTopTabNavigator();

const Stats = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: 20,
        },
        tabBarItemStyle: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'rgb(0, 122, 255)',
          height: 5,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        },
      }}
    >
      <Tab.Screen
        name='Rankings'
        component={Rankings}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='stats-chart' size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Activity'
        component={Activity}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name='graph' size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Stats;
