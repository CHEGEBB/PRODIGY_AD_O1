import { View, Text, Image } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View className="bg-[#0F172A] flex-1 justify-center items-center">
      <View className=" w-80 items-center">
        <Image 
          source={require('../assets/splash.png')}
          resizeMode="contain"
          style={{ width: 150, height: 150 }}
        />
      </View>
    </View>
  );
}

export default SplashScreen;
