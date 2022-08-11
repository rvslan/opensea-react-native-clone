import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import {
  Card,
  NFTCard,
  Avatar,
  UserProfileCard,
  Section,
} from '../components/Home';

import data from '../mocks/data';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Section DataComponent={Card} title='Categories' data={data.categories} />
      <Section
        DataComponent={Card}
        title='Notable Drops'
        data={data.notableDrops}
      />
      <Section
        DataComponent={UserProfileCard}
        title='Trending collections'
        data={data.users}
      />
      <Section DataComponent={NFTCard} title='Hot new items' data={data.nfts} />
      <Section DataComponent={NFTCard} title='Expiring soon' data={data.nfts} />
      <Section
        DataComponent={NFTCard}
        title='New top sellers'
        data={data.nfts}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default Home;
