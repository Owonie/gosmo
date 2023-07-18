import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name='home' size={24} color={color} />
          ),

          headerRight: () => (
            <Link href='/modal' asChild>
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
        }}
      />
      <Tabs.Screen
        name='my'
        options={{
          title: 'My',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='user-circle' size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
