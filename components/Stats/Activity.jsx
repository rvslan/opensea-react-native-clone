import { View, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import Picker from './Picker';
import Stat from './Stat';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Activity = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.top}>
        <Picker
          LeftItem={
            <MaterialCommunityIcons name='cart' size={24} color='gray' />
          }
          label='Sales'
        />
        <Picker
          LeftItem={<Ionicons name='link' size={24} color='gray' />}
          label='All chains'
        ></Picker>
      </View>
      <ScrollView style={styles.main}>
        <Stat
          order={1}
          type='activity'
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 100)
          }
          username='Satya Nadella'
          price='1.8'
        >
          ⁄
        </Stat>
        <Stat
          order={2}
          type='activity'
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 100)
          }
          username='Will Smith'
          price='2.7'
        >
          ⁄
        </Stat>
        <Stat
          order={3}
          type='activity'
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 100)
          }
          username='Jane Doe'
          price='1.9'
        ></Stat>
        <Stat
          order={4}
          type='activity'
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 100)
          }
          username='Selena Gomez'
          price='6.4'
        >
          ⁄
        </Stat>
        <Stat
          order={5}
          type='activity'
          image={
            'https://picsum.photos/200?random=' +
            Math.floor(Math.random() * 100)
          }
          username='Taylor Swift'
          price='2.4'
        >
          ⁄
        </Stat>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    marginVertical: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default Activity;
