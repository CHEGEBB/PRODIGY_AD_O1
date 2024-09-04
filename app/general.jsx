import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CalculatorUi from '../components/CalculatorUi';
import CalculatorDisplay from '../components/CalculatorDisplay';

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.bottomBar}>
        <CalculatorDisplay expression={expression} result={result} />
      </View>
      <View style={styles.container}>
        <CalculatorUi 
          expression={expression}
          result={result}
          setExpression={setExpression}
          setResult={setResult}
        />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  bottomBar: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
});
