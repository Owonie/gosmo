import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import SelectDropdown from 'react-native-select-dropdown';
import { Text, View } from '../../components/Themed';
import useGetCollection from '../../hooks/useGetCollection';
import Collection from '../../components/collect/Collection';
import { useState } from 'react';

const members = [
  'ARTMS',
  'HeeJin',
  'HaSeul',
  'KimLip',
  'JinSoul',
  'Choerry',
  'Gowon',
];

const order = ['최신순', '오래된 순', '낮은 번호순', '높은 번호순'];
const memberImages: { [key: string]: any } = {
  HeeJin: require('../../assets/images/icons/HeeJin.webp'),
  JinSoul: require('../../assets/images/icons/JinSoul.webp'),
  HaSeul: require('../../assets/images/icons/HaSeul.webp'),
  KimLip: require('../../assets/images/icons/KimLip.webp'),
  Choerry: require('../../assets/images/icons/Choerry.webp'),
  Gowon: require('../../assets/images/gowon.jpg'),
  ARTMS: require('../../assets/images/icons/ARTMS_official_logo.webp'),
};

export default function CollectScreen() {
  const [categoryKey, setCategoryKey] = useState('ARTMS');
  const [orderbyKey, setOrderbyKey] = useState('최신순');

  const { data, loading, error } = useGetCollection(
    '0x3945fCd6d9E83Aebf33B2e58F7720b9Ea34c11D8'
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dropdown}>
          <View>
            <SelectDropdown
              data={members}
              buttonStyle={styles.buttonStyle}
              dropdownStyle={{
                borderRadius: 13,
              }}
              rowStyle={{
                width: 300,
                height: 55,
                borderBottomWidth: 0,
              }}
              onSelect={(selectedItem, index) => setCategoryKey(selectedItem)}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              defaultValue={'ARTMS'}
              renderCustomizedButtonChild={(selectedItem, index) => {
                return (
                  <View style={styles.buttonContainer}>
                    <Image
                      style={[
                        styles.iconImage,
                        { borderColor: '#9b63de', borderWidth: 2 },
                      ]}
                      source={memberImages[selectedItem]}
                    />
                    <Text>{selectedItem}</Text>
                  </View>
                );
              }}
              renderCustomizedRowChild={(selectedItem, index) => {
                return (
                  <View style={styles.rowContainer}>
                    <Image
                      style={styles.iconImage}
                      source={memberImages[selectedItem]}
                    />
                    <Text>{selectedItem}</Text>
                  </View>
                );
              }}
            />
          </View>
          <Link href='/cardModal' asChild>
            <Pressable>
              {({ pressed }) => (
                <AntDesign
                  name='swap'
                  size={22}
                  style={{
                    margin: 5,
                    marginHorizontal: 15,
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    opacity: pressed ? 0.5 : 1,
                    color: '#a6a6a6',
                    height: 28,
                  }}
                />
              )}
            </Pressable>
          </Link>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 75,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 220,
            right: 0,
          }}
        >
          <SelectDropdown
            buttonStyle={{
              padding: 5,
              width: 100,
              height: 25,
              paddingHorizontal: 10,
              backgroundColor: 'black',
              borderBottomWidth: 0,
              bottom: 5,
              right: 2,
            }}
            buttonTextStyle={{
              color: 'white',
              fontSize: 10,
              fontWeight: '600',
            }}
            dropdownStyle={{
              borderRadius: 13,
            }}
            rowStyle={{
              width: 100,
              height: 55,
              borderBottomWidth: 0,
            }}
            rowTextStyle={{
              color: 'black',
              fontSize: 10,
              fontWeight: '600',
            }}
            data={order}
            onSelect={(selectedItem, index) => setOrderbyKey(selectedItem)}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            defaultValue={'latest'}
          />

          <AntDesign
            name='down'
            size={12}
            style={{
              color: 'white',
              position: 'absolute',
              top: 1,
              left: 75,
            }}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Collection
          // @ts-ignore
          collectionData={data}
          categoryKey={categoryKey}
          orderbyKey={orderbyKey}
        />
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
    flex: 0.12,
    padding: 5,
    bottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 0.88,
  },
  iconImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 15,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2c',
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2c',
    padding: 10,
  },
  buttonStyle: {
    width: 300,
    height: 52,
    paddingHorizontal: 0,
    borderRadius: 13,
  },
  dropdown: {
    flex: 1,
    flexDirection: 'row',
  },
});
