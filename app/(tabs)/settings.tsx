import { View,Button, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import { Background } from '@react-navigation/elements';

const settings = () => {
    const {colors, theme, toggleTheme} = useTheme();

    const backgroundColor = theme === "dark" ? "#18181b" : "#fff";
    const textColor = theme === "dark" ? "#fff" : "#000";
  return (
    
    <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

        backgroundColor:backgroundColor

    }}>
      <Text style={{
        color:textColor,
        fontSize:20,
        fontWeight:"bold"
      }}>setting</Text>
    <Button title='toggle-theme' onPress={toggleTheme} />

    </View>
  )
}

export default settings