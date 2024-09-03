import { View, Text, Image, SafeAreaView, StyleSheet, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';
import { StatusBar } from 'expo-status-bar';

const StyledLinearGradient = styled(LinearGradient);

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const slideAnim = useRef(new Animated.Value(50)).current; 

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <StyledLinearGradient
      className="flex-1"
      colors={['#0F172A', '#0E2459', '#192f6a']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.container} className="min-h-screen">
        <Animated.View style={[styles.centeredView, { opacity: fadeAnim }]}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/splash.png')}
              resizeMode="contain"
              style={styles.logo}
            />
            <View>
              <Text style={styles.ProContainer}>
                Pro
              </Text>
              <Text style={styles.titleText}>
                Caltrix
              </Text>
            </View>
          </View>
        </Animated.View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>
            Your Calculator, Reimagined
          </Text>
        </View>
        <Animated.View style={[styles.versionContainer, { transform: [{ translateY: slideAnim }] }]}>
          <Text style={styles.versionText}>
            VERSION 1.0
          </Text>
        </Animated.View>
      </SafeAreaView>
      <StatusBar style="light" />
    </StyledLinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10, // Adjust as needed
  },
  logo: {
    width: 50,
    height: 50,
  },
  ProContainer: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    backgroundColor: '#000',
    color: '#fff',
    padding: 5,
    width: 50,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    position: 'absolute',
    top: -5,
    right: -45,
    zIndex: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    marginTop: 10,
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  TextContainer: {
    position: 'absolute',
    bottom: 80, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'transparent',
    width: '100%',
  },
  Text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
  },
});

export default SplashScreen;
