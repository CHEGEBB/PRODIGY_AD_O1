import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
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
      <View>
      <View className="mt-0">
      <Text className="mt-2 text-4xl font-black tracking-wide text-white">
        Caltrix
        </Text>
      </View>
      <View>
        <Text style={styles.ProContainer}>
          Pro
        </Text>
      </View>
      </View>
        </View>
      </SafeAreaView>
    </StyledLinearGradient>
  );
}

const styles= StyleSheet.create({
  ProContainer: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    backgroundColor:'#000',
    color: '#fff',
    padding: 5,
    width: 50,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    position: 'absolute',
    top: -50,
    right: -45,
    zIndex: 100,
    overflow: 'hidden',
  },
})

export default SplashScreen;
