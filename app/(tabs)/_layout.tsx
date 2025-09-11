import { View,Button, Text } from 'react-native'
import React, { use } from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/hooks/useTheme'

const TabsLayout = () => {

  const {theme, colors} = useTheme();

  const backgroundColor = theme === "dark" ? "#18181b" : "#fff";
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarStyle:{ 
        backgroundColor:backgroundColor,
        borderTopColor:"black",
        height:90,
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