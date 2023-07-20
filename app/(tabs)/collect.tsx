import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import SelectDropdown from 'react-native-select-dropdown';
import { Text, View } from '../../components/Themed';
import NFTCard from '../../components/collect/NFTCard';
import useGetCollection from '../../hooks/useGetCollection';
import Collection from '../../components/collect/Collection';
import { CollectionData } from '../../type/objekt';

const countries = ['Heejin', 'HaSeul', 'KimLip', 'JinSoul', 'Choerry', 'Gowon'];

export default function CollectScreen() {
  const { data, loading, error } = useGetCollection(
    '0x3945fCd6d9E83Aebf33B2e58F7720b9Ea34c11D8'
  );
  if (loading) {
    return <Text>Loading...</Text>;
  } else {
    console.log(data);
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        <Link href='/cardModal' asChild>
          <Pressable>
            {({ pressed }) => (
              <AntDesign
                name='shoppingcart'
                size={24}
                style={{
                  marginRight: 15,
                  opacity: pressed ? 0.5 : 1,
                  color: 'white',
                }}
              />
            )}
          </Pressable>
        </Link>
      </View>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      {/* @ts-ignore */}
      <Collection collectionData={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
