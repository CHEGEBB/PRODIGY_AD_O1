import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SplashScreen from '../components/SplashScreen';
import TabBar from '../components/TabBar';
import Basic from './index';
import Advance from './advance';
import Financial from './financial';
import Scientific from './scientific';

const App = () => {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isShowSplashScreen) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1E1E1E',
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
          tabBarIconStyle: {
            marginTop: 5,
          },
        }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'General',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="advance"
          options={{
            title: 'Advance',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          }}
        />
        <Tabs.Screen
          name="financial"
          options={{
            title: 'Financial',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="dollar" color={color} />,
          }}
        />
        <Tabs.Screen
          name="scientific"
          options={{
            title: 'Scientific',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="flask" color={color} />,
          }}
        />
      </Tabs>
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
  container: {
    flex: 1,
  },
});

export default App;