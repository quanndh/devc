/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigations/RootStack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import ReduxService from './src/service/ReduxService';
import AppContent from './AppContent';

const App: () => React$Node = () => {

  useEffect(() => {
    ReduxService.setStore(store);
  }, [])

  return (
    <>

      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <AppContent />
        </SafeAreaView>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

export default App;
