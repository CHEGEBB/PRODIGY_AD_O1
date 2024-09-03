import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Basic from './general/Basic'
import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';

import SplashScreen from './SplashScreen'

const StyledLinearGradient = styled(LinearGradient);
const index = () => {
    const [isShowSplashScreen, setisShowSplashScreen] = useState(true);

    useEffect(() => {
        setTimeout(() =>{
            setisShowSplashScreen(false)
        }, 2000)
    }, [])
  return (
    <StyledLinearGradient
    className="flex-1"
    colors={['#4c669f', '#3b5998', '#192f6a']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    <SafeAreaView className="flex-1 min-h-screen bg-slate-500 ">
    {  isShowSplashScreen ?  <SplashScreen/> :  <SplashScreen/>
    }
    </SafeAreaView>
    <StatusBar
        style="light"
        backgroundColor="#4c669f"
        barStyle="light-content"
        translucent={false}
        showHideTransition="slide"
        animated={true}
        hideWhenStopped={true}
        hidden={false}
      />
    </StyledLinearGradient>
  )
}

export default index