import { View,Button, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../hooks/useTheme'

const settings = () => {
    const {colors, theme, toggleTheme} = useTheme();
  return (
    
    <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black"

    }}>
      <Text style={{
        color:"blue",
        fontSize:20,
        fontWeight:"bold"
      }}>setting</Text>
    <Button title='toggle-theme' onPress={toggleTheme} />

    </View>
  )
}

export default settings