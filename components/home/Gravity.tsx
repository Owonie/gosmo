import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View } from '../Themed';

export default function Gravity() {
  return (
    <View>
      <Image
        source={require('../../assets/images/artms.jpg')}
        style={{
          width: 400,
          height: 650,
          marginBottom: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
