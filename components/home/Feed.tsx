import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { Text, View } from '../Themed';
import Card from '../common/Card';
import { MonoText } from '../StyledText';

export default function Feed() {
  return (
    <ScrollView>
      <Card style={{ backgroundColor: '#34b780' }}>
        <View style={styles.getStartedContainer}>
          <Text
            style={styles.getStartedText}
            lightColor='rgba(0,0,0,0.8)'
            darkColor='rgba(255,255,255,0.8)'
          >
            What about Park-Gowon
          </Text>
          <Image
            style={{ width: 200, height: 200 }}
            source={require('../../assets/images/gowon.jpg')}
          />
          <View
            darkColor='rgba(255,255,255,0.05)'
            lightColor='rgba(0,0,0,0.05)'
          ></View>
          <Text
            style={styles.getStartedText}
            lightColor='rgba(0,0,0,0.8)'
            darkColor='rgba(255,255,255,0.8)'
          >
            One And Only
          </Text>
        </View>
      </Card>
      <Text
        style={styles.getStartedText}
        lightColor='rgba(0,0,0,0.8)'
        darkColor='rgba(255,255,255,0.8)'
      >
        COSMO EXCLUSIVE
      </Text>
      <View style={styles.helpContainer}>
        <Card style={{ width: 200, height: 150, marginBottom: 20 }}>
          <ExternalLink href='https://www.youtube.com/watch?v=UDxID0_A9x4'>
            <Image
              source={require('../../assets/images/OneAndOnly.png')}
              style={{
                aspectRatio: 16 / 9,
                width: 200,
                height: 150,
              }}
            />
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              GOWON 'One And Only' MV | PARK-GOWON
            </Text>
            <MonoText>#Gowon #One And Only #Owon</MonoText>
          </ExternalLink>
        </Card>
      </View>
      <View style={styles.helpContainer}>
        <Text>What's up in HASU?</Text>
        <View style={styles.cardContainer}>
          <Card style={{ width: 200, height: 150, marginBottom: 20 }}>
            <Image
              source={require('../../assets/images/gowon.jpg')}
              style={{
                aspectRatio: 16 / 9,
                width: 200,
                height: 150,
                marginBottom: 20,
              }}
            />
          </Card>
        </View>
        <View style={styles.helpContainer}>
          <Card style={{ width: 200, height: 150, marginBottom: 20 }}>
            <Image
              source={require('../../assets/images/gowon1.jpg')}
              style={{
                aspectRatio: 16 / 9,
                width: 200,
                height: 150,
                marginBottom: 20,
              }}
            />
          </Card>
        </View>
        <View style={styles.helpContainer}>
          <Card style={{ width: 200, height: 150, marginBottom: 20 }}>
            <Image
              source={require('../../assets/images/gowon2.jpg')}
              style={{
                aspectRatio: 16 / 9,
                width: 200,
                height: 150,
                marginBottom: 20,
              }}
            />
          </Card>
        </View>
        <View style={styles.helpContainer}>
          <Card style={{ width: 200, height: 150, marginBottom: 20 }}>
            <Image
              source={require('../../assets/images/gowon3.jpg')}
              style={{
                aspectRatio: 16 / 9,
                width: 200,
                height: 150,
                marginBottom: 20,
              }}
            />
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 50,
    alignItems: 'center',
  },

  helpLinkText: {
    textAlign: 'center',
  },
  cardContainer: {},
});
