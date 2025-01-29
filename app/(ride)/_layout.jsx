import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppMap from '../../components/AppMap'
import { Stack } from 'expo-router'

const RideLayout = () => {
  return (
   <>
    <View style={styles.wrapper}>
       <AppMap />
    </View>
    <View style={styles.wrapper22}>
         <Stack>
             <Stack.Screen 
                 name='home'
                 options={{
                     headerShown:false
                 }}
              />
               <Stack.Screen 
                 name='details'
                 options={
                     {
                         headerShown : false
                     }
                 }
              />
         </Stack>
    </View>
   </> 
    
  )
}

export default RideLayout

const styles = StyleSheet.create({
       wrapper : {
         height:500
       },
       wrapper22 : {
         height:500
       },
})