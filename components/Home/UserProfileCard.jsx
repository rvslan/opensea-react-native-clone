import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const UserProfileCard = ({ name, username, coverImage, avatar, verified }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={{
            uri: coverImage,
          }}
          style={styles.coverImage}
        />
      </View>
      <Image
        source={{
          uri: coverImage,
        }}
        style={styles.avatar}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.usernameDetails}>
          <Text style={styles.title}>{name}</Text>
          {verified && (
            <MaterialCommunityIcons
              name='check-decagram'
              size={20}
              color={'rgb(0, 122, 255)'}
              style={styles.icon}
            />
          )}
        </View>
        <Text style={styles.username}>{username}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 185,
    height: 200,
    marginHorizontal: 10,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3.41,
    elevation: 3,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topContainer: {
    flex: 1,
  },
  coverImage: {
    width: 185,
    height: 115,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  avatar: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#fff',
    top: 75,
    left: 70,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  usernameDetails: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontSize: 17,
    marginBottom: 5,
  },
  username: {
    color: 'rgb(0, 122, 255)',
  },
  icon: {
    marginLeft: 20,
  },
});

export default UserProfileCard;
