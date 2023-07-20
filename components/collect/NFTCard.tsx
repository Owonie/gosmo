import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface NFTCardProps {
  style?: StyleProp<ViewStyle>;
  imageSource: ImageSourcePropType;
}

const NFTCard: React.FC<NFTCardProps> = ({ style, imageSource }) => {
  return (
    <View style={[styles.card, style]}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 10, // 둥글게 만들고 싶은 정도를 조절합니다. 원하는 값으로 변경 가능합니다.
    padding: 10, // 카드 주변으로 간격을 주려면 padding을 사용합니다.
  },
  image: {
    width: 200,
    height: 200, // 이미지의 가로와 세로 크기를 조절합니다. 필요에 따라 변경 가능합니다.
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default NFTCard;
