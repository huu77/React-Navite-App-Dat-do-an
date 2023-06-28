import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/Navigation';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;