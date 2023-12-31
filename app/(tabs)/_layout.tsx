import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { View } from '../../components/Themed';
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerStyle: {
          backgroundColor: 'black', // 헤더의 배경색을 검은색으로 설정
        },
        headerTintColor: 'white', // 헤더의 글자색을 흰색으로 설정 (예시로 흰색 지정, 필요에 따라 다른 색상 사용 가능)
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name='home' size={24} color={color} />
          ),
          headerTitleAlign: 'left',

          headerRight: () => (
            <Link href='/shopModal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign
                    name='shoppingcart'
                    size={24}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='collect'
        options={{
          title: 'Collect',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='star-box-multiple-outline'
              size={24}
              color={color}
            />
          ),
          headerTitleAlign: 'left',
          headerRight: () => (
            <Link href='/cameraModal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <View>
                    <MaterialCommunityIcons
                      name='qrcode-scan'
                      size={24}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  </View>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='my'
        options={{
          title: 'My',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='user-circle' size={24} color={color} />
          ),
          headerTitleAlign: 'left',
        }}
      />
    </Tabs>
  );
}
