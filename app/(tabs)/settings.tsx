import { View, Text } from 'react-native'
import React from 'react'

const settings = () => {
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
      }}>settings</Text>
    </View>
  )
}

export default settings