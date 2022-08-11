import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';

import { Feather } from '@expo/vector-icons';

const Input = () => {
  return (
    <View style={styles.container}>
      <Feather name='search' size={20} color={'grey'} style={styles.icon} />
      <TextInput style={styles.input} placeholder='Search items' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 60,
    width: '90%',
    alignSelf: 'center',
  },
  icon: {
    padding: 10,
  },
  input: {
    height: 60,
    width: '100%',
    paddingLeft: 10,
  },
});

export default Input;
