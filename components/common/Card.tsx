import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface CardProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ style, children }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 10, // 둥글게 만들고 싶은 정도를 조절합니다. 원하는 값으로 변경 가능합니다.
    padding: 10, // 카드 주변으로 간격을 주려면 padding을 사용합니다.
  },
});

export default Card;
