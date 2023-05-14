import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import LayoutDefault from './src/compoments/layout/LayoutDefault';
import Login from './src/screens/Auth/Login';

SplashScreen.preventAutoHideAsync();

const Stacks = [
  {
    name: "login",
    component: Login,
    auth: false,
    layout: LayoutDefault
  },
  {
    name: "home",
    component: Home,
    auth: false,
    layout: LayoutDefault
  }
]

const Stack = createNativeStackNavigator();
function StackNavigator() {
  const [fontsLoaded] = useFonts({
    "Inter": require("./assets/fonts/Inter-VariableFont_slnt_wght.ttf")
  })

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Stacks.map((item) => (
        <Stack.Screen
          name={item.name}
          component={(props) => {
            const Layout = item.layout;
            const Component = item.component;
            return (
              <Layout {...props}>
                <Component />
              </Layout>
            )
          }}
          key={item.name}
        />
      ))}
    </Stack.Navigator>
  )
}

export default StackNavigator