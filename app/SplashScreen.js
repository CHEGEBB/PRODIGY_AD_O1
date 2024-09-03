import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';
import { StatusBar } from 'expo-status-bar';

const StyledLinearGradient = styled(LinearGradient);


const SplashScreen = () => {
  return (
    <StyledLinearGradient
      className="flex-1"
      colors={['#0F172A', '#0E2459', '#192f6a']}
      start={{ x: 0, y: 0}}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView className="items-center justify-center flex-1 ">
      <View className="flex-row justify-center gap-3">
      <View>
        <Image 
          source={require('../assets/splash.png')}
          resizeMode="contain"
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View className="mt-4">
      <Text className="mt-2 text-4xl font-black tracking-wide text-white">
        Caltrix
        </Text>
      </View>
        </View>
      </SafeAreaView>
    </StyledLinearGradient>
  );
}

export default SplashScreen;
