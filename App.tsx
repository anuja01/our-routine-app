/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/navigation/StackNavigation';


function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <StackNav />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

export default App;
