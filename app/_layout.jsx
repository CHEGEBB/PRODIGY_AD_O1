import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet,View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SplashScreen from '../components/SplashScreen';
import { Tabs } from 'expo-router';
import Basic from './general';
import Advance from './advance';
import  Financial from './financial'
import  Scientific from './scientific'
import TabBar from '../components/TabBar';

const StyledLinearGradient = styled(LinearGradient);

const App = () => {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <View style={styles.safeAreaView}>
        {isShowSplashScreen ? (
          <SplashScreen />
        ) : (
          <Tabs
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: '#1E1E1E',
                borderTopWidth: 0,
              },
              tabBarActiveTintColor: 'blue', // Active tab icon color
              tabBarInactiveTintColor: 'gray', // Inactive tab icon color
              tabBarLabelStyle: {
                fontSize: 14, 
                fontWeight: 'bold', // Tab label font weight
              },
              tabBarIconStyle: {
                marginTop: 5, // Adjust icon margin
              },
            }}
            tabBar={props=><TabBar{...props}/>}
          >
            <Tabs.Screen
              name="general"
              options={{
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                component: Basic, 
              }}
            />
            <Tabs.Screen
              name="advance"
              options={{
                title: 'Advance',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                component: Advance,
              }}
            />
              <Tabs.Screen
              name="financial"
              options={{
                title: 'Financial',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                component: Financial,
              }}
            />
              <Tabs.Screen
              name="scientific"
              options={{
                title: 'Scientific',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                component:Scientific,
              }}
            />
          </Tabs>
        )}
        <StatusBar
          style="light"
          backgroundColor="#4c669f"
          barStyle="light-content"
          translucent={false}
        />
      </View>
        );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  }
});

export default App;
