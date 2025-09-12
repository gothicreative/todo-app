import { View,Button, Text } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'
import { createSettingsStyles } from '../../assets/styles/setting.styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
const settings = () => {
    const {colors, toggleDarkMode} = useTheme();



    const settingStyles = createSettingsStyles(colors);

    // const backgroundColor = theme === "dark" ? "#18181b" : "#fff";
    // const textColor = theme === "dark" ? "#fff" : "#000";
  return (
   <LinearGradient style={settingStyles.container} colors={colors.gradients.background} >
    
    <SafeAreaView style={settingStyles.safeArea}>
            <StatusBar barStyle={colors.statusBarStyle} />
      
      <Text style={{
        color:colors.text,
        fontSize:20,
        fontWeight:"bold"
      }}>setting</Text>

    </SafeAreaView>
    </LinearGradient>
  )
}

export default settings