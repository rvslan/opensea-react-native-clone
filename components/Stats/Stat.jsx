import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Avatar from './Avatar';

const Stat = ({ order, image, username, price, type }) => {
  return (
    <View style={styles.container}>
      {type === 'rankings' && <Text style={styles.order}>{order}</Text>}
      <View style={styles.details}>
        <Avatar
          image={image}
          size={60}
          circle={type === 'rankings'}
          online={true}
        />
        <View style={styles.userDetails}>
          <Text style={styles.username}>{username}</Text>
          <TouchableOpacity>
            <Text style={styles.more}>+ More</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={type === 'rankings' ? styles.priceDetails : styles.saleDetails}
      >
        {type === 'rankings' && (
          <MaterialCommunityIcons name='ethereum' size={18} />
        )}
        <Text
          style={[
            styles.price,
            {
              textAlign: type === 'activity' ? 'right' : 'left',
            },
          ]}
        >
          {type === 'rankings' ? price : 'Sale'}
        </Text>
        {type === 'activity' && <Text style={styles.time}>21 seconds ago</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    paddingHorizontal: 2,
    justifyContent: 'space-between',
  },
  order: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  userDetails: {
    justifyContent: 'space-between',
  },
  username: {
    fontWeight: 'bold',
    width: 200,
    marginVertical: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  more: {
    marginLeft: 15,
  },
  moreText: {
    color: 'grey',
    fontWeight: 'bold',
  },
  priceDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
  },
  saleDetails: {
    textAlign: 'right',
  },
  time: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default Stat;
