import { View,Button, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarStyle:{ 
        backgroundColor:"black",
        borderTopColor:"black",
        // height:70,
        paddingBottom:10,
        paddingTop:10
        }


        
        }} >
 
      <Tabs.Screen 
      name="index" 
      options={{
        title:"index",
        tabBarIcon:({color,size})=>(
        <Ionicons name="flash" size={size} color={color} />
        )
    
      }}
      />

       <Tabs.Screen 
      name="settings" 
      options={{
        title:"Settings",
        tabBarIcon:({color,size})=>(
        <Ionicons name="settings" size={size} color={color}  />
        )
      }}
      />
    </Tabs>
  )
}

export default TabsLayout