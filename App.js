import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NativeWindStyleSheet } from "nativewind";
import { Provider } from "react-redux";
import store from './src/redux/store';
import StackNavigator from './StackNavigator';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF5A6F',
    secondary: '#000000'
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <StackNavigator />
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
}
