import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './app/layout';

export default function App() {
  return (
    <NavigationContainer>
      <Layout>
        {/* Add your screens here with your navigator */}
      </Layout>
    </NavigationContainer>
  );
}