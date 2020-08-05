/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View,
  Modal
} from 'react-native';
import useLocation from './src/hooks/useLocation';
import Map from './src/components/Map/Map';

const App: () => React$Node = () => {
  const [lat, long] = useLocation();
  const [init, setInit] = useState(true)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Modal
          visible={init}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
            <ActivityIndicator color="black" size="large" />
          </View>
        </Modal>
        <Map onReady={() => setInit(false)} lat={lat} long={long} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
