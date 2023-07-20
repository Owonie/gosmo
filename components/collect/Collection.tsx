import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { CollectionData } from '../../type/objekt';

interface CollectionProps {
  collectionData: CollectionData;
}

const Collection: React.FC<CollectionProps> = ({ collectionData }) => {
  return (
    <ScrollView>
      {collectionData.ownedNfts.map((collection, index) => (
        <View key={index} style={[styles.card]}>
          <Image
            source={{ uri: collection.media[0].raw }}
            style={styles.image}
          />
          <Text>{collection.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default Collection;
