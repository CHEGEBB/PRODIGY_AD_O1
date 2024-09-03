import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.bottomBar}></View>
      {/* Container will take 2/3 of the screen height */}
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello, Linear Gradient!
        </Text>
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
    flex: 2/3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomBar: {
    flex: 1/3,
    backgroundColor: '#0F172A',
  },
});
