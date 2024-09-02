import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Basic from './general/Basic'

import SplashScreen from './SplashScreen'


const index = () => {
    const [isShowSplashScreen, setisShowSplashScreen] = useState(true);

    useEffect(() => {
        setTimeout(() =>{
            setisShowSplashScreen(false)
        }, 2000)
    }, [])
  return (
    <SafeAreaView className="bg-slate-500 flex-1 ">
    {  isShowSplashScreen ?  <SplashScreen/> : <Basic/>
    }

    {/* <SplashScreen/> */}
    </SafeAreaView>
  )
}

export default index