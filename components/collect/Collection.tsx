import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { CollectionData } from '../../type/objekt';

interface CollectionProps {
  collectionData: CollectionData;
}

const Collection: React.FC<CollectionProps> = ({ collectionData }) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.cardContainer}>
        {collectionData.ownedNfts.map((collection, index) => (
          <View key={index} style={[styles.card]}>
            <Image
              source={{ uri: collection.media[0].raw }}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.textOverlay}>
                {collection.metadata.objekt.collectionNo}
              </Text>
              <Text style={styles.textOverlayNo}>
                #{collection.metadata.objekt.objektNo}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    width: 365,
    magin: 50,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '31%',
    marginBottom: 13,
    marginHorizontal: 3,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  textContainer: {
    width: 20,
    position: 'absolute',
    bottom: 50,
    left: '86%',
    paddingVertical: 5,
  },
  textOverlay: {
    fontSize: 7,
    bottom: 32,
    fontWeight: '700',
    borderRadius: 4,
    color: 'black',
    transform: [{ rotate: '90deg' }],
  },
  textOverlayNo: {
    fontSize: 7,
    bottom: 20,
    borderRadius: 4,
    color: 'grey',
    transform: [{ rotate: '90deg' }],
  },
});

export default Collection;
