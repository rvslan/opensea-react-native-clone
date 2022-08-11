import { ScrollView, Text, StyleSheet } from 'react-native';
import React from 'react';

import { Card, Section, UserProfileCard } from '../components/Home';
import data from '../mocks/data';
import Input from '../components/Search/Input';

const Search = () => {
  return (
    <ScrollView style={styles.container}>
      <Input />
      <Section
        containerStyle={styles.sectionContainer}
        titleStyle={styles.sectionTitle}
        DataComponent={Card}
        title='All categories'
        data={data.categories}
      />
      <Section
        titleStyle={styles.secondSectionTitle}
        DataComponent={UserProfileCard}
        containerStyle={styles.secondSectionContainer}
        title='Trending collections'
        data={data.users}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 0,
  },
  secondSectionContainer: {
    marginTop: 0,
    marginVertical: 0,
  },
  secondSectionTitle: {
    fontSize: 18,
    marginBottom: 25,
  },
});

export default Search;
