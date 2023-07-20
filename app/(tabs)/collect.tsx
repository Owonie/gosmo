import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import SelectDropdown from 'react-native-select-dropdown';
import { Text, View } from '../../components/Themed';
import useGetCollection from '../../hooks/useGetCollection';
import Collection from '../../components/collect/Collection';

const members = ['Heejin', 'HaSeul', 'KimLip', 'JinSoul', 'Choerry', 'Gowon'];
const memberImages = {
  Heejin: require('../../assets/images/icons/HeeJin.webp'),
  JinSoul: require('../../assets/images/icons/JinSoul.webp'),
  HaSeul: require('../../assets/images/icons/HaSeul.webp'),
  KimLip: require('../../assets/images/icons/KimLip.webp'),
  Choerry: require('../../assets/images/icons/Choerry.webp'),
};
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
        <View style={headerStyles.dropdown}>
          <SelectDropdown
            data={members}
            onSelect={(selectedItem, index) => console.log(selectedItem, index)}
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
        </View>
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
      <View style={styles.content}>
        {/* @ts-ignore */}
        <Collection collectionData={data} />
      </View>
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
    flex: 0.14,
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 0.86,
  },
});

const headerStyles = StyleSheet.create({
  dropdown: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
  },
  filter: {},
  collectionNumber: {},
  orderBy: {},
  content: {},
});
