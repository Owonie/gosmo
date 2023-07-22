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
      <Card
        style={{
          backgroundColor: '#34b780',
          marginHorizontal: 28,
          marginVertical: 15,
          height: 145,
        }}
      >
        <View style={styles.getStartedContainer}>
          <View style={styles.textContainer}>
            <Text
              style={{
                fontSize: 17,
                lineHeight: 24,
                backgroundColor: '#34b780',
                fontWeight: '700',
              }}
              lightColor='rgba(0,0,0,0.8)'
              darkColor='rgba(255,255,255,0.8)'
            >
              What about
            </Text>
            <Text
              style={{
                fontSize: 17,
                lineHeight: 24,
                backgroundColor: '#34b780',
                fontWeight: '800',
              }}
              lightColor='rgba(0,0,0,0.8)'
              darkColor='rgba(255,255,255,0.8)'
            >
              Park-Gowon
            </Text>
            <Text
              style={{
                fontSize: 12,
                backgroundColor: '#34b780',
                paddingTop: 20,
              }}
              lightColor='rgba(0,0,0,0.8)'
              darkColor='rgba(255,255,255,0.8)'
            >
              [MV] Park-Gowon
            </Text>
            <Text
              style={{
                fontSize: 12,
                backgroundColor: '#34b780',
              }}
              lightColor='rgba(0,0,0,0.8)'
              darkColor='rgba(255,255,255,0.8)'
            >
              One And Only
            </Text>
          </View>
          <Image
            style={{ width: 130, height: 90, borderRadius: 6 }}
            source={require('../../assets/images/gowon.jpg')}
          />

          <View
            darkColor='rgba(255,255,255,0.05)'
            lightColor='rgba(0,0,0,0.05)'
          ></View>
        </View>
      </Card>

      <View style={styles.helpContainer}>
        <Text
          style={styles.subTitle}
          lightColor='rgba(0,0,0,0.8)'
          darkColor='rgba(255,255,255,0.8)'
        >
          COSMO EXCLUSIVE
        </Text>
        <Card style={styles.card}>
          <ExternalLink href='https://www.youtube.com/watch?v=UDxID0_A9x4'>
            <Image
              source={require('../../assets/images/OneAndOnly.png')}
              style={{
                aspectRatio: 16 / 9,
                width: 200,
                height: 150,
              }}
            />
            <Text lightColor={Colors.light.tint}>
              GOWON 'One And Only' MV | PARK-GOWON
            </Text>
            <MonoText>#Gowon #One And Only #Owon</MonoText>
          </ExternalLink>
        </Card>
      </View>
      <View style={styles.helpContainer}>
        <Text style={styles.subTitle}>What's up in HASU?</Text>

        <Card style={styles.card}>
          <Image
            source={require('../../assets/images/gowon.jpg')}
            style={{
              aspectRatio: 16 / 9,
              height: 150,
              marginBottom: 20,
            }}
          />
        </Card>

        <Card style={styles.card}>
          <Image
            source={require('../../assets/images/gowon1.jpg')}
            style={{
              aspectRatio: 16 / 9,
              height: 150,
              marginBottom: 20,
            }}
          />
        </Card>

        <Card style={styles.card}>
          <Image
            source={require('../../assets/images/gowon2.jpg')}
            style={{
              aspectRatio: 16 / 9,
              height: 150,
              marginBottom: 20,
            }}
          />
        </Card>

        <Card style={styles.card}>
          <Image
            source={require('../../assets/images/gowon3.jpg')}
            style={{
              aspectRatio: 16 / 9,
              height: 150,
              marginBottom: 20,
            }}
          />
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#34b780',
  },
  textContainer: {
    marginHorizontal: 40,
    right: 40,
    bottom: 10,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    backgroundColor: '#34b780',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 50,
    alignItems: 'center',
  },
  card: {
    height: 150,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 17,
    color: 'white',
    fontWeight: '700',
    right: 100,
  },
});
