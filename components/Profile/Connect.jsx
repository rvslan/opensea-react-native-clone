import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { SvgCssUri } from 'react-native-svg';

const colors = {
  primary: 'rgb(0, 122, 255)',
  white: '#fff',
  grey: '#999',
};

const Connect = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Entypo
          name='wallet'
          size={100}
          style={styles.icon}
          color={colors.primary}
        />
        <Text style={styles.title}>Connect with wallet</Text>
        <Text style={styles.description}>
          Your crypto wallet securely stores your digital goods and
          cryptocurrencies. Connect to one wallet provider
        </Text>
      </View>
      <View style={styles.middle}>
        <TouchableOpacity style={styles.button}>
          <SvgCssUri
            style={styles.image}
            uri='https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg'
          />
          <Text style={styles.buttonTitle}>MetaMask</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name='shield'
            size={25}
            color={colors.primary}
          />
          <Text style={styles.buttonTitle}>Trust Wallet</Text>
        </TouchableOpacity>
        <Ionicons style={styles.button}>
          <MaterialCommunityIcons
            name='link'
            size={25}
            color={colors.primary}
          />
          <Text style={styles.buttonTitle}>Enter ethereum address</Text>
        </Ionicons>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.new}>New to wallets?</Text>
        <TouchableOpacity>
          <Text style={styles.learnMore}>Learn more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  top: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    width: '90%',
    fontWeight: 'bold',
    color: colors.grey,
    letterSpacing: 1,
  },
  middle: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.medium,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
  },
  image: {
    width: 25,
    height: 25,
  },
  buttonTitle: {
    fontWeight: 'bold',
    marginLeft: 15,
    fontSize: 16,
  },
  bottom: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  new: {
    color: colors.grey,
    fontWeight: 'bold',
  },
});

export default Connect;
