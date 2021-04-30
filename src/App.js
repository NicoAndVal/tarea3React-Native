import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RootNavigation from './routes/Root';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
  },
});

import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
        <NavigationContainer>
          <RootNavigation/>
        </NavigationContainer>
  );
};

export default App;
