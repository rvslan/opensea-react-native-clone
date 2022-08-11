import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Card = ({ name, image, size, onCardPress, type = 'default' }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onCardPress}>
      <Image
        source={{
          uri: image,
        }}
        style={[
          styles.image,
          {
            width: size,
            height: size,
          },
        ]}
      />
      <Text
        style={type === 'category' ? styles.categoryTitle : styles.defaultTitle}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  image: {
    borderRadius: 20,
  },
  defaultTitle: {
    color: '#000',
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 10,
    marginLeft: 5,
  },
  categoryTitle: {
    position: 'absolute',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    bottom: 20,
    left: 20,
  },
});

export default Card;
