import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Avatar = ({ image, size = 50, online, circle }) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
        },
      ]}
    >
      {circle && online && (
        <MaterialCommunityIcons
          style={[
            styles.icon,
            {
              left: size * 0.75,
              top: size * 0.05,
            },
          ]}
          name='circle'
          color='green'
          size={13}
        />
      )}
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: size,
          height: size,
          borderRadius: circle ? size / 2 : size / 5,
          borderWidth: 0.5,
        }}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
});

export default Avatar;
