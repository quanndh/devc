/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar

} from 'react-native';
import AppStack from './src/navigation/AppStack/AppStack';
import { NavigationContainer } from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer >
          <AppStack />
        </NavigationContainer>
      </SafeAreaView>

    </>
  );
};

export default App;
