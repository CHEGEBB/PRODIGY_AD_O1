import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
      <SafeAreaView className="items-center justify-center flex-1 bg-[#0F172A]">
      <View className="flex bg-slate-600">
        <Text className="text-xl font-bold text-white">
          Hello, Linear Gradient!
        </Text>
        </View>
        <StatusBar
        style="light"
        backgroundColor="#0F172A"
        barStyle="dark-content"
        translucent={false}
        showHideTransition="slide"
        animated={true}
        hideWhenStopped={true}
        hidden={false}
      />
      </SafeAreaView>
  );
}
