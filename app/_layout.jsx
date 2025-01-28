
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack screenOptions={{
         animation:"slide_from_right"
    }}>
       <Stack.Screen name='index' options={{
              headerShown:false
       }}/>
    
     </Stack>
  )
}

const styles = StyleSheet.create({})